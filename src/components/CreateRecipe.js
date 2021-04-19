import React, {useState, useEffect} from "react";
import axios from "axios";
import config from "../config.js";
import IngredientInput from "./IngredientInput";


function CreateRecipe(props) {
    const {onCreateRecipe} = props
    const blankIngr = {name: '', unit: '', amount: ''};
    const [ingrState, setIngrState] = useState ([ {...blankIngr} ]);
    const [dropDownIngrState, setDropDownIngrState] = useState([]);

    useEffect(() => {
      axios
      .get(`${config.API_URL}/api/get-ingredients`)
      .then((response) => {
        console.log('in thenblock dropdown----', response.data)
        setDropDownIngrState(response.data)
      })
      .catch((err) => {
        console.log('fout')
      })      
    }, [])

   
    const addIngr = () => {
      setIngrState([...ingrState, {...blankIngr} ])
    };

    const options = [
      { value: "apple", label: "Apple" },
      { value: "orange", label: "Orange" },
      { value: "grape", label: "Grape" }
    ];

    const handleIngrSelect = (event, idy) => {
      // console.log('idx ---- ', event.target.dataset.idx)
      // console.log('in handle select evt target>>> ', event.target.options)
      // console.log('in handle select evt target selected index>>> ', event.target.options.selectedIndex)
      console.log('name ingr ', options[event.target.options.selectedIndex].value)
    };

    const handleIngrChange = (event) => {
      console.log(event.target.dataset.idx)
      console.log('name',event.target.name)
      const updatedIngr = [...ingrState];
      // console.log('event.dataset.idx --', event.target.dataset.idx)
      console.log('event --', event)
      // console.log('event.target --', event.target.value)
      // console.log('update inr --', event.target.dataset.idx,event.target.className,"=",event.target.value  )
      // console.log('update get value -',updatedIngr )

      updatedIngr[event.target.dataset.idx][event.target.className] = 
      event.target.value;
      setIngrState(updatedIngr)
      // console.log('IngrState in handleChange >>> --- ', ingrState)
    };

    const handleCreateRecipe = (event) => {
      event.preventDefault();
      console.log('before then block ---', event.target)
      let ingredients = ingrState;  
 
      axios
        .post(`${config.API_URL}/api/create-recipe`, { name: event.target.name.value,
          ingredients }, { withCredentials:true })
        .then((response) => {
          console.log('in thenblock----', response)
        })
        .catch((err) => {
          setError(err)
        })
    };
    



   
 



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
                          data-idx={idx}
                          className="name" 
                          onChange={handleIngrSelect}

                          >
                          {
                            
                            dropDownIngrState.map((val, idy) => {
                              const dropdownId = `dropdownId${idy}`
                              return(
                                <option key={idy} value={val.name} selected='selected'>{val.name}</option>
                              )

                            })
                          }

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