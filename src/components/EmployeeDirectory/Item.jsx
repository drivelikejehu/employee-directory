import React from 'react';

const Item = (props) => {
    return (
        <div>
            <ul>
                <li>{props.firstName} {props.lastName}</li>
            </ul>
        </div>
    );
};

export default Item;