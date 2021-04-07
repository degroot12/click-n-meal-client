import React from "react";

function CreateRecipe(props) {
    const {onCreateRecipe} = props
    return(
        <div>
            <h3>Create here your own recipe!</h3>
            <form onSubmit={onCreateRecipe} className="form">
            <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Name</label>
    <input name="name" type="text" class="form-control" id="name" required/>
  </div>
            <div class="mb-3">
    <label for="ingrName" class="form-label">Ingredients</label>
    <select name="ingrName" id="ingrList">
      <option value="water" selected="selected" >Water</option>
      <option value='sla' selected='selected'>sla</option>
      <option value='rijst' selected='selected'>rijst</option>
    </select>
    </div>
  <div class="mb-3">
    <label for="ingrUnit">Units:</label>
    <select name="ingrUnit" id="ingrUnit" >
      <option value="piece">piece</option>
      <option value="g">g</option>
      <option value="ml">ml</option>
      <option value="l">l</option>
      <option value="spoon">spoon</option>
      <option value="tablespoon">tablespoon</option>
      <option value="pinch">pinch</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Amount</label>
    <input name="ingrAmount" type="text" class="form-control" id="ingrAmount" required/>
  </div>
                <button type="submit" className="btn btn-primary">Lets go!</button>
            </form>
        </div>
    )
}

export default CreateRecipe;