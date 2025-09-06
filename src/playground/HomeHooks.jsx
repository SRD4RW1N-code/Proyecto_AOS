import React from "react";

function HomeHooks(){
    return(
        <div className="container justify-content-center align-content-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de Hookes</h2>
                <div className="list-group">
                    <a href="/useState" className="list-group-item">Ir a useState</a>
                    <a href="/useNavigate" className="list-group-item">Ir a useNavigate</a>
                    <a href="/useActionState" className="list-group-item">Ir a useActionState</a>
                    <a href="/useCallback" className="list-group-item">Ir a useCallback</a>
                    <a href="/useContext" className="list-group-item">Ir a useContext</a>
                    <a href="/useDebugValue" className="list-group-item">Ir a useDebugValue</a>
                    <a href="/useDeferredValue" className="list-group-item">Ir a useDeferredValue</a>
                    <a href="/useEffect" className="list-group-item">Ir a useEffect</a>
                </div>
            </div>
        </div>
    );
}

export default HomeHooks;