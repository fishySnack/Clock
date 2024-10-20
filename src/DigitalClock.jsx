import React, {useState, useEffect} from 'react';

function DigitalClock(){
    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const interverId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interverId);
        }
        
    }, []);

    function formatTime(){
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        const meridiem = hours >= 12 ? "PM" : "AM";

        //gives in military time so we convert it
        //since this is javascript
        //if hours % 12 === 0 => then its set to 12 
        hours = hours % 12 || 12;

        return `${addZero(hours)}: ${addZero(min)}:${addZero(sec)} ${meridiem}`;
    }

    function addZero(number){
        if (number < 10){
            return ""+0+number;
        }
        return ""+number;
    }

    return(
        <>
        <div className = "container">
            <div className = "clock">
                <span>{formatTime()}</span>
            </div>

        </div>
        
        </>
    )

}

export default DigitalClock;