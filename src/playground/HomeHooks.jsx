import React from "react";
import { Link } from "react-router-dom";

function HomeHooks() {
  const hooks = [
    { 
      name: "useState", 
      path: "/useState", 
      description: "Maneja el estado dentro de un componente funcional.", 
      category: "Estado" 
    },
    { 
      name: "useNavigate", 
      path: "/useNavigate", 
      description: "Permite navegar entre rutas en React Router.", 
      category: "Navegación" 
    },
    { 
      name: "useActionState", 
      path: "/useActionState", 
      description: "Maneja el estado de acciones asíncronas y formularios.", 
      category: "Acciones" 
    },
    { 
      name: "useCallback", 
      path: "/useCallback", 
      description: "Memoriza funciones para optimizar el rendimiento.", 
      category: "Optimización" 
    },
    { 
      name: "useContext", 
      path: "/useContext", 
      description: "Accede al contexto de React para compartir datos.", 
      category: "Contexto" 
    },
    { 
      name: "useDebugValue", 
      path: "/useDebugValue", 
      description: "Muestra etiquetas personalizadas en React DevTools.", 
      category: "Desarrollo" 
    },
    { 
      name: "useDeferredValue", 
      path: "/useDeferredValue", 
      description: "Diferencia la actualización de un valor para mejor rendimiento.", 
      category: "Optimización" 
    },
    { 
      name: "useEffect", 
      path: "/useEffect", 
      description: "Maneja efectos secundarios en componentes funcionales.", 
      category: "Efectos" 
    },
    { 
      name: "useId", 
      path: "/useId", 
      description: "Genera IDs únicos para accesibilidad y formularios.", 
      category: "Contexto" 
    },
    {
      name: "useImperativeHandle",
      path: "/useImperativeHandle",
      description: "permite personalizar el identificador expuesto como una ref.",
      category: "Referencias"
    },
    {
      name: "useInsertionEffect",
      path: "/useInsertionEffect",
      description: "permite insertar elementos en el DOM antes de que se dispare cualquier Efecto de diseño (layout).",
      category: "Efectos"
    },
    {
      name: "useLayoutEffect",
      path: "/useLayoutEffect",
      description: "es una versión de useEffect que se acciona antes que el navegador vuelva a pintar la pantalla.",
      category: "Efectos"
    },
    {
      name: "useMemo",
      path: "/useMemo",
      description: "permite guardar en caché el resultado de un cálculo entre renderizados.",
      category: "Optimización"
    },
    {
      name: "useOptimistic",
      path: "/useOptimistic",
      description: "permite actualizar la interfaz de usuario / UI de manera optimista.",
      category: "Nuevos React 19"
    },
    { 
      name: "useReducer", 
      path: "/useReducer", 
      description: "Maneja estado complejo con un patrón reducer.", 
      category: "Estado" 
    },
    { 
      name: "useRef", 
      path: "/useRef", 
      description: "Crea referencias mutables a elementos del DOM o valores.", 
      category: "Referencias" 
    },
    { 
      name: "useSyncExternalStore", 
      path: "/useSyncExternalStore", 
      description: "Se suscribe a stores externos y mantiene la sincronización.", 
      category: "Sincronización" 
    },
    { 
      name: "useTransition", 
      path: "/useTransition", 
      description: "Permite actualizaciones no urgentes sin bloquear la UI.", 
      category: "Rendimiento" 
    },
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="text-primary">Ejemplos de Hooks en React</h2>
        <p className="text-muted">Explora los diferentes hooks de React con ejemplos prácticos</p>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Hook</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {hooks.map((hook, index) => (
              <tr key={index}>
                <td>
                  <strong className="text-info">{hook.name}</strong>
                </td>
                <td>{hook.description}</td>
                <td>
                  <span className="badge bg-secondary">{hook.category}</span>
                </td>
                <td>
                  <Link 
                    to={hook.path} 
                    className="btn btn-primary btn-sm"
                  >
                    Ver Ejemplo
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Versión alternativa para móviles */}
      <div className="d-md-none">
        <div className="list-group">
          {hooks.map((hook, index) => (
            <div key={index} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1 text-info">{hook.name}</h6>
                  <p className="mb-1 small">{hook.description}</p>
                  <span className="badge bg-secondary">{hook.category}</span>
                </div>
                <Link 
                  to={hook.path} 
                  className="btn btn-primary btn-sm"
                >
                  Ver
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeHooks;