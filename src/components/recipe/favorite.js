import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import reviewService, { createReview } from "../../services/review-service";
import { useParams } from "react-router";
import service, { createFavorite } from "../../services/favorite-service";


const Favorite = ({ favorite = [], findFavorite, createFavorite, deleteFavorite }) => {
    const [Collect, setCollect] = useState(false);
    const {recipeId} = useParams()
    const [Record, setRecord] = useState(undefined);
    useEffect(()=>{
        service.findFavorite("1", recipeId)
            .then((res)=> {
                if(res.userId === -1){
                    setCollect(false)
                }else{
                    setCollect(true)
                    setRecord(res)
                }
            })
    },[])
    function handleClick() {
        if (Collect === true) {
          setCollect(false);
          deleteFavorite(Record.id);
        } else {
          setCollect(true);
          createFavorite("1", recipeId, {})
        }
      }
    return(
        <div className="col-7 collect-op">
        <i
          className={`far fa-heart fa-lg ${Collect ? "favorite" : ""}`}
          onClick={() => handleClick()}
        />
      </div>)
}

const stpm = (state) => {
    return {
      favorite: state.favoriteReducer.favorites,
    };
  };
  const dtpm = (dispatch) => {
    return {
        findFavorite: (uId, rId) =>
        service.findFavorite(uId, rId).then((theF) =>
          dispatch({
            type: "FIND_FAVORITE",
            favorite: theF,
          })
        ),
        deleteFavorite: (uId, rId) => {
            service.deleteFavorite(uId, rId)
            // .then((status) =>
            //     dispatch({
            //         type: 'DELETE_FAVORITE',
            //     })
            // )
        },
        createFavorite: (userId, recipeId, theF) => {
            service
              .createFavorite(userId, recipeId, theF)
              .then((theF) =>
                dispatch({
                  type: "CREATE_FAVORITE",
                  favorite: theF,
                })
              );
          },
  };
}
  
export default connect(stpm, dtpm)(Favorite);
  