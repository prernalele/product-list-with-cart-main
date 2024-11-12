import React from "react";
import emptyCartIllustration from '../../static/assets/images/illustration-empty-cart.svg'
import DisplayItemsAddedToCart from "./DisplayItemsAddedToCart";

const ShoppingCart = ({itemsInCart, numberOfItemsInCart, setNumberOfItemsInCart}) => {

  const defaultText = "Your added items will appear here";

  return (
    <div className="flex font-redhat flex-col bg-slate-50 ml-0 pl-4 pr-10 mt-10 mr-15 w-1/4 h-1/3 flex-grow-1">
      <p className=" text-orange-500 font-bold ">{`Your Cart (${numberOfItemsInCart})`}</p>
      {!itemsInCart?.length && (
        <>
          <img
            className="flex justify-center"
            src={emptyCartIllustration}
            alt="Empty Cart illustration"
            width="100"
            height="100"
          />
          <p className="flex font-redhat justify-center text-red-900">
            {defaultText}
          </p>
        </>
      )}
      <DisplayItemsAddedToCart
        itemsInCart={itemsInCart}
        setNumberOfItemsInCart={setNumberOfItemsInCart}
      />
    </div>
  );
}

export default ShoppingCart