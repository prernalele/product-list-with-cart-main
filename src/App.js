import React, { useEffect, useState } from "react";
import data from '../data.json'
import Dessert from "./components/Dessert";
import ShoppingCart from "./components/ShoppingCart";

const  App = () => {
    const [allData, setAllData] = useState(null)
    const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0)
    const [itemsInCart, setItemsInCart] = useState([])

useEffect (()=> {
    fetch(data)
    .then(setAllData(data))
    .catch((error) => console.log("Error fetching data", error));
},[])

return (
    <div className="flex font-custom bg-rose-50 justify-around overflow-scroll">
        <Dessert 
        data={allData}
        numberOfItemsInCart={numberOfItemsInCart} 
        setNumberOfItemsInCart={setNumberOfItemsInCart}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        />
        <ShoppingCart 
        numberOfItemsInCart={numberOfItemsInCart} 
        setNumberOfItemsInCart={setNumberOfItemsInCart} />
    </div>
    )

}

export default App

