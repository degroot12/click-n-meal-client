import React, {useState} from "react";
import IngredientInput from "./IngredientInput"


function CreateRecipe(props) {
    const {onCreateRecipe} = props
    const blankIngr = {name: '', unit: '', amount: ''};
    const [ingrState, setIngrState] = useState ([ {...blankIngr} ]);
    
   
    const addIngr = () => {
      setIngrState([...ingrState, {...blankIngr} ])
    };

    const handleIngrChange = (event) => {
      const updatedIngr = [...ingrState];
      updatedIngr[event.target.dataset.idx][event.target.name] = 
      event.target.value;
      setIngrState(updatedIngr)
      // console.log('handleIngState --- ', event)
    };

    return(
        <div>
          <h3>Create here your own recipe!</h3>
          <form onSubmit={onCreateRecipe} className="form">
            <div className="mb-3">
              <label for="exampleInputPassword2" className="form-label">Name</label>
              <input 
                name="name" 
                type="text" 
                className="form-control" 
                id="name" required/>
            </div>            
              
            <input 
              type="button"               
              value="Add new ingredient"
              className="btn btn-primary" 
              onClick={addIngr}
            />
            
            {       
              ingrState.map((val, idx) => {
                const nameId    = `name_${idx}`;
                const unitId    = `unit_${idx}`;
                const amountId  = `amount_${idx}`;
              
               {/* data-idx: for controlling the inputs later */}
                  return (
                    
                    <div className="mb-3" key={`name-${idx}`}>
                      <label className="form-label" htmlFor={nameId}>{`Ingredient #${idx + 1}`} </label>
                      <br/>
                      <label className="form-label" htmlFor={nameId}>Choose ingredient: </label>
                      <div className="mb-3">
                        <select 
                          name={nameId} 
                          id={nameId} 
                          data-idx={nameId}
                          className="form-control" 
                          >
                            <option value="water" selected="selected" >Water</option>
                            <option value='sla' selected='selected'>sla</option>
                            <option value='rijst' selected='selected'>rijst</option>
                        </select>
                      </div>

                      <label htmlFor={amountId} className="form-label">Unit</label>
                      <input 
                        name={unitId} 
                        id={unitId} 
                        data-idx={unitId}
                        type="text" 
                        className="form-control" 
                        value={ingrState[idx].unit}
                        onChange={handleIngrChange}
                        required
                      />

                      <label htmlFor={amountId} className="form-label">Amount</label>
                      <input 
                        name={amountId} 
                        id={amountId} 
                        data-idx={amountId}
                        type="number" 
                        className="form-control" 
                        value={ingrState[idx].amount}
                        onChange={handleIngrChange}
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