import React, { useState } from "react";

function CreateRecipe(props) {
    const [fields, setFields] = useState([{value: null}])
//     function createNewElement(){
//         const txtNewInputBox = document.createElement('div');
//       // Then add the content (a new input box) of the element.
//     txtNewInputBox.innerHTML = `<div class="mb-3">
//     <label for="ingrName" class="form-label">Ingredients</label>
//     <select name="ingrName" id="ingrList">
//       <option value="water" selected="selected" >Water</option>
//       <option value='sla' selected='selected'>sla</option>
//       <option value='rijst' selected='selected'>rijst</option>
//     </select>
//     </div>
//   <div class="mb-3">
//     <label for="ingrUnit">Units:</label>
//     <select name="ingrUnit" id="ingrUnit" >
//       <option value="piece">piece</option>
//       <option value="g">g</option>
//       <option value="ml">ml</option>
//       <option value="l">l</option>
//       <option value="spoon">spoon</option>
//       <option value="tablespoon">tablespoon</option>
//       <option value="pinch">pinch</option>
//     </select>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword2" class="form-label">Amount</label>
//     <input name="ingrAmount" type="number" class="form-control" id="ingrAmount" required/>
//   </div>`;
//       // Finally put it where it is supposed to appear.
//     document.getElementById("newElementId").appendChild(txtNewInputBox);
//     }

    // function handleChangeInput(i, event){
    //     const values = [...fields];
    //     const { name, value } = event.target;
    //     values[i][name] = value;
    //     setFields(values);
    //     console.log(fields);
    // }

    function handleAddInput(){
        console.log('click')
        const values = [...fields];
        values.push({
            firstname: '',
            lastname: '',
            age: '',
            sex: '',
            otherinfo: ''
        });
        setFields(values)
    }


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
    <input name="ingrAmount" type="number" class="form-control" id="ingrAmount" required/>
  </div>
  <div id="dynamicCheck">
    <input id="plusButton" type="button" value="+" class="btn btn-primary bg-lgtblue" onclick={() => handleAddInput()} />
  </div>
                <button type="submit" className="btn btn-primary">Lets go!</button>
            </form>
        </div>
    )
}

export default CreateRecipe;