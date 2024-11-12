import React, { useEffect, useState } from "react";
import data from '../data.json'
import Dessert from "./components/Dessert";
import ShoppingCart from "./components/ShoppingCart";

const  App = () => {
    const [allData, setAllData] = useState(null)
    const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0)
    const [itemsInCart, setItemsInCart] = useState([])

    // assigning ID for each dessert data
    const dataWithId = data.map((datum, index) => {
        return {...datum, ["id"] : index+1, ["itemQuantity"]: 1}} )

    // fetching the data with Id
useEffect (()=> {
    fetch(dataWithId)
    .then(setAllData(dataWithId))
    .catch((error) => console.log("Error fetching data", error));
},[])

return (
  <div className="flex font-custom bg-rose-50 overflow-scroll">
    <Dessert
      data={allData}
      numberOfItemsInCart={numberOfItemsInCart}
      setNumberOfItemsInCart={setNumberOfItemsInCart}
      itemsInCart={itemsInCart}
      setItemsInCart={setItemsInCart}
    />
    <ShoppingCart
      numberOfItemsInCart={numberOfItemsInCart}
      setNumberOfItemsInCart={setNumberOfItemsInCart}
      itemsInCart={itemsInCart}
    />
  </div>
);

}

export default App

