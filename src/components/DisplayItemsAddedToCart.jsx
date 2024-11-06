import React from "react";

const DisplayItemsAddedToCart  = ({itemsInCart}) => {
    const totalPriceThisItem = (itemQuantity, price) => {
        console.log("itemQuantity inside function", itemQuantity)
        console.log("price each inside function", price)
        return (itemQuantity*price)
    }

    return (
        <div>
            {itemsInCart?.map((item, index)=> {
                console.log("item",item )
                const {name, itemQuantity, price} = item

                return(
                    <div key={index}>
                        <p>{name}</p>
                        <p>{itemQuantity}</p>
                        <span>{price}</span>
                        <span>{totalPriceThisItem(itemQuantity, price)}</span>
                    </div>

                )
            })}
        </div>
    )

}

export default DisplayItemsAddedToCart