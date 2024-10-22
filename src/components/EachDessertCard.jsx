import React from "react";
import iconAddToCart from "../../static/assets/images/icon-add-to-cart.svg"
import incrementIcon from '../../static/assets/images/icon-increment-quantity.svg'
import decrementIcon from '../../static/assets/images/icon-remove-item.svg'

const EachDessertCard = ( {
                        key,
                        image, 
                        name, 
                        price, 
                        category,
                        numberOfItemsInCart,
                        setNumberOfItemsInCart,
                        itemsInCart,
                        setItemsInCart,
                    }) => {

    const addToCartClickHandler = (e) => {
        setNumberOfItemsInCart((prev) => prev+1)
        const newItemToAppend = {
            itemName: name,
            itemPrice: price,
        }
        setItemsInCart((prevItems) => [...prevItems,newItemToAppend])
        
    }

    const removeFromCartClickHandler = (e) => {
        console.log("e", e)
        setNumberOfItemsInCart((prev) => prev-1)
    }

    const {desktop, mobile, tablet, thumbnail} = image
return (
    <div key= {key} className="flex flex-col mx-4 mb-20 font-redhat">

        <img className="size-52 -my-5 group-hover:outline-customRed" src={desktop} alt="picture of a ${name}"/>
        <div role="button" 
            className="flex flex-row h-10 group w-40 rounded-full bg-slate-50 
            hover:bg-customRed">

            <div className="flex pt-2 mt-0.5 ml-6 justify-center absolute">
                <img className="flex size-5 group-hover:hidden" src={iconAddToCart} />
                <p className="flex text-center font-redhat font-semibold
                group-hover:hidden">Add to Cart</p> 
            </div>
            

            <div className="flex flex-row ml-14 mt-2 justify-center">
                <img role="button" className="hidden group-hover:flex size-3 mx-1 mt-1" 
                    onClick={(e) =>addToCartClickHandler(e)}  
                    src={incrementIcon} />
                <p className="hidden group-hover:flex px-1">{numberOfItemsInCart}</p>
                <img className="hidden group-hover:flex size-3 mx-1 mt-1" 
                    onClick={(e) =>removeFromCartClickHandler(e)}
                    src={decrementIcon} />
            </div>
            
            
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