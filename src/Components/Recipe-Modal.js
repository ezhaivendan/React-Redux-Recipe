import React from 'react';
import { connect } from 'react-redux'
import { ADD_CART } from '../Action/Action';

const mapStatetoProps = (state) => ({checkCart : state.cartInfo})
const mapDispatchtoProps = (dispatch) => ({addCart : (recipe) => dispatch(ADD_CART(recipe))})

function RecipeModal({selectedRecipe, closeModal, addCart, checkCart}) {

    const handleCart = () => {
        addCart(selectedRecipe)
        closeModal()
    }

    const checkAddCartBtn = () => checkCart.filter(item => item.id === selectedRecipe.id)

    return (
        <>
        <div className="modal-overlay"></div>
        <div className="recipe-modal">
            <div className="close-icon" onClick={() => closeModal()}>X</div>
            <div className="recipe-modal-container">
                <div className="recipe-modal-img">
                    <img src={selectedRecipe.imageUrl} />
                </div>
                <div className="recipe-modal-details">
                    <h1 className="recipe-title">{selectedRecipe.recipeName}</h1>
                    <h2>Ingredients</h2>
                    <div className="recipe-ingredients">{selectedRecipe.ingredients}</div>
                    <h2>Description</h2>
                    <div className="recipe-description">{selectedRecipe.description}</div>

                    <div className="recipe-price">Price: &#8377; {selectedRecipe.price}</div>
                    {!checkAddCartBtn().length ? <button onClick={handleCart}>Add Cart</button> : <span>Added</span> }
                </div>
            </div>
        </div>
        </>
    )
}

export default connect( mapStatetoProps, mapDispatchtoProps)(RecipeModal)
