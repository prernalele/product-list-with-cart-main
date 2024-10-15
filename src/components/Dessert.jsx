import React from "react";
import EachDessertCard from "./EachDessertCard";

const Dessert = ({data}) => {
    console.log("data", data)
    const pageHeading = "Desserts"

    return (
        <div className="flex-row mx-14 h-screen w-1/2">
            <h1 className="font-redhat text-lg font-bold m-1.5 overflow-y-hidden"> {pageHeading}</h1>
            <div className="flex flex-row">
            {data?.map((eachItem, index) => {
            const { image, name, price, category} = eachItem;
            return (
                <EachDessertCard 
                key={index}
                image={image}
                name={name}
                price={price}
                category={category}/>
            )})}
            </div>

        </div>
        
    )
}

export default Dessert