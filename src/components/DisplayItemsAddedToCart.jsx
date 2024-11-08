import React from "react";

const DisplayItemsAddedToCart  = ({itemsInCart}) => {
    console.log("itemsInCart", itemsInCart);

    const totalPriceThisItem = (itemQuantity, price) => {
      console.log("itemQuantity inside function", itemQuantity);
      console.log("price each inside function", price);
      return parseFloat(itemQuantity) * parseFloat(price);
    };

    return (
      <div>
        {itemsInCart?.map((item, index) => {
          const { name, itemQuantity, price } = item;
          console.log("itemQuantity", itemQuantity);
          return (
            <div key={index}>
              <p>{name}</p>
              <p className="text-customRed font-medium">{`${itemQuantity}x`}</p>
              <span className="text-amber-700 font-light">{`@${price}`}</span>
              <p className="text-amber-700 font-medium">
                {`$${parseFloat(itemQuantity) * parseFloat(price)}`}
              </p>
            </div>
          );
        })}
      </div>
    );

}

export default DisplayItemsAddedToCart