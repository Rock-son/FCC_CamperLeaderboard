import React from 'react';

export default (props) => {
        return (<a href={"https://www.freecodecamp.com/" + props.user} target='_blank'>
                    <img src={props.src} alt={props.alt}/>
                </a>
        );
}
