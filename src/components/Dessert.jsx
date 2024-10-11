import React from "react";
import EachDessertCard from "./EachDessertCard";

const Dessert = ({data}) => {
    console.log("data", data)
    const pageHeading = "Desserts"

    return (
        <div className="@font-face mx-14 h-screen w-1/2">
            <h1 className="@font-face text-lg font-bold m-14"> {pageHeading}</h1>
            {data?.map((eachItem, index) => {
            const { image, name, price, category} = eachItem;
            return (<EachDessertCard 
                key={index}
                image={image}
                name={name}
                price={price}
                category={category}/>)
})}
        </div>
        
    )
}

export default Dessert