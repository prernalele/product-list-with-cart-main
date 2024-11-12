import React from "react";
import EachDessertCard from "./EachDessertCard";

const Dessert = ({data,
                numberOfItemsInCart,
                setNumberOfItemsInCart, 
                itemsInCart, 
                setItemsInCart,
                selectedItem,
                setSelectedItem }) => {
    const pageHeading = "Desserts"

    return (
      <div className="flex flex-col ml-10 mt-6 h-dvh">
        <h1 className="font-redhat mb-5 ml-4 text-lg font-bold">
          {pageHeading}
        </h1>
        <div className="flex flex-row flex-wrap ">
          {data?.map((eachItem, index) => {
            //const {id, image, name, price, category, itemQuantity} = eachItem;
            return (
              <EachDessertCard
                key={index}
                eachItem={eachItem}
                data={data}
                numberOfItemsInCart={numberOfItemsInCart}
                setNumberOfItemsInCart={setNumberOfItemsInCart}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
              />
            );
          })}
        </div>
      </div>
    );
}

export default Dessert