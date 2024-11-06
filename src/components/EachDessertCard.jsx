import React from "react";
import iconAddToCart from "../../static/assets/images/icon-add-to-cart.svg"
import  incrementIcon from '../../static/assets/images/icon-increment-quantity.svg'
import decrementIcon from '../../static/assets/images/icon-decrement-quantity.svg'

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
        const userSelectedItemId = parseInt(e.target.id, 10)
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
            return (prevItems?.length>0 ? [ ...prevItems, !isItemAlreadyPresent && userSelectedItem]: [userSelectedItem])      
        })
        
    }

    const removeFromCartClickHandler = (e) => {
        setNumberOfItemsInCart((prev) => prev-1)
        console.log("e.target.id", e.target.id)
        const userSelectedItemId = parseInt(e.target.id, 10)
        // const userSelectedItem = data?.find((dataItem) => dataItem.id == userSelectedItemId)
        setItemsInCart((prevItems) => {
            const isItemAlreadyPresent = prevItems.find((item) => item.id === userSelectedItemId )
            if(prevItems.length !== 0 && isItemAlreadyPresent) {
                const updatedItemList = prevItems.map((item) => {
                    if(item.id === userSelectedItemId) {
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


    const quantityForEachDessert = () => {
    const foundTheCurrentItem =itemsInCart?.find((item)=> item?.id == parseInt(id, 10))
    return foundTheCurrentItem?.itemQuantity ? foundTheCurrentItem.itemQuantity : 0
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
            

            <div className="hidden group-hover:flex  mt-3 justify-evenly">
                <svg id={id}
                    className="size-3 mx-1 mt-1 fill-current group-hover:text-white hover:bg-white hover:rounded-lg hover:!text-customRed"
                    onClick={removeFromCartClickHandler}
                    xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                    <path d="M0 .375h10v1.25H0V.375Z"/>
                </svg>

                <p id={id} className="px-1 text-white">{quantityForEachDessert()}</p>

                <svg className="size-3 mx-2  mt-1 fill-current group-hover:text-white hover:bg-white hover:rounded-lg hover:!text-customRed " 
                    id={id}
                    onClick={(e)=>addToCartClickHandler(e)} 
                    xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                </svg>


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