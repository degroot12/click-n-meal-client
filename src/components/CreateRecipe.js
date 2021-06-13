import React, {useState, useEffect} from "react";
import AsyncSelect from 'react-select/async'
import axios from "axios";
import config from "../config.js";
import IngredientInput from "./IngredientInput";
import Select from 'react-select';



function CreateRecipe(props) {
    const {onCreateRecipe} = props
    const blankIngr = {name: '', unit: '', amount: ''};
    const [ingrState, setIngrState] = useState ([ {...blankIngr} ]);
    const [dropDownIngrState, setDropDownIngrState] = useState([]);
    const [inputValueState, setInputValueState] = useState("")

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
      console.log('name --',event.target.name)
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
      // console.log('before then block ---', event.target)
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

  // ---- dynamic form search

    
  const filterIngr = (inputValueState) => {
    return dropDownIngrState.filter(i =>
      i.name.toLowerCase().includes(inputValueState.toLowerCase())
    );
  };

  const loadOptions = (inputValueState, callback) => {
    setTimeout(() => {
      callback(filterIngr(inputValueState));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    const inputValueState = newValue.replace(/\W/g, '');
    setInputValueState(inputValueState)
    console.log('inputValueState >>>  ', inputValueState)
    return inputValueState;
  };

  const handleIngrNameChange = (e) => {
    console.log('>> Ingredientnaam e >>', e)
    // let {name, value} = e.target;
    // console.log("e target >> ", e.target)


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

                      <div style={{color: "red"}}> 
                       select test
                       <pre>inputValue: "{inputValueState}"</pre>
                       <label htmlFor={nameId} className="form-label">Name</label>
                        <AsyncSelect
                        style={{color: "red"}}

                          label="Single select"

                          theme={theme => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: 'hotpink',
                              primary: 'black',
                              color: 'black',
                            },
                          })}
                          cacheOptions
                          loadOptions={loadOptions}
                          defaultOptions
                          onInputChange={handleInputChange}             
                          // onChange={handleIngrNameChange}                      
                          value={inputValueState}
                          name={nameId} 
                          id={nameId} 
                          data-idx={idx}
                          className="name"
                          value={ingrState[idx].name}
                          onChange={handleIngrNameChange}
                          
                        />

                      </div>


                      <label className="form-label" htmlFor={nameId}>Choose ingredient: </label>
                      <div className="mb-3">
                        <select 
                          name={nameId} 
                          id={nameId} 
                          data-idx={idx}
                          className="name" 
                        

                          >
     

                          </select>
                      </div>



                      <label htmlFor={unitId} className="form-label">Unit</label>
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
                      <label htmlFor={nameId} className="form-label">NameHidden</label>
                      <input 
                        name={nameId}
                        id={nameId} 
                        data-idx={idx}
                        type="name" 
                        className="name" 
                        value={ingrState[idx].name}
                        onChange={handleIngrChange}
                        
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