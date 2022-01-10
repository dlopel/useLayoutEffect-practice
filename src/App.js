import "./styles.css";
import React from "react";
import styles from "styled-components";

const Div = styles.div`
  background-color: red;
  width: 100px;
  height: 100px;
  position: relative;
`;

export default function App() {
  const divRef = React.useRef(null);
  console.log("leyendo el componente");

  React.useLayoutEffect(() => {
    // se ejecuta de forma asíncrona, justo después de que React ejecutó todas las mutaciones pero antes de “pintar” en pantalla.
    // casos de uso, mutar el dom u obtener datos de este

    // const node = document.querySelector('.red')
    // node.style.top = '200px'

    divRef.current.style.top = "300px";
    const data = getComputedStyle(divRef.current);
    console.log(data);
    const computedStyles = divRef.current.getBoundingClientRect();
    console.log(computedStyles.top);
    //API InsersectionObserver
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Div className="red" ref={divRef}></Div>
    </div>
  );
}
