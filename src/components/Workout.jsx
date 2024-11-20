import React from "react";

export default function Workout({ title, description, time, onComplete }) {
    let timer = React.useRef()

    function handleStartWorkout() {
      // Todo: Start timer
      timer = setTimeout(() => {
        onComplete(title)
      }, time)
    }
  
    function handleStopWorkout() {
      // Todo: Stop timer
      clearTimeout(timer)
      onComplete(title);
    }
  
    return (
      <article className="workout">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{time}</p>
        <p>
          <button onClick={handleStartWorkout}>Start</button>
          <button onClick={handleStopWorkout}>Stop</button>
        </p>
      </article>
    );
  }
  