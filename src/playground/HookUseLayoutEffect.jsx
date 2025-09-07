import React, { useLayoutEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function UseLayoutEffect() {
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [size, setSize] = useState({ width: 0, height: 0 });
    const targetRef = useRef();
    const tooltipRef = useRef();

    useLayoutEffect(() => {
        if (show && targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            setSize({
                width: rect.width,
                height: rect.height
            });

            // Posicionar el tooltip centrado arriba del elemento
            setPosition({
                top: rect.top - 40,
                left: rect.left + rect.width / 2
            });
        }
    }, [show]);

    const toggleTooltip = () => {
        setShow(!show);
    };

    return (
        <div style={{ padding: '50px' }}>
            <h2>useLayoutEffect Example</h2>
            <br />
            <Link to="/" className="btn btn-warning">
                HOME
            </Link>
            <br /><br />
            <button
                ref={targetRef}
                onClick={toggleTooltip}
                style={{
                    padding: '15px 25px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                {show ? 'Ocultar Tooltip' : 'Mostrar Tooltip'}
            </button>

            {show && (
                <div
                    ref={tooltipRef}
                    style={{
                        position: 'fixed',
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                        zIndex: 1000
                    }}
                >
                    Este tooltip está posicionado con useLayoutEffect
                    <div style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '10px',
                        height: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        rotate: '45deg'
                    }} />
                </div>
            )}

            {show && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
                    <p>Ancho del botón: {size.width}px</p>
                    <p>Alto del botón: {size.height}px</p>
                    <p>Posición del tooltip: Top {position.top}px, Left {position.left}px</p>
                </div>
            )}
        </div>
    );
}

export default UseLayoutEffect;