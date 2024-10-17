import React from "react";

const EachDessertCard = ( {image, name, price, category}) => {

    const {desktop, mobile, tablet, thumbnail} = image
return (
    <div className="flex flex-col mt-4 font-redhat">
        <img className="size-52" src={desktop} alt="picture of a ${name}"/>
        <div className="flex flex-col mt-8">
            <div>{category}</div>
            <div className="font-semibold">{name}</div>
            <div className="text-customRed">${price}</div>
        </div>

    </div>
)
}

export default EachDessertCard