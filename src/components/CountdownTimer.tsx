import React, { useState, useEffect} from "react";

const CountdownTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setisRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);

useEffect (() => { 
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
        timer = setInterval  (() => {
            setRemainingTime ((prev) => prev - 1)
        }, 1000);
    }
    else if (remainingTime === 0) {
        setisRunning(false)
    }
    return () => clearInterval(timer);
} , [isRunning, remainingTime]);

const handleStart = () => {
    if (time > 0) {
        setRemainingTime(time)
        setisRunning(true)
    }
}

const handlePause = () => {
        setisRunning(false)
}
 
const handleReset = () => {
    setisRunning(false)
    setRemainingTime(0)
    setTime(0)
}

return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-pink-500 bg">

         <h1 className="text-4xl font-extrabold uppercase mb-6"> Countdown Timer</h1>

         <input 
         type="number"
         className="border-2 border-yellow-500bg-transparent p-3 mb-6 text-purple-400 text-xl rounded"
         placeholder="Enter Time In Seconds"
         value={time > 0 ? time : ""}
         onChange={(e) => setTime(Number(e.target.value))}
         />

        <div className="text-3xl font-semibold uppercase mb-6 text-white">
            {remainingTime} seconds remaining  
        </div>


        <div>
            <button 
              onClick={handleStart} className="text-white px-8 py-4 rounded-lg ml-4 font-normal
               bg-gradient-to-r from-cyan-500 to-fuchsia-500
               hover:from-pink-600 hover:to-emerald-600">
              Start
            </button>


            <button 
              onClick={handlePause} className="text-white px-8 py-4 rounded-lg ml-4 font-normal
               bg-gradient-to-r from-yellow-500 to-pink-500
               hover:from-blue-600 hover:to-lime-500">
              Pause
            </button>

            <button 
              onClick={handleReset} className="text-white px-8 py-4 rounded-lg ml-4 font-normal
               bg-gradient-to-r from-green-500 to-pink-500
               hover:from-yellow-600 hover:to-emerald-600">
              Reset
            </button>
            
            <footer className="mt-10 text-black text-sm text-center ">
                Under The Supervison Of Rahat Bano
            </footer>

        </div>

    </div>
)


}

export default CountdownTimer