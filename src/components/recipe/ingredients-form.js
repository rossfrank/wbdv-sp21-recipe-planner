import {Link} from "react-router-dom";

const IngredientsForm = ({ingredients,setIngredients, recipeId}) => {
    return(
        <div className="form-group">
            <label>Ingredients</label>
            {ingredients.map((ingredient,ingredientIndex) => (
                <div className="row mb-2" key={ingredientIndex}>
                    <div className="col-6">
                        <input className="form-control" placeholder="Ingredient Name"
                               value={ingredient["name"]}
                               onChange={(e)=>{
                                   const newArr = ingredients.map((item,itemIndex) =>{
                                       if (itemIndex === ingredientIndex){
                                           item.name = e.target.value;
                                           return item
                                       }
                                       return item
                                   })
                                   setIngredients(newArr)
                               }}
                        />
                    </div>
                    <div className="col-3">
                        <input className="form-control" placeholder="amount"
                               value={ingredient["amount"]}
                               onChange={(e)=>{
                                   const newArr = ingredients.map((item,itemIndex) =>{
                                       if (itemIndex === ingredientIndex){
                                           item.amount = e.target.value;
                                           return item
                                       }
                                       return item
                                   })
                                   setIngredients(newArr)
                               }}
                        />
                    </div>
                    <div className="col-3">
                        <input className="form-control" placeholder="unit"
                               value={ingredient["unit"]}
                               onChange={(e)=>{
                                   const newArr = ingredients.map((item,itemIndex) =>{
                                       if (itemIndex === ingredientIndex){
                                           item.unit = e.target.value;
                                           return item
                                       }
                                       return item
                                   })
                                   setIngredients(newArr)
                               }}
                        />
                    </div>
                </div>
            ))}
            <div className="row">
                <Link className="col-6 pwd-info"
                      onClick={()=>{
                          setIngredients(prev=>{
                              return [...prev,
                                  { name: "", amount: "1", unit: "", recipeId: recipeId}]
                          })
                      }}>
                    Add new ingredients
                </Link>
            </div>
        </div>
    )
}

export default IngredientsForm