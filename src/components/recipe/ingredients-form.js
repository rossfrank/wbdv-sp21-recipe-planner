const IngredientsForm = ({ingredients,setIngredients, recipeId}) => {
    return(
        <div className="form-group">
            {console.log(ingredients)}
            <label>Ingredients</label>
            {ingredients &&
            ingredients.map((ingredient,ingredientIndex) => (
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
                <p className="col-6 pwd-info btn btn-secondary"
                      onClick={()=>{
                          setIngredients([...ingredients,
                                  { name: "", amount: "1", unit: "", recipeId: recipeId}]
                          )
                      }}>
                    Add new ingredients
                </p>
            </div>
        </div>
    )
}

export default IngredientsForm