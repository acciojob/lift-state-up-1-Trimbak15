import React,{useState} from "react";
import Child from "./Child";

const Parent = () => {

    let [showModal, setShowModal] = useState(false);

    function handleClick(){
        setShowModal(true);
    }
    return (
        <div className="parent">
            <Child showModal={showModal} setShowModal={handleClick}/>
        </div>
    )
}

export default Parent;