import React from "react";
import emptyCartIllustration from '../../static/assets/images/illustration-empty-cart.svg'
import DisplayItemsAddedToCart from "./DisplayItemsAddedToCart";

const ShoppingCart = ({
  itemsInCart,
  setItemsInCart,
  numberOfItemsInCart,
  setNumberOfItemsInCart,
  total,
  setTotal,
}) => {
  const defaultText = "Your added items will appear here";

  return (
    <div className="flex font-redhat flex-col bg-slate-50 ml-2 pl-4 pr-10 mt-10 mr-16 w-2/4 h-2/4 flex-grow-1 ">
      <p className=" text-orange-500 font-bold m-4 ">{`Your Cart (${numberOfItemsInCart})`}</p>
      {numberOfItemsInCart === 0 && (
        <div className="flex flex-1 flex-col justify-items-stretch">
          <img
            src={emptyCartIllustration}
            alt="Empty Cart illustration"
            width="100"
            height="100"
            className=""
          />
          <p className=" font-redhat text-red-900">{defaultText}</p>
        </div>
      )}
      <DisplayItemsAddedToCart
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        setNumberOfItemsInCart={setNumberOfItemsInCart}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
};

export default ShoppingCart