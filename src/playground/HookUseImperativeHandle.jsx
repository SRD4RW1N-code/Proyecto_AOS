// src/HookUseImperativeHandle.jsx
import React, { useRef, useImperativeHandle, forwardRef, useState } from "react";
import { Link } from "react-router-dom";

// Componente hijo que usa useImperativeHandle
const InputPersonalizado = forwardRef((props, ref) => {
    const inputRef = useRef();
    const [valor, setValor] = useState("");

    // Exponemos métodos específicos al componente padre
    useImperativeHandle(ref, () => ({
        enfocar: () => {
            inputRef.current.focus();
        },
        limpiar: () => {
            setValor("");
            inputRef.current.value = "";
        },
        obtenerValor: () => {
            return valor;
        },
        establecerValor: (nuevoValor) => {
            setValor(nuevoValor);
            inputRef.current.value = nuevoValor;
        },
        // También exponemos el elemento DOM si es necesario
        elemento: inputRef.current
    }));

    const handleChange = (e) => {
        setValor(e.target.value);
        if (props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <input
            ref={inputRef}
            type="text"
            value={valor}
            onChange={handleChange}
            placeholder={props.placeholder}
            className="form-control"
            style={props.estilo}
        />
    );
});

// Componente principal
function UseImperativeHandle() {
    const inputRef = useRef();
    const [mensaje, setMensaje] = useState("");

    const manejarEnfocar = () => {
        inputRef.current.enfocar();
        setMensaje("Input enfocado!");
        setTimeout(() => setMensaje(""), 2000);
    };

    const manejarLimpiar = () => {
        inputRef.current.limpiar();
        setMensaje("Input limpiado!");
        setTimeout(() => setMensaje(""), 2000);
    };

    const manejarObtenerValor = () => {
        const valor = inputRef.current.obtenerValor();
        setMensaje(`Valor actual: "${valor}"`);
        setTimeout(() => setMensaje(""), 3000);
    };

    const manejarEstablecerValor = () => {
        inputRef.current.establecerValor("¡Hola Mundo!");
        setMensaje("Valor establecido a '¡Hola Mundo!'");
        setTimeout(() => setMensaje(""), 3000);
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2 className="text-primary">Ejemplo de useImperativeHandle</h2>
                <p className="text-muted">Expone métodos personalizados de un componente hijo al padre</p>
                <Link to="/" className="btn btn-warning">
                    HOME
                </Link>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    {/* Tarjeta principal */}
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Control de Input Personalizado</h4>
                        </div>
                        <div className="card-body">
                            {/* Input personalizado */}
                            <div className="mb-4">
                                <label className="form-label fw-bold">Input controlado:</label>
                                <InputPersonalizado
                                    ref={inputRef}
                                    placeholder="Escribe algo aquí..."
                                    estilo={{ fontSize: '18px', padding: '12px' }}
                                />
                            </div>

                            {/* Controles */}
                            <div className="row mb-4">
                                <div className="col-md-3 mb-2">
                                    <button
                                        onClick={manejarEnfocar}
                                        className="btn btn-primary w-100"
                                    >
                                        ⚡ Enfocar
                                    </button>
                                </div>
                                <div className="col-md-3 mb-2">
                                    <button
                                        onClick={manejarLimpiar}
                                        className="btn btn-warning w-100"
                                    >
                                        🧹 Limpiar
                                    </button>
                                </div>
                                <div className="col-md-3 mb-2">
                                    <button
                                        onClick={manejarObtenerValor}
                                        className="btn btn-info w-100 text-white"
                                    >
                                        📋 Obtener Valor
                                    </button>
                                </div>
                                <div className="col-md-3 mb-2">
                                    <button
                                        onClick={manejarEstablecerValor}
                                        className="btn btn-success w-100"
                                    >
                                        ✏️ Establecer Valor
                                    </button>
                                </div>
                            </div>

                            {/* Mensaje de estado */}
                            {mensaje && (
                                <div className="alert alert-info text-center">
                                    <strong>{mensaje}</strong>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseImperativeHandle;