    import React from 'react'
    import Countdown from 'react-countdown'



    const FlashSaleTimer = () => {
        const Completionist = () => <span>Flash Sale End!</span>;
        const renderer = ({days,hours, minutes, seconds, completed }) => {
            if (completed) {
            
            return <Completionist />;
            } else {
            
            return <div className='flex gap-4  items-center'>
                <span className='flex flex-col leading-tight tracking-tighter'>
                    <p className='text-xs font-normal capitalize'>Days</p>
                    <span className='text-3xl font-bold'>{days} :</span>
                </span>
                <span className='flex flex-col'>
                    <p className='text-xs font-normal capitalize'>Hours</p>
                    <span className='text-3xl font-bold'>{hours} :</span>
                </span> 
                <span className='flex flex-col'>
                    <p className='text-xs font-normal capitalize'>Minutes</p>
                    <span className='text-3xl font-bold'>{minutes} :</span>
                </span> 
                <span className='flex flex-col'>
                    <p className='text-xs font-normal capitalize'>Seconds</p>
                    <span className='text-3xl font-bold'>{seconds} </span>
                </span>
            </div>;
            }
        };
    
    return (
        
        <Countdown date={new Date("2024-10-20T00:00:00")}   renderer={renderer}>
        <Completionist />
        </Countdown>
      
    )
    }

    export default FlashSaleTimer