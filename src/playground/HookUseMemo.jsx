import { Link } from "react-router-dom";
import React, { useMemo, useState } from "react";

function UseMemo() {
    const [numero, setNumero] = useState(1);
    const [contador, setContador] = useState(0);

    // Función pesada que queremos memoizar
    const calcularFactorial = (n) => {
        console.log('Calculando factorial de', n);
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
            // Simular operación pesada
            for (let j = 0; j < 1000000; j++) { }
        }
        return resultado;
    };

    // useMemo para memoizar el factorial
    const factorial = useMemo(() => calcularFactorial(numero), [numero]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>useMemo Example</h2>
            <br />
            <Link to="/" className="btn btn-warning">
                HOME
            </Link>
            <br /><br />
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>
                    Número para factorial:
                </label>
                <input
                    type="number"
                    value={numero}
                    onChange={(e) => setNumero(Number(e.target.value))}
                    min="1"
                    max="10"
                    style={{ padding: '5px', marginRight: '10px' }}
                />
                <button onClick={() => setNumero(n => n > 1 ? n - 1 : 1)}>
                    -
                </button>
                <button onClick={() => setNumero(n => n < 10 ? n + 1 : 10)}>
                    +
                </button>
            </div>

            <div style={{
                backgroundColor: '#e3f2fd',
                padding: '15px',
                borderRadius: '5px',
                marginBottom: '20px'
            }}>
                <h3>Resultado del cálculo:</h3>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Factorial de {numero} = {factorial}
                </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <p>Contador: {contador}</p>
                <button
                    onClick={() => setContador(c => c + 1)}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Incrementar Contador
                </button>
                <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                    (Este botón no recalcula el factorial gracias a useMemo)
                </p>
            </div>

            <div style={{
                backgroundColor: '#fff3cd',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #ffeaa7'
            }}>
                <h4>¿Qué está pasando?</h4>
                <ul style={{ fontSize: '14px' }}>
                    <li>El factorial solo se recalcula cuando cambia el número</li>
                    <li>Incrementar el contador NO recalcula el factorial</li>
                    <li>Sin useMemo, cada render recalcularía el factorial</li>
                </ul>
            </div>
        </div>
    );
}

export default UseMemo;