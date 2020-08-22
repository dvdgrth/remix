import React from 'react'
import './Popup.css'

function Popup(props) {

    function addClicked() {
        const id = document.getElementById("collection-title").value;
        const title = document.getElementById("collection-title").value;
        const summary = document.getElementById("collection-summary").value;
        const link_1 = document.getElementById("link-1").value;
        const link_2 = document.getElementById("link-2").value;

        const newCollection = 
        {
            id: id,
            title: title,
            summary: summary,
            links: [
                link_1,
                link_2
            ],
            rating: 5
        };

        props.addCollection(newCollection);
    };

    function closeClicked() {
        props.setShowPopup(false);
    };

    function moreClicked() {
        let newdiv = document.createElement("div");
        newdiv.appendChild(document.createTextNode("Test"));
        document.getElementById("popup-div").appendChild(newdiv);
    }


    if (props.showPopup) {
        return (
            <div className="freeze-div">
                <div className="popup-div" id="popup-div">
                    <button onClick={closeClicked}>Close window</button>
                    <br/>
                    <label for="collection-title">Title:</label>
                    <input type="text" name="collection-title" id="collection-title"/>
                    <br/>
                    <label for="collection-summary">Summary:</label>
                    <input type="text" name="collection-summary" id="collection-summary"/>
                    <br/>
                    Links:
                    <br/>
                    <label for="link-1">Link 1:</label>
                    <input type="text" name="link-1" id="link-1"/>
                    <br/>
                    <label for="link-2">Link 2:</label>
                    <input type="text" name="link-2" id="link-2"/>
                    <br/>
                    <button onClick={moreClicked}>More Links</button>
                    <button onClick={addClicked}>Add this Collection</button>
                </div>
            </div>

        )
    } else {
       return null; 
    }
}

export default Popup
