import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <div className="container text-center mt-5">
        <h1>Hook Contador</h1>
        <h2>Contador: {contador}</h2>
        <div className="btn-group gap-2">
          <button
            onClick={() => setContador(contador + 1)}
            className="btn btn-success"
          >
            Aumentar +
          </button>
          <button
            onClick={() => setContador(contador - 1)}
            className="btn btn-warning"
          >
            Disminuir -
          </button>
        </div>
        <a href="/">Ir al HOME</a>
      </div>
    </div>
  );
}

export default Contador;
