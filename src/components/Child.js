import React from "react";

const Child = ({showModal, handleClick}) => {

    return(
        <div>
            <button onclick={handleClick}>Show Modal</button>

            {
                showModal && 
                <p>This is the Modal content.</p>
            }
        </div>
    )
}
export default Child;