import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HooksUseEffect() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setMensaje(`El contador cambió a: ${contador}`);
    // console.log("useEffect ejecutado: ", contador);
  }, [contador]);

  return (
    <div className="container py-5" style={{ maxWidth: 660 }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 m-0">Ejemplo de useEffect</h1>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          Home
        </Link>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="lead mb-4">
            Contador:{" "}
            <span className="badge text-bg-primary fs-6 align-middle">
              {contador}
            </span>
          </p>
          <div className="d-flex gap-2 mb-3 flex-wrap">
            <button
              onClick={() => setContador((c) => c + 1)}
              className="btn btn-success btn-sm"
            >
              Sumar
            </button>
            <button
              onClick={() => setContador((c) => c - 1)}
              className="btn btn-danger btn-sm"
            >
              Restar
            </button>
            <button
              onClick={() => setContador(0)}
              className="btn btn-warning btn-sm"
            >
              Reset
            </button>
          </div>
          <hr />
          <h2 className="h6 text-uppercase text-muted mb-2">
            Resultado del useEffect
          </h2>
          <p className="mb-0 fw-medium">{mensaje}</p>
        </div>
      </div>
      <div className="mt-4 small text-muted">
        Este componente ejecuta useEffect cada vez que cambia el
        contador y actualiza el mensaje.
      </div>
    </div>
  );
}
