import React, { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

// Hijo sin useCallback
const BotonNormal = React.memo(({ onClick }) => {
  const rendersRef = useRef(0);
  rendersRef.current += 1;
  return (
    <div className="card border-danger flex-fill" style={{minWidth: 250}}>
      <div className="card-header py-2 bg-danger text-white">Sin useCallback</div>
      <div className="card-body py-3">
        <p className="small text-muted mb-2">Renders: <span className="badge text-bg-danger">{rendersRef.current}</span></p>
        <button onClick={onClick} className="btn btn-outline-danger btn-sm w-100">Sumar</button>
      </div>
    </div>
  );
});

// Hijo con useCallback
const BotonConCallback = React.memo(({ onClick }) => {
  const rendersRef = useRef(0);
  rendersRef.current += 1;
  return (
    <div className="card border-success flex-fill" style={{minWidth: 250}}>
      <div className="card-header py-2 bg-success text-white">Con useCallback</div>
      <div className="card-body py-3">
        <p className="small text-muted mb-2">Renders: <span className="badge text-bg-success">{rendersRef.current}</span></p>
        <button onClick={onClick} className="btn btn-outline-success btn-sm w-100">Sumar</button>
      </div>
    </div>
  );
});

export default function HookUseCallback() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  // ❌ Esta función cambia en cada render
  const incrementarNormal = () => setContador((c) => c + 1);

  // ✅ Esta función se mantiene estable gracias a useCallback
  const incrementarCallback = useCallback(() => {
    setContador((c) => c + 1);
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 m-0">Demo useCallback</h1>
        <Link to="/" className="btn btn-secondary btn-sm">Home</Link>
      </div>
      <div className="alert alert-info small mb-4">
        Rojo: nueva función cada render. Verde: función memorizada (menos renders cuando sólo cambia el texto).
      </div>
      <div className="mb-3">
        <span className="fw-semibold">Contador:</span> <span className="badge text-bg-primary fs-6">{contador}</span>
      </div>
      <div className="d-flex flex-wrap gap-3 mb-4">
        <BotonNormal onClick={incrementarNormal} />
        <BotonConCallback onClick={incrementarCallback} />
      </div>
      <div className="mb-4" style={{maxWidth: 320}}>
        <label className="form-label fw-semibold">Entrada (dispara render del padre)</label>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Escribe algo"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>
    </div>
  );
}