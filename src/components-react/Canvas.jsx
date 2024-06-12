import { useState } from "react";
import Pixel from "./Pixel";
import "./Canvas.css";

let defaultColorMap = [];
for (let i = 0; i < 16; i++) {
  let row = [];
  for (let j = 0; j < 16; j++) {
    row.push("white");
  }
  defaultColorMap.push(row);
}


function Canvas(params) {

  const [colorMap, setColorMap] = useState(defaultColorMap);
  
  const [selectedColor, setSelectedColor] = useState("red");

  const cambiarColor = (id) => {
    let newColorMap = colorMap.slice();
    let [i, j] = id.split("-").map(Number);
    newColorMap[i][j] = selectedColor;
    setColorMap(newColorMap);
  };

  const seleccionarColor = (event) => {
    setSelectedColor(event.target.value);
  };

  const canvas = [];
  for (let i = 0; i < 16; i++) {
    const row = [];
    for (let j = 0; j < 16; j++) {
      const id = `${i}-${j}`;
      row.push(<Pixel color={colorMap[i][j]} id={id} key={id} onClick={cambiarColor} />);
    }
    canvas.push(row);
  }

  return (
    <div>
      <select value={selectedColor} onChange={seleccionarColor}>
        <option value="#f54248">Rojo</option>
        <option value="#63f542">Verde</option>
        <option value="#42b0f5">Azul</option>
        <option value="#e9f542">Amarillo</option>
        <option value="#ef42f5">Morado</option>
        <option value="#f5a142">Naranja</option>
        <option value="white">Borrar</option>

      </select>
      <br />
      {canvas.map((fila, i) => (
        <div id={i} className="row" key={i}>
          {fila}
        </div>
      ))}
    </div>
  );
}

export default Canvas;
