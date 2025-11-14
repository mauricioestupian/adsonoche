import React, { useState } from "react";
import "./PerfilCard.css"; // Estilos separados para claridad

const PerfilCard = ({ nombre, edad, imagen }) => {
  const [colorFondo, setColorFondo] = useState("#f0f0f0");

  const cambiarColor = () => {
    const colores = ["#f0f0f0", "#d1e7dd", "#cff4fc", "#f8d7da"];
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    setColorFondo(nuevoColor);
  };

  return (
    <div
      className="perfil-card"
      style={{ backgroundColor: colorFondo }}
      onClick={cambiarColor}
    >
      <img src={imagen} alt={`Foto de ${nombre}`} />
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <small>(Haz clic para cambiar el color)</small>
    </div>
  );
};

export default PerfilCard;
