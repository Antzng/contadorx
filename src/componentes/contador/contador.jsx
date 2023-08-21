import React, { useState } from "react"
import './contador.css'

const Contador = () => {
    
const [Contador, setContador] = useState(0);

    const reiniciar = () => {
        setContador(0)
    }

    const sumar = () =>{
        setContador(Contador + 1)
    } 

    const restar = () => {
        if(Contador >0)
        setContador(Contador - 1)
    }

    return (
    <div>
    <h1>contador</h1>
    <h2> {Contador} </h2>
        <div className="botones">
            <button onClick={restar}>restar</button>
            <button onClick={reiniciar}>0</button>
            <button onClick={sumar}>sumar</button>
            </div>
    </div>
    );
};

export default Contador;