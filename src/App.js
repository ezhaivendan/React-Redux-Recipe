import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddRecipeComponent  from './Components/Add-recipe';
import RecipeModal from './Components/Recipe-Modal'
import CartComponent from './Components/Cart-Modal'

const mapStatetoProps = (state) => ({ 
  recipeList: state.recipe,
  cartDetails: state.cartInfo
})

function App({recipeList, history, cartDetails}) {

  const [showAddRecipe, setshowAddRecipe] = useState(false);
  const [showRecipeList, setshowRecipeList] = useState(true);
  const [selectedRecipe, setselectedRecipe] = useState({});
  const [showModal, setshowModal] = useState(false);
  const [cartModal, setcartModal] = useState(false)
  // const handleRecipeComponent = () => {
  //   history.push('/addrecipe')
  // }

  const recipeModal = (recipe) => {
    setselectedRecipe(recipe);
    setshowModal(true);
  }

  const closeModal = () => {
    setshowModal(false);
    setcartModal(false)
  }

  return (
    <>
      { showRecipeList && <div className="header">
         <button name="button" onClick={ () => {setshowAddRecipe(true); setshowRecipeList(false)} } >Add Recipe</button> 
         <button name="button"  onClick={ () => {setcartModal(true)} }>Cart {cartDetails.length}</button> 
      </div>}
      
      { showAddRecipe && <AddRecipeComponent triggerListRecipe={() => {setshowAddRecipe(false); setshowRecipeList(true)}}/>}

      { showRecipeList &&
        <div className="recipe-container">
        <div className="recipe-box-container">
          {recipeList.map( (recipe, index) => 
            <div onClick={() => recipeModal(recipe)} className="recipe-box" key={index} >
              <div className="recipe-img"><img src={recipe.imageUrl} /></div>
              <div className="recipe-title">{recipe.recipeName}</div>
              <div className="recipe-title">&#8377; {recipe.price}</div>
              {/* <div className="recipe-ingredients">{recipe.ingredients}</div>
              <div className="recipe-description">{recipe.description}</div> */}
              
            </div>
          )}
        </div>
      </div>
      }

      { showModal && <RecipeModal selectedRecipe={selectedRecipe} closeModal={closeModal} />}

      { cartModal && <CartComponent closeModal={closeModal}/>}
    </>
  );
}

const appComponent = withRouter(App)

export default connect(mapStatetoProps)(appComponent);
