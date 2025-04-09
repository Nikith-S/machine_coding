import React from 'react'

const index = () => {

var progress = document.querySelector('.progress')
var progressLabel = document.querySelector('.progressLabel')
var startButton = document.querySelector('.start')

const handleButton = () => {


let value = 0;
let interval;

interval = setInterval(() => {

    if(value === 90){
    clearInterval(interval)
    }
value +=10;
progress.style.width = `${value}%`;
progressLabel.innText= `${value}%`; 
}, 10000)
}

  return (
    <>
    <div className="progressWrapper">
    <div className="progress">
    <div className="progressBar">
    <span className="progressLabel">
        0%
        </span>
    </div>
    </div>
    </div>

    <Button className = "start" onclick>Start</Button>
    </>
  )
}

export default index
