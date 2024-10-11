import React from "react";

const EachDessertCard = ( {image, name, price, category}) => {

    const {desktop, mobile, tablet, thumbnail} = image
return (
    <div>

       {/* <source media="(min-width:465px)" srcSet={ desktop}/>
        <source media="(min-width:465px)" srcSet={'./assets/images/image-cake-mobile.jpg'}/>}
        {/*<source media="(min-width:650px)" srcSet={arrayImgPath[1]} />*/}
        {/*<img src={arrayImgPath[1]} alt={`picture of ${name}`}/>*/}
        <img src={desktop}/>
        <div>Category: {category}</div>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
    </div>
)
}

export default EachDessertCard