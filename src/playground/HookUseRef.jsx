import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function HookUseRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header bg-success text-white text-center">
              <h4>useRef</h4>
              <Link to="/" className='btn btn-warning'>HOME</Link>
            </div>
            
            <div className="card-body text-center">
              
              <input
                ref={inputRef}
                type="text"
                className="form-control mb-3"
                placeholder="Escribe aquí..."
              />
              
              <div className="d-flex gap-2 justify-content-center">
                <button onClick={focusInput} className="btn btn-primary">
                  Focus
                </button>
                <button onClick={clearInput} className="btn btn-secondary">
                  Limpiar
                </button>
              </div>

              <p className="text-muted mt-3 small">
                Usa useRef para controlar elementos del DOM directamente
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HookUseRef;