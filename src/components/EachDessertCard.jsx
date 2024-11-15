import React, { useState } from "react";
import iconAddToCart from "../../static/assets/images/icon-add-to-cart.svg";
import incrementIcon from "../../static/assets/images/icon-increment-quantity.svg";
import decrementIcon from "../../static/assets/images/icon-decrement-quantity.svg";

const EachDessertCard = ({
  eachItem,
  data,
  numberOfItemsInCart,
  setNumberOfItemsInCart,
  itemsInCart,
  setItemsInCart,
  total,
  setTotal,
}) => {
  const { id, image, name, price, category, itemQuantity } = eachItem;
  const { desktop, mobile, tablet, thumbnail } = image;

  const addToCartClickHandler = (eachItemClicked) => {
    console.log("eachItemClicked", eachItemClicked);
    const userSelectedItemId = eachItemClicked.id;
    const userSelectedItem = data?.find(
      (dataItem) => dataItem.id === userSelectedItemId
    );

    setNumberOfItemsInCart((prev) => prev + 1);
    setItemsInCart((prevItems) => {
      const isItemAlreadyPresent = prevItems.find(
        (item) => item.id === userSelectedItemId
      );
      if (prevItems.length !== 0 && isItemAlreadyPresent) {
        const updatedItemList = prevItems.map((item) => {
          if (item.id === userSelectedItemId) {
            return { ...item, itemQuantity: item.itemQuantity + 1 };
          }
          return item;
        });
        return updatedItemList;
      }
      /*if (prevItems.length !== 0 ) {
            return [...prevItems, userSelectedItem]
        }*/
      return prevItems?.length > 0
        ? [...prevItems, !isItemAlreadyPresent && userSelectedItem]
        : [userSelectedItem];
    });

    const value = parseFloat(
      parseFloat(eachItemClicked.itemQuantity) *
        parseFloat(eachItemClicked.price)
    );
    if (!isNaN(value)) {
      setTotal((prevTotal) => prevTotal + value);
    }
  };

  const removeFromCartClickHandler = (eachItemClicked) => {
    setNumberOfItemsInCart((prev) => (prev > 0 ? prev - 1 : 0));
    const userSelectedItemId = eachItemClicked.id;
    setItemsInCart((prevItems) => {
      const isItemAlreadyPresent = prevItems.find(
        (item) => item.id === userSelectedItemId
      );
      if (prevItems.length !== 0 && isItemAlreadyPresent) {
        const updatedItemList = prevItems.map((item) => {
          if (item.id === userSelectedItemId) {
            return {
              ...item,
              itemQuantity: item.itemQuantity > 0 ? item.itemQuantity - 1 : 0,
            };
          }
          return item;
        });
        return updatedItemList;
      }
      /*if (prevItems.length !== 0 ) {
                return [...prevItems, userSelectedItem]
            }*/

      return prevItems?.length > 0 && !isItemAlreadyPresent && [...prevItems];
    });
    setTotal((prevTotal) => {
      return prevTotal - parseFloat(eachItemClicked.price);
    });
  };

  const quantityForEachDessert = (eachItemClicked) => {
    const foundTheCurrentItem = itemsInCart?.find(
      (item) => item?.id === eachItemClicked.id
    );
    return foundTheCurrentItem?.itemQuantity
      ? foundTheCurrentItem.itemQuantity
      : 0;
  };

  return (
    <div key={id} className="flex flex-grow flex-col mx-4 mb-20 font-redhat">
      <img
        className="size-60 -my-5 group-hover:outline-dotted"
        src={desktop}
        alt="picture of a ${name}"
      />
      <div
        role="button"
        className=" ml-6 h-12 group w-40 rounded-full bg-slate-50 
            hover:bg-customRed"
      >
        <div className="flex pt-2  group-hover:hidden  justify-center align-center">
          <img className=" size-8 " src={iconAddToCart} />
          <p
            className="text-center font-redhat font-semibold 
                "
          >
            Add to Cart
          </p>
        </div>

        <div className="hidden group-hover:flex  mt-3 justify-evenly">
          <svg
            id={id}
            className="size-3 mx-1 mt-1 fill-current group-hover:text-white hover:bg-white hover:rounded-lg hover:!text-customRed"
            onClick={() => removeFromCartClickHandler(eachItem)}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path d="M0 .375h10v1.25H0V.375Z" />
          </svg>

          <p id={id} className="px-1 text-white">
            {quantityForEachDessert(eachItem)}
          </p>

          <svg
            className="size-3 mx-2  mt-1 fill-current group-hover:text-white hover:bg-white hover:rounded-lg hover:!text-customRed "
            id={id}
            onClick={() => addToCartClickHandler(eachItem)}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <div>{category}</div>
        <div className="font-semibold">{name}</div>
        <div className="text-customRed">${price}</div>
      </div>
    </div>
  );
};

export default EachDessertCard;
