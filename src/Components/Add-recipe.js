import React, { useState } from 'react'
import { withRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { ADD_RECIPE } from '../Action/Action'

function mapDispatchtoProps(dispatch) {
    return {
        addRecipe : (recipe) => dispatch(ADD_RECIPE(recipe))
    }
}

function AddRecipe(props) {
    
    const [recipeInfo, setrecipeInfo] = useState({
        recipeName       : '',
        ingredients      : '',
        description      : '',
        imageUrl         : '',
        price            :0
    })
    
    // const [userList, setuserList ] = useState([])
    
    function formOnChange(e) {
        const {
            name,
            value
        } = e.target

        setrecipeInfo({ ...recipeInfo, [name] : value})
    }

    function handleAddRecipe(e) {
        e.preventDefault()
        props.addRecipe(recipeInfo);
        props.triggerListRecipe();
        //props.history.push('/');
    }

    return (
        <div className="add-recipe-container">
            <form onSubmit={handleAddRecipe}>
                <div className="form-row">
                    <label>Recipe Name</label>
                    <input  type="text" name="recipeName" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>Ingredients</label>
                    <textarea maxLength="140" rows="5" name="ingredients" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>Description</label>
                    <textarea maxLength="140" rows="5" name="description" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>Image Url</label>
                    <input  type="text" name="imageUrl" onChange ={formOnChange} />
                </div>
                <div className="form-row">
                    <label>Price</label>
                    <input  type="number" name="price" onChange ={formOnChange} />
                </div>
                <button>Add New Recipe</button>
            </form>
        </div>
    )
}

const AddRecipeComponent = withRouter(AddRecipe)
export default connect(null, mapDispatchtoProps)(AddRecipeComponent)

