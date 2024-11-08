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
        {itemsInCart !== undefined &&
          itemsInCart?.map((item, index) => {
            const { name, itemQuantity, price } = item;

            return (
              <div key={index}>
                <p>{name}</p>
                <p>{itemQuantity}</p>
                <span>{price}</span>
                <span>{totalPriceThisItem}</span>
              </div>
            );
          })}
      </div>
    );

}

export default DisplayItemsAddedToCart