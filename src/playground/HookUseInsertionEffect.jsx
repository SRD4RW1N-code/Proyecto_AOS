// src/HookUseInsertionEffect.jsx
import React, { useInsertionEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

// Componente que demuestra useInsertionEffect
function HookUseInsertionEffect() {
  const [tema, setTema] = useState("claro");
  const [contador, setContador] = useState(0);
  const contadorRef = useRef();

  // useInsertionEffect - Se ejecuta antes de los layout effects
  useInsertionEffect(() => {
    console.log("useInsertionEffect: Inyectando estilos dinámicos");

    // Crear elemento style para inyectar CSS dinámico
    const style = document.createElement('style');
    style.textContent = `
      .elemento-dinamico {
        padding: 20px;
        margin: 10px;
        border-radius: 8px;
        transition: all 0.3s ease;
        background-color: ${tema === "claro" ? "#f8f9fa" : "#343a40"};
        color: ${tema === "claro" ? "#212529" : "#ffffff"};
        border: 2px solid ${tema === "claro" ? "#dee2e6" : "#495057"};
      }
      
      .elemento-dinamico:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      
      .tema-${tema} {
        background: ${tema === "claro" ?
        "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)" :
        "linear-gradient(135deg, #343a40 0%, #212529 100%)"};
        color: ${tema === "claro" ? "#000" : "#fff"};
        min-height: 100vh;
        padding: 20px;
      }
    `;

    // Agregar estilos al documento
    document.head.appendChild(style);

    // Cleanup: remover estilos cuando el componente se desmonte o cambie
    return () => {
      console.log("useInsertionEffect: Limpiando estilos");
      document.head.removeChild(style);
    };
  }, [tema]); // Dependencia: se ejecuta cuando cambia el tema

  // useEffect normal para comparar
  React.useEffect(() => {
    console.log("useEffect: Efecto normal ejecutado");
    if (contadorRef.current) {
      contadorRef.current.style.animation = "highlight 0.5s ease";
      setTimeout(() => {
        if (contadorRef.current) {
          contadorRef.current.style.animation = "";
        }
      }, 500);
    }
  }, [contador]);

  const toggleTema = () => {
    setTema(tema === "claro" ? "oscuro" : "claro");
  };

  const incrementarContador = () => {
    setContador(prev => prev + 1);
  };

  return (
    <div className={`tema-${tema}`}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className={tema === "claro" ? "text-dark" : "text-light"}>
            Ejemplo de useInsertionEffect
          </h2>
          <p className={tema === "claro" ? "text-muted" : "text-light"}>
            Inyecta estilos CSS antes de que el navegador pinte la pantalla
          </p>
          <Link to="/" className="btn btn-warning">
            HOME
          </Link>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Controles */}
            <div className="row mb-4">
              <div className="">
                <div className="card">
                  <div className="card-header">Control de Tema</div>
                  <div className="card-body">
                    <button
                      onClick={toggleTema}
                      className="btn btn-primary w-100 mb-2"
                    >
                      🌓 Cambiar a tema {tema === "claro" ? "oscuro" : "claro"}
                    </button>
                    <p className="small text-muted mb-0">
                      useInsertionEffect inyecta los estilos CSS del tema
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento con estilos dinámicos */}
            <div className="card mb-4">
              <div className="card-header">
                Elemento con estilos inyectados por useInsertionEffect
              </div>
              <div className="card-body">
                <div className="elemento-dinamico">
                  <h5>¡Estilos dinámicos!</h5>
                  <p>
                    Este elemento tiene estilos que fueron inyectados usando
                    <code>useInsertionEffect</code>. Los estilos cambian según el tema actual.
                  </p>
                  <p>
                    <strong>Tema actual:</strong> {tema}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HookUseInsertionEffect;