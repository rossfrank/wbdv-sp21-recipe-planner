import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import service from "../../services/favorite-service";


const Favorite = ({ favorite = [],user, findFavorite, createFavorite, deleteFavorite }) => {
    const [Collect, setCollect] = useState(false);
    const {recipeId} = useParams()
    const [Record, setRecord] = useState(undefined);
    function handleClick() {
        if (Collect === true) {
          setCollect(false);
          deleteFavorite(Record.id);
        } else {
          setCollect(true);
          createFavorite(user.userId, recipeId, {})
        }
      }
      useEffect(()=>{
        service.findFavorite(user.userId, recipeId)
            .then((res)=> {
                if(res.userId === -1){
                    setCollect(false)
                }else{
                    setCollect(true)
                    setRecord(res)
                }
            })
    },[Collect])
    return(
        <div className="col-1 collect-op pr-1 pl-0">
        <i
          className={`far fa-heart fa-lg ${Collect ? "favorite" : ""}`}
          onClick={() => {
            if(user.isAuthenticated){
              handleClick()
            }else{
              alert("Please Log in first!")
            }

          }}
        />
      </div>)
}

const stpm = (state) => {
    return {
      favorite: state.favoriteReducer.favorites,
      user: state.userReducer.userCredential,
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
        deleteFavorite: (fId) => {
            service.deleteFavorite(fId)
            .then((status) =>
                dispatch({
                    type: 'DELETE_FAVORITE',
                    itemToDelete: {id: fId}
                })
            )
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
  