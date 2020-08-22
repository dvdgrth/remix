import React from 'react'

import "./AddButton.css";

function AddButton(props) {
    function addClicked() {
        props.setShowPopup(true);
    }

    return (
        <div className="add-div">
            <div className="add-button" onClick={addClicked}>Add a Collection</div>
        </div>
    )
}

export default AddButton