import React from "react";
import iconAddToCart from "../../static/assets/images/icon-add-to-cart.svg"

const EachDessertCard = ( {image, name, price, category}) => {

    const {desktop, mobile, tablet, thumbnail} = image
return (
    <div className="flex flex-col mt-4 font-redhat">
        <img className="size-52" src={desktop} alt="picture of a ${name}"/>
        <div className="flex justify-center pt-2 mt-0.5 h-10 w-50 rounded-full bg-slate-50">
            <img className=" flex size-5" src={iconAddToCart} />
            <p className="text-center font-redhat font-semibold">Add to Cart</p> 
        </div> 
        <div className="flex flex-col mt-8">
            <div>{category}</div>
            <div className="font-semibold">{name}</div>
            <div className="text-customRed">${price}</div>
        </div>


    </div>
)
}

export default EachDessertCard