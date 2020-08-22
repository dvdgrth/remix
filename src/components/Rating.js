import React from 'react';

function Rating(props) {
    function stars(x) {
        return "★ ".repeat(x);
    }


    return (
        <div>
            {stars(props.rating)}           
        </div>
    )
}

export default Rating;