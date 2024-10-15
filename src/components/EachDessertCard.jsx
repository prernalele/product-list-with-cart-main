import React from "react";

const EachDessertCard = ( {image, name, price, category}) => {

    const {desktop, mobile, tablet, thumbnail} = image
return (
    <div className="flex flex-col m-24 font-redhat">
        <img src={desktop}/>
        <div className="flex flex-col">
            <div>{category}</div>
            <div>{name}</div>
            <div>${price}</div>
        </div>

    </div>
)
}

export default EachDessertCard