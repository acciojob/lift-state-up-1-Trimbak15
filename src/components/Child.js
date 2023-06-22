import React from "react";

const Child = ({showModal, setShowModal}) => {

    function handleChange(e){
        e.preventDefault();
        setShowModal(true);
    }

    return(
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={handleChange}>Show Modal</button>

            {
                showModal && (
                    <div>
                        <h3>Modal Content</h3>
                        <p>This is the modal content.</p>
                    </div>
                )
            }
        </div>
    )
}
export default Child;