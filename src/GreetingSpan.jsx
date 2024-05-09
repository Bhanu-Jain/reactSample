import React from 'react';

function GreetingSpan(props){

    return <span style={props.greetingInlineStyle}>{props.greetingText}</span>;
}

export default GreetingSpan;