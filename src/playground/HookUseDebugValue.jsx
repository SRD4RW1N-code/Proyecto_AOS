import { useState, useEffect, useDebugValue } from "react";
import { Link } from "react-router-dom";

// Hook personalizado
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  // override: null = automático, true/false = forzar valor
  const [override, setOverride] = useState(null);

  useEffect(() => {
    if (override !== null) return; // si estamos forzando, ignorar eventos
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [override]);

  const effective = override !== null ? override : isOnline;

  // Mostrar valor derivado en React DevTools
  useDebugValue(effective, v => v ? "Online ✅ (efectivo)" : "Offline ❌ (efectivo)");

  return {
    isOnline: effective,
    realStatus: isOnline,
    override,
    setOverride,
    toggleOverride: () => setOverride(o => o === null ? !isOnline : !o),
    clearOverride: () => setOverride(null)
  };
}

// Componente que usa el hook
export default function HookUseDebugValue() {
  const { isOnline, realStatus, override, toggleOverride, clearOverride, setOverride } = useOnlineStatus();

  return (
    <div className="container py-4" style={{maxWidth: 600}}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h4 m-0">useDebugValue + estado de conexión</h1>
        <Link to="/" className="btn btn-sm btn-secondary">Home</Link>
      </div>
      <div className="mb-3">
        <span className="fw-semibold">Valor efectivo:</span>{" "}
        <span className={`badge ${isOnline ? "text-bg-success" : "text-bg-danger"}`}>{isOnline ? "Online" : "Offline"}</span>
      </div>
      <div className="mb-3 small text-muted">
        <div><strong>Real (navegador):</strong> {realStatus ? "Online" : "Offline"}</div>
        <div><strong>Override:</strong> {override === null ? "(auto)" : override ? "Forzado Online" : "Forzado Offline"}</div>
      </div>
      <div className="d-flex flex-wrap gap-2 mb-3">
        <button className="btn btn-sm btn-primary" onClick={toggleOverride}>
          {override === null ? "Forzar estado (invertir)" : `Cambiar override → ${!override ? "Online" : "Offline"}`}
        </button>
        {override !== null && (
          <button className="btn btn-sm btn-secondary" onClick={clearOverride}>Volver a automático</button>
        )}
        {override !== true && (
          <button className="btn btn-sm btn-success" onClick={() => setOverride(true)}>Forzar Online</button>
        )}
        {override !== false && (
          <button className="btn btn-sm btn-danger" onClick={() => setOverride(false)}>Forzar Offline</button>
        )}
      </div>
    </div>
  );
}