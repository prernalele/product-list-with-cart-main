import React from "react";

const EachDessertCard = ( {image, name, price, category}) => {

    const {desktop, mobile, tablet, thumbnail} = image
return (
    <div className="flex flex-col mt-4 mr-12 font-redhat">
        <img className="size-48" src={desktop} alt="picture of a ${name}"/>
        <div className="flex flex-col">
            <div>{category}</div>
            <div>{name}</div>
            <div>${price}</div>
        </div>

    </div>
)
}

export default EachDessertCard