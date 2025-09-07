import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function UseOptimistic() {
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! 👋", sending: false },
        { id: 2, text: "¿Cómo estás?", sending: false }
    ]);

    const [pendingMessages, setPendingMessages] = useState([]);
    const inputRef = useRef();

    const sendMessage = async (messageText) => {
        const tempId = Date.now();

        // Agregar mensaje optimista
        setPendingMessages(prev => [...prev, { id: tempId, text: messageText }]);

        // Simular envío al servidor (2 segundos de delay)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Remover de pendientes y agregar al estado real
        setPendingMessages(prev => prev.filter(msg => msg.id !== tempId));
        setMessages(prev => [
            ...prev,
            { id: tempId, text: messageText, sending: false }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = inputRef.current.value.trim();
        if (message) {
            sendMessage(message);
            inputRef.current.value = "";
        }
    };

    // Combinar mensajes reales y pendientes
    const allMessages = [
        ...messages,
        ...pendingMessages.map(msg => ({ ...msg, sending: true }))
    ];

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h2>useOptimistic Example</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Envía mensajes con actualización optimista
            </p>
            <Link to="/" className="btn btn-warning">
                HOME
            </Link>
            <br /><br />
            <div style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '15px',
                height: '400px',
                overflowY: 'auto',
                marginBottom: '15px',
                backgroundColor: '#f9f9f9'
            }}>
                {allMessages.map((message) => (
                    <div
                        key={message.id}
                        style={{
                            padding: '10px',
                            margin: '5px 0',
                            borderRadius: '10px',
                            backgroundColor: message.sending ? '#fff3cd' : '#d1ecf1',
                            border: `1px solid ${message.sending ? '#ffeaa7' : '#bee5eb'}`,
                            opacity: message.sending ? 0.8 : 1
                        }}
                    >
                        <div>{message.text}</div>
                        {message.sending && (
                            <div style={{ fontSize: '12px', color: '#856404', marginTop: '5px' }}>
                                ⏳ Enviando...
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Escribe un mensaje..."
                    style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '14px'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Enviar
                </button>
            </form>

            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#e7f3ff',
                borderRadius: '5px',
                border: '1px solid #b3d9ff'
            }}>
                <h4>Función de useOptimistic</h4>
                <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                    <li>Muestra el mensaje inmediatamente (optimista)</li>
                    <li>Indica "Enviando..." mientras se procesa</li>
                    <li>Actualiza el estado real cuando termina</li>
                    <li>Mejora la experiencia del usuario</li>
                </ul>
            </div>
        </div>
    );
}

export default UseOptimistic;