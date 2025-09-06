import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom";

function UseTransition() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // startTransition para operación pesada
    startTransition(() => {
      // Simular operación costosa
      const items = [];
      for (let i = 0; i < 2000; i++) {
        items.push(`${value} - item ${i}`);
      }
      setList(items);
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-success text-white text-center">
              <h4>useTransition</h4>
              <Link to="/" className="btn btn-warning">
                HOME
              </Link>
            </div>

            <div className="card-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Escribe algo..."
                value={input}
                onChange={handleInputChange}
              />

              {isPending && (
                <div className="text-center mb-3">
                  <div
                    className="spinner-border spinner-border-sm text-success"
                    role="status"
                  >
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <span className="text-muted ms-2">Procesando...</span>
                </div>
              )}

              <div className={isPending ? "opacity-50" : ""}>
                <h6>Resultados ({list.length} items):</h6>
                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {list.slice(0, 10).map((item, index) => (
                    <div key={index} className="border-bottom py-1">
                      <small>{item}</small>
                    </div>
                  ))}
                  {list.length > 10 && (
                    <div className="text-center text-muted mt-2">
                      <small>... y {list.length - 10} más</small>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card-footer text-muted text-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseTransition;
