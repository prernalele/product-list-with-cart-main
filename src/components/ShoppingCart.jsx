import React from "react";
import emptyCartIllustration from '../../static/assets/images/illustration-empty-cart.svg'
import DisplayItemsAddedToCart from "./DisplayItemsAddedToCart";
const ShoppingCart = ({itemsInCart, numberOfItemsInCart, setNumberOfItemsInCart}) => {

    console.log("itemsInCart", itemsInCart)
return (

    <div className="flex font-redhat flex-col bg-slate-50 ml-0 pl-5 pr-10 h-80 w-80 justify-evenly mt-10 mr-40">
        <p className="flex text-orange-500 font-bold ">{`Your Cart (${numberOfItemsInCart})`}</p>
        {!itemsInCart?.length && <img className="flex justify-center" src={emptyCartIllustration} alt="Empty Cart illustration" width="100" height="100" />}
        <DisplayItemsAddedToCart itemsInCart={itemsInCart}/>
        <p className="flex font-redhat justify-center text-red-900">Your added items will appear here</p>
    </div>


)
}

export default ShoppingCart