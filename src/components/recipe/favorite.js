import React, { useEffect, useState } from "react";
import "./recipe-profile.css"
import { connect } from "react-redux";
import { useParams } from "react-router";
import service from "../../services/favorite-service";


const Favorite = ({user, createFavorite, deleteFavorite}) => {
    const [collect, setCollect] = useState(false);
    const {recipeId} = useParams()
    const [record, setRecord] = useState(undefined);
    function handleClick() {
        if (collect) {
          setCollect(false);
          deleteFavorite(user.userId, recipeId);
        } else {
          setCollect(true);
          createFavorite(user.userId, recipeId, {})
        }
      }

      useEffect(()=>{
        service.findFavoriteForUser(user.userId)
            .then((res)=> {
                res.map(r=>{
                    if (r.recipeId === recipeId){
                        setCollect(true);
                        setRecord(r);
                    }
                })
            })
    },[])
    return(
        <div className="col-1 collect-op pr-1 pl-0">
        <i
          className={`far fa-heart fa-lg ${collect ? "color-me-orange" : ""}`}
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
        deleteFavorite: (uId, rId) => {
            service.deleteRecipeFavoriteForUser(uId, rId)
            .then((res) =>{
                if (res.id){
                    dispatch({
                        type: 'DELETE_FAVORITE',
                        itemToDelete: {id: res.id}
                    })
                }
            })
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
  