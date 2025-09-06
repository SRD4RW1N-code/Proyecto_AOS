import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext.jsx";

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. El provider local ya no es necesario porque usamos el global

// 3. Componente que consume el contexto
function ThemedPanel({ title, children }) {
  return (
    <section className="themed-panel max-w">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

// 4. Otro componente que también consume el contexto
function ThemedButton({ children, variant = "primary" }) {
  const className =
    variant === "secondary" ? "btn-theme btn-secondary-theme" : "btn-theme btn-primary-theme";
  return <button className={className}>{children}</button>;
}

// 5. Botón para cambiar el tema
function ToggleButton() {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme} className="btn-theme btn-toggle-theme">Cambiar tema</button>;
}

// 6. Componente principal
function HookUseContext() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
      <div className="d-flex gap-2 flex-wrap mb-4">
        <ToggleButton />
        <Link to="/" className="btn-theme btn-secondary-theme text-decoration-none">
          Ir a Home
        </Link>
      </div>
      <ThemedPanel title="Bienvenido">
        <div className="stack-h">
          <ThemedButton>Registrarse</ThemedButton>
          <ThemedButton variant="secondary">Iniciar sesión</ThemedButton>
        </div>
      </ThemedPanel>
    </div>
  );
}

export default HookUseContext;