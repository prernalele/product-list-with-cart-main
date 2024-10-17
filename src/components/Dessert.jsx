import React from "react";
import EachDessertCard from "./EachDessertCard";

const Dessert = ({data}) => {
    console.log("data", data)
    const pageHeading = "Desserts"

    return (
        <div className="flex flex-col ml-6 mt-6 h-screen">
            <h1 className="font-redhat text-lg font-bold"> {pageHeading}</h1>
            <div className="flex flex-row flex-wrap">
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