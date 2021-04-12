import React, {useState} from "react";
import axios from "axios";
import config from "../config.js";
import IngredientInput from "./IngredientInput";


function CreateRecipe(props) {
    const {onCreateRecipe} = props
    const blankIngr = {name: '', unit: '', amount: ''};
    const [ingrState, setIngrState] = useState ([ {...blankIngr} ]);
    
   
    const addIngr = () => {
      setIngrState([...ingrState, {...blankIngr} ])
    };

    const handleIngrChange = (event) => {
      const updatedIngr = [...ingrState];
      console.log('event.dataset.idx --', event.target.dataset.idx)
      console.log('event.target name --', event.target.name)
      console.log('event.target --', event.target.value)
      console.log('update inr --', event.target.dataset.idx,event.target.className,"=",event.target.value  )
      console.log('update get value -',updatedIngr )
      updatedIngr[event.target.dataset.idx][event.target.className] = 
      event.target.value;
      setIngrState(updatedIngr)
      console.log('IngrState >>> --- ', ingrState)
    };


    const handleCreateRecipe = (event) => {
      event.preventDefault();
      console.log('before then block ---',event.target)
  
      // for(let i=0; i<ingrName.length;i++){
     
      // }
      let ingredients = [];
      // let ingrObj = {
      //   name: event.target.ingrName.value,
      //   unit: event.target.ingrUnit.value,
      //   amount: event.target.ingrAmount.value
      // };
  
      let ingrObj = {
        // name: event.target.name_0.value,
        // unit: event.target.unit_0.value,
        // amount: event.target.amount_0.value
        name: "test4",
        unit: "piece",
        amount: 500
      };
  
      ingredients = ingrState;
  
      console.log('ingrState --', ingrState)
      console.log('ingredients --', ingredients)

  
      axios
        .post(`${config.API_URL}/api/create-recipe`, { name: event.target.name.value,
          ingredients }, { withCredentials:true })
        .then((response) => {
          console.log('in thenblock----', response)
        })
        .catch((err) => {
          setError(err)
        })
    }
   



    return(
        <div>
          <h3>Create here your own recipe!</h3>
          <form onSubmit={handleCreateRecipe} className="form">
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
                          className="unit" 
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
                        data-idx={idx}
                        type="text" 
                        className="unit" 
                        value={ingrState[idx].unit}
                        onChange={handleIngrChange}
                        required
                      />

                      <label htmlFor={amountId} className="form-label">Amount</label>
                      <input 
                        name={amountId} 
                        id={amountId} 
                        data-idx={idx}
                        type="number" 
                        className="amount" 
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