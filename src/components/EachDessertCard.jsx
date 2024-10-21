import React from "react";
import iconAddToCart from "../../static/assets/images/icon-add-to-cart.svg"
import incrementIcon from '../../static/assets/images/icon-increment-quantity.svg'
import decrementIcon from '../../static/assets/images/icon-remove-item.svg'

const EachDessertCard = ( {image, 
                        name, 
                        price, 
                        category,
                        numberOfItemsInCart,
                        setNumberOfItemsInCart,
                        itemsInCart,
                        setItemsInCart,
                        selectedItem,
                        setSelectedItem,
                    }) => {

    const addToCartClickHandler = (e) => {
        setNumberOfItemsInCart((prev) => prev+1)
        const newItemToAppend = {
            itemName: name,
            itemPrice: price,
        }
        setItemsInCart((prevItems) => [...prevItems,newItemToAppend])
        // setSelectedItem((prevAllSelections) => {
         
        // }
        
    }

    const {desktop, mobile, tablet, thumbnail} = image
return (
    <div className="flex flex-col mx-4 mb-20 font-redhat">

        <img className="size-52 -my-5 group-hover:outline-customRed" src={desktop} alt="picture of a ${name}"/>
        <div role="button" 
            className="flex justify-center pt-2 mt-0.5 ml-6 h-10 group w-40 rounded-full bg-slate-50 
            hover:bg-customRed">

            <img className="flex size-5 group-hover:invisible" src={iconAddToCart} />
            <p className="flex text-center font-redhat font-semibold
                group-hover:invisible">Add to Cart</p> 
            
            <img role="button" className="invisible group-hover:visible  " onClick={(e) =>addToCartClickHandler(e)}  
            src={incrementIcon} />
            <p className="invisible group-hover:visible  ">{numberOfItemsInCart}</p>
            <img className="invisible group-hover:visible " src={decrementIcon} />
        </div> 

        <div className="flex flex-col mt-4">
            <div>{category}</div>
            <div className="font-semibold">{name}</div>
            <div className="text-customRed">${price}</div>
        </div>


    </div>
)
}

export default EachDessertCard