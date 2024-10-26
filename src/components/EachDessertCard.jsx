import React from "react";
import iconAddToCart from "../../static/assets/images/icon-add-to-cart.svg"
import incrementIcon from '../../static/assets/images/icon-increment-quantity.svg'
import decrementIcon from '../../static/assets/images/icon-remove-item.svg'

const EachDessertCard = ( {
                        id,
                        image, 
                        name, 
                        price, 
                        category,
                        itemQuantity,
                        data,
                        numberOfItemsInCart,
                        setNumberOfItemsInCart,
                        itemsInCart,
                        setItemsInCart,
                    }) => {                  
    const addToCartClickHandler = (e) => {
        const userSelectedItemId = e.target.id
        const userSelectedItem = data?.find((dataItem) => dataItem.id == userSelectedItemId)
        setNumberOfItemsInCart((prev) => prev+1)
        setItemsInCart((prevItems) => {
            const isItemAlreadyPresent = prevItems.find((item) => item.id == userSelectedItemId )
            if(prevItems.length !== 0 && isItemAlreadyPresent) {
                const updatedItemList = prevItems.map((item) => {
                    if(item.id == userSelectedItemId) {
                        return { ...item, itemQuantity: item.itemQuantity+1 }
                    }
                    return item
                })
                console.log("updatedItemList", updatedItemList)
                return updatedItemList   
            }
            /*if (prevItems.length !== 0 ) {
                return [...prevItems, userSelectedItem]
            }*/
            return (prevItems?.length>0 ? [ ...prevItems,userSelectedItem]: [userSelectedItem])      
        })
        
    }

    const removeFromCartClickHandler = (e) => {
        setNumberOfItemsInCart((prev) => prev-1)
        console.log("e.target.id", e.target.id)
        const userSelectedItemId = e.target.id
        // const userSelectedItem = data?.find((dataItem) => dataItem.id == userSelectedItemId)
        setItemsInCart((prevItems) => {
            const isItemAlreadyPresent = prevItems.find((item) => item.id == userSelectedItemId )
            if(prevItems.length !== 0 && isItemAlreadyPresent) {
                const updatedItemList = prevItems.map((item) => {
                    if(item.id == userSelectedItemId) {
                        return { ...item, itemQuantity: item.itemQuantity>0 ? item.itemQuantity-1 : 0 }
                    }
                    return item
                })
                return updatedItemList   
            }
            /*if (prevItems.length !== 0 ) {
                return [...prevItems, userSelectedItem]
            }*/
            return (prevItems?.length>0 && !isItemAlreadyPresent &&  [...prevItems])      
        })
    }

    const {desktop, mobile, tablet, thumbnail} = image
return (
    <div key={id} className="flex flex-col mx-4 mb-20 font-redhat">

        <img className="size-52 -my-5 group-hover:outline-customRed" src={desktop} alt="picture of a ${name}"/>
        <div role="button" className=" ml-6 h-12 group w-40 rounded-full bg-slate-50 
            hover:bg-customRed">

            <div className="flex pt-2  group-hover:hidden  justify-center align-center">
                <img className=" size-8 " src={iconAddToCart} />
                <p className="text-center font-redhat font-semibold 
                ">Add to Cart</p> 
            </div>
            

            <div className="flex flex-row  mt-3 justify-center relative z:2">
                <img role="button" className="hidden group-hover:flex size-3 mx-1 mt-1" 
                    id={id}
                    onClick={addToCartClickHandler}  
                    src={incrementIcon} />
                <p className="hidden group-hover:flex px-1"></p>
                <img className="hidden group-hover:flex size-3 mx-1 mt-1" 
                    id={id}
                    onClick={removeFromCartClickHandler}
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