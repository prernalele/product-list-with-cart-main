import React from "react";
import iconRemoveItem from "../../static/assets/images/icon-remove-item.svg";

const DisplayItemsAddedToCart = ({
  itemsInCart,
  setNumberOfItemsInCart,
  total,
}) => {
  return (
    <div className="flex flex-col space-y-2 divide-y divide-customRed mb-5">
      {itemsInCart?.map((item, index) => {
        const { name, itemQuantity, price } = item;
        return (
          <div key={index} className="grow m-5">
            <p className="text-rose-950 font-medium">{name}</p>
            <div className="flex flex-row">
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
              >
                <path
                  fill="#CAAFA7"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </div>
          </div>
        );
      })}
      <div className="m-5">{`Order Total  $ ${total} `}</div>
    </div>
  );
};

export default DisplayItemsAddedToCart;
