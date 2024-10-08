import React, { useEffect, useState } from "react";
import data from '../data.json'
import Dessert from "./components/Dessert";

const  App = () => {
    const [allData, setAllData] = useState(null)
useEffect (()=> {
    fetch(data)
    .then(setAllData(data))
    .catch((error) => console.log("Error fetching data", error));
},[])

return (
    <div className="flex bg-rose-50 h-screen">
        <Dessert data={allData}/>
    </div>
    )

}

export default App

