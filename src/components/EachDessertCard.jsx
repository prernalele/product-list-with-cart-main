import React from "react";
import imgData from '../../public/assets/images/image-panna-cotta-desktop.jpg'



const EachDessertCard = ({eachData}) => {
    const {image, category, name, price} = eachData
    const {desktop, mobile, tablet, thumbnail} = image
    console.log("desktop", desktop)
    const pathImage = "../../public/assets/images/image-panna-cotta-desktop.jpg"
return (
    <div>
        <img src={pathImage}></img>
        <div>{category}</div>
        <div>{name}</div>
        <div>{price}</div>
    </div>
)
}

export default EachDessertCard