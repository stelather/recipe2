import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialRowState = {
    name: "",
    cuisine: "",
    photo: "",
    rating: "",
    ingredients: "",
    preparation:""
  }

  const [rowData, setRowData] = useState({...initialRowState});
  
  const handleChange = ({ target }) => {
    setRowData({
      ...rowData,
      [target.name]: target.value
    })
  }

  const handleCreate = (event) => {
    event.preventDefault();
    createRecipe(rowData);
    setRowData({...initialRowState});
  }

  return (
    <form name="create" onSubmit={handleCreate}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" id="recipeName" required={true} value={rowData.name} onChange={handleChange} placeholder="Name"/>
            </td>
            <td>
              <input name="cuisine" id="recipeCuisine" required={true} value={rowData.cuisine} onChange={handleChange} placeholder="Cuisine"/>
            </td>
            <td>
              <input name="photo" id="recipePhoto" required={true} type="url" value={rowData.photo} src={rowData.photo} onChange={handleChange} placeholder="URL"/>
            </td>
            <td>
              <textarea name="ingredients" id="recipeIngredients" required={true} value={rowData.ingredients} onChange={handleChange} placeholder="Ingredients"/>
            </td>
            <td>
              <textarea name="preparation" id="recipePreparation" required={true} value={rowData.preparation} onChange={handleChange} placeholder="Preparation"/>
            </td>
            <td>
              <button id="submit" type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
