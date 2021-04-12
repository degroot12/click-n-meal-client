import React from "react";

function IngredientInput() {

    return (
        <div>
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
                <input name="ingrAmount" type="number" class="form-control" id="ingrAmount" required/>
            </div>

        </div>
    )
}



export default IngredientInput;