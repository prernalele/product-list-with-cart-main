import React from "react";

const Dessert = ({data}) => {
    console.log("data", data)
    const pageHeading = "Desserts"

    return (
        <div className="@font-face mx-14 h-screen w-1/2">
            <h2 className="@font-face text-lg font-bold m-14"> {pageHeading}</h2>
        </div>
        
    )
}

export default Dessert