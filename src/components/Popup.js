import React, { useState } from 'react';
import './Popup.css'

function Popup(props) {
    const [links, setLinks] = useState([""]);

    function addClicked() {
        const id = document.getElementById("collection-title").value;
        const title = document.getElementById("collection-title").value;
        const summary = document.getElementById("collection-summary").value;

        const newCollection = 
        {
            id: id,
            title: title,
            summary: summary,
            links: links,
            rating: 5
        };

        props.addCollection(newCollection);

        props.setShowPopup(false);
    };

    function closeClicked() {
        props.setShowPopup(false);
    };

    function moreClicked() {
        setLinks([...getAllLinksFromInputs(), ""]);
    }

    function deleteClicked(i, e) {
        setLinks([...links.slice(0, i), ...links.slice(i+1)]);
    }

    function getAllLinksFromInputs() {
        return [...document.getElementsByClassName("link-input")].map(li => li.value);
    }

    function linkChanged() {
        setLinks(getAllLinksFromInputs());
    }

    if (props.showPopup) {
        let linkList = links.map((link, i) => {
            const id = `link-${i}`;
            const divID = `link-div-${i}`;
            return (
                <div className="link-div" id={divID} key={id}>
                    <label htmlFor={id}>Link {i}:</label>
                    <span></span>
                    <input type="text" className="link-input" name={id} id={id} placeholder="A link..." onChange={linkChanged} value={link}/>
                    <span onClick={deleteClicked.bind(this, i)} className="delete-span">x</span>
                </div>
            )
        });

        return (
            <div className="freeze-div">
                <div className="popup-div" id="popup-div">
                    <button className="close-button" onClick={closeClicked}>Close window</button>

                    <label htmlFor="collection-title">Title:</label>
                    <input type="text" name="collection-title" id="collection-title" placeholder="The title of your collection..."/>

                    <label htmlFor="collection-summary">Summary:</label>
                    <input type="text" name="collection-summary" id="collection-summary" placeholder="The summary of your collection..."/>

                    <hr/>

                    {linkList}

                    <button onClick={moreClicked}>Add another Link</button>
                    <button className="add-collection-button" onClick={addClicked}>Submit this Collection</button>
                </div>
            </div>

        )
    } else {
       return null; 
    }
}

export default Popup
