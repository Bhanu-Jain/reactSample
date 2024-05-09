import React from 'react';
import GreetingSpan from './GreetingSpan';

let greetingTextConfig = {

    greetingText: 'Good morning',
    greetingInlineStyle: {
        color: 'green'
    },
    setGreetingTextAndColor: function (text, color) {

        this.greetingText = text;
        this.greetingInlineStyle.color = color;
    }
}


const GreetingToDisplay = () => {

    const currentTime = new Date();
    if (currentTime.getHours() >= 12 && currentTime.getHours() < 17) {

            greetingTextConfig.setGreetingTextAndColor('Good Afternoon', 'yellow');
            return (<h1 className="headingStyle"> Hello Sir, <GreetingSpan greetingText = {greetingTextConfig.greetingText} greetingInlineStyle = {greetingTextConfig.greetingInlineStyle}/></h1>);
    
    } else if (currentTime.getHours() >= 17 && currentTime.getHours() < 20) {
    
        greetingTextConfig.setGreetingTextAndColor('Good Evening', 'orange');
        return (<h1 className="headingStyle"> Hello Sir, <GreetingSpan greetingText = {greetingTextConfig.greetingText} greetingInlineStyle = {greetingTextConfig.greetingInlineStyle}/></h1>);
    
    
    } else if (currentTime.getHours() >= 20) {
    
        greetingTextConfig.setGreetingTextAndColor('Good Night', 'black');
        return (<h1 className="headingStyle"> Hello Sir, <GreetingSpan greetingText = {greetingTextConfig.greetingText} greetingInlineStyle = {greetingTextConfig.greetingInlineStyle}/></h1>);
    
    }else{

        return (<h1 className="headingStyle"> Hello Sir, <GreetingSpan greetingText = {greetingTextConfig.greetingText} greetingInlineStyle = {greetingTextConfig.greetingInlineStyle}/></h1>);
    }

}


function Greetings() {

    return <GreetingToDisplay/>;
}

export default Greetings;