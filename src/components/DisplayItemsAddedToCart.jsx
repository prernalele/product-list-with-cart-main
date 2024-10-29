import React from "react";

const DisplayItemsAddedToCart  = ({itemsInCart}) => {
    const totalPriceThisItem = (itemQuantity, price) => {
        return itemQuantity*price

    }
    return (
        <div>
            {itemsInCart.map((item, index)=> {
                console.log("item", )
                const {name, itemQuantity, price} = item
                console.log("itemQuantity", itemQuantity)
                return(
                    <>
                    <p>{name}</p>
                    <p>{itemQuantity}</p>
                    <span>{price}</span>
                    <span>{totalPriceThisItem(itemQuantity, price)}</span>
                    </>

                )
            })}
        </div>
    )

}

export default DisplayItemsAddedToCart