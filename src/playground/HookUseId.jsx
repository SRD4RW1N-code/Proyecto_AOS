// src/HookUseId.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Hook useId implementado dentro del mismo archivo
const useId = (prefix = 'id') => {
    const idRef = useRef(null);

    if (idRef.current === null) {
        idRef.current = `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
    }

    return idRef.current;
};

// Componente principal
function HookUseId() {
    // Generamos IDs únicos para cada campo usando nuestro hook
    const nombreId = useId("nombre");
    const emailId = useId("email");
    const telefonoId = useId("telefono");
    const formId = useId("form");

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
        alert("Formulario enviado! Revisa la consola para ver los datos.");
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2 className="text-primary">Ejemplo de useId</h2>
                <p className="text-muted">Genera IDs únicos para mejorar la accesibilidad</p>
                <Link to="/" className="btn btn-warning">
                    HOME
                </Link>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form
                        id={formId}
                        onSubmit={handleSubmit}
                        className="p-4 border rounded bg-light"
                    >
                        <h3 className="text-center mb-4">Formulario de Contacto</h3>

                        <div className="mb-3">
                            <label htmlFor={nombreId} className="form-label fw-bold">
                                Nombre:
                            </label>
                            <input
                                id={nombreId}
                                name="nombre"
                                type="text"
                                className="form-control"
                                placeholder="Ingresa tu nombre completo"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor={emailId} className="form-label fw-bold">
                                Email:
                            </label>
                            <input
                                id={emailId}
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="ejemplo@correo.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor={telefonoId} className="form-label fw-bold">
                                Teléfono:
                            </label>
                            <input
                                id={telefonoId}
                                name="telefono"
                                type="tel"
                                className="form-control"
                                placeholder="ingrese su telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Enviar Formulario
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HookUseId;