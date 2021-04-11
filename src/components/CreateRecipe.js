import React, {useState} from "react";
import IngredientInput from "./IngredientInput"


function CreateRecipe(props) {
    const {onCreateRecipe} = props
    const blankIngr = {name: '', unit: '', amount: ''};
    const [ingrState, setIngrState] = useState ([ {...blankIngr} ]);
    const addCat = () => {
      setIngrState([...ingrState, {...blankIngr} ])
    };

    return(
        <div>
          <h3>Create here your own recipe!</h3>
          <form onSubmit={onCreateRecipe} className="form">
            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label">Name</label>
              <input name="name" type="text" class="form-control" id="name" required/>
            </div>            
              
            <input 
              type="button"               
              value="Add new ingredient"
              className="btn btn-primary" 
              onClick={addCat}
            />
            
            {       
              ingrState.map((val, idx) => {
                const nameId    = `name_${idx}`;
                const unitId    = `unit_${idx}`;
                const amountId  = `amount_${idx}`;
              
               {/* data-idx: for controlling the inputs later */}
                  return (
                    
                    <div class="mb-3" key={`name-${idx}`}>
                      <label class="form-label" htmlFor={nameId}>{`Ingredient #${idx + 1}`} </label>
                      <br/>
                      <label class="form-label" htmlFor={nameId}>Choose ingredient: </label>
                      <div class="mb-3">
                        <select 
                          name={nameId} 
                          id={nameId} 
                          data-idx={nameId}
                          class="form-control" 
                          >
                            <option value="water" selected="selected" >Water</option>
                            <option value='sla' selected='selected'>sla</option>
                            <option value='rijst' selected='selected'>rijst</option>
                        </select>
                      </div>

                      <label htmlFor={amountId} class="form-label">Unit</label>
                      <input 
                        name={unitId} 
                        id={unitId} 
                        data-idx={unitId}
                        type="text" 
                        class="form-control" 
                        required
                      />

                      <label htmlFor={amountId} class="form-label">Amount</label>
                      <input 
                        name={amountId} 
                        id={amountId} 
                        data-idx={amountId}
                        type="number" 
                        class="form-control" 
                        required
                      />
                  </div>                

                  )
              })
            }

               
            <br/>
            {/* <input type="button" className="btn btn-primary mt-3" value="Save new recipe!" />     */}
            <button type="submit" className="btn btn-primary">Lets go!</button>

          </form>
        </div>
    )
}

export default CreateRecipe;