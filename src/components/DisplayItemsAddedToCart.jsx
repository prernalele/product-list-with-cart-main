import React from "react";
import iconRemoveItem from "../../static/assets/images/icon-remove-item.svg";

const DisplayItemsAddedToCart = ({
  itemsInCart,
  setItemsInCart,
  setNumberOfItemsInCart,
  total,
  setTotal,
}) => {
  const removeItemFromTheCart = (eachItemClicked) => {
    setNumberOfItemsInCart((prev) => (prev > 0 ? prev - 1 : 0));
    const userSelectedItemId = eachItemClicked.id;
    setItemsInCart((prevItems) => {
      if (prevItems.length !== 0) {
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
      return prevItems?.length > 0 && !isItemAlreadyPresent && [...prevItems];
    });
    setTotal((prevTotal) => {
      return prevTotal - parseFloat(eachItemClicked.price);
    });
  };
  return (
    <div className="flex flex-col space-y-2 divide-y divide-customRed mb-5">
      {itemsInCart.length > 0 &&
        total !== 0 &&
        itemsInCart?.map((item, index) => {
          const { name, itemQuantity, price } = item;
          return (
            itemQuantity !== 0 && (
              <div key={index} className="grow m-5">
                <p className="text-rose-950 font-medium">{name}</p>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row justify-start  ">
                    <span className="text-customRed ml-2 font-medium">{`${itemQuantity}x`}</span>
                    <span className="text-gray-500 ml-4 font-light">{`@${price}`}</span>
                    <span className="text-gray-700 ml-4 font-medium">
                      {`$${parseFloat(itemQuantity) * parseFloat(price)}`}
                    </span>
                  </div>
                  <svg
                    className="ml-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                    onClick={() => removeItemFromTheCart(item)}
                  >
                    <path
                      fill="#CAAFA7"
                      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                    />
                  </svg>
                </div>
              </div>
            )
          );
        })}
      {total > 0 && (
        <div className=" flex flex-row ml-5 pt-5 justify-between">
          <span>Order Total</span>
          <span className="font-bold">{`$${total}`}</span>
        </div>
      )}
    </div>
  );
};

export default DisplayItemsAddedToCart;
