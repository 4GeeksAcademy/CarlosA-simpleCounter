// React
import React from 'react';

export const Counter = (seconds = 0) => {
    return (
        <div className='container bg-primary text-white display-1 mt-5 font-monospace'>
            <div className='clock d-flex flex-row p-2'>
                <div className='icon d-flex align-items-center col-1'><i className="fa-regular fa-clock fa-beat-fade"></i></div>
                <div className='digit-4 d-flex justify-content-center col-1 border border-secondary bg-dark bg-gradient'>{Math.floor(seconds.seconds/100000)%10}</div>
                <div className='digit-3 d-flex justify-content-center col-1 border border-secondary bg-dark bg-gradient'>{Math.floor(seconds.seconds/10000)%10}</div>
                <div className='digit-2 d-flex justify-content-center col-1 border border-secondary bg-dark bg-gradient'>{Math.floor(seconds.seconds/1000)%10}</div>
                <div className='digit-1 d-flex justify-content-center col-1 border border-secondary bg-dark bg-gradient'>{Math.floor(seconds.seconds/100)%10}</div>
                <div className='separator d-flex justify-content-center align-items-center col-1 border border-secondary bg-dark bg-gradient fs-1'>;</div>
                <div className='digit-02 d-flex justify-content-center col-1 border border-secondary bg-dark bg-gradient'>{Math.floor(seconds.seconds/10)%10}{Math.floor(seconds.seconds)%10}</div>
                <div className='d-flex col-3 align-items-center justify-content-evenly'>
                    <input id='userSeconds' type="number" className="form-control mx-3" placeholder="seconds to countdown"/>
                    <button id='mode' type="button" onClick={modeChange()} className="btn btn-secondary d-flex">Mode</button>
                </div>
                <div className='d-flex col-2 align-items-center justify-content-evenly'>
                    <button id='startStop' type="button" onClick={startStop()} className="btn btn-success d-flex">Start/Stop</button>
                    <button id='reset' type="button" onClick={reset()} className="btn btn-danger d-flex">Reset</button>
                </div>
            </div>
        </div>
    )
}

// Funciones de los botones

function startStop() {
    // Función para iniciar/parar el stopwatch y el countdown
    // WIP
}

function reset() {
    // Funcion reset para el stopwatch y el countdown
    // WIP
}

function modeChange() {
    // Funcion para cambiar modos entre stopwatch y countdown
    // WIP
}