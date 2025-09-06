import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HookUseNavigate() {
  const navigate = useNavigate();
  function GoRoute() {
    navigate("/name-route");
  }
  return (
    <div className="container justify-content-center align-content-center vh-100">
      <div className="text-center">
        <h2>Ejemplos de Use Navigate</h2>
        <div className="list-group">
          <button onClick={GoRoute} className="btn btn-primary">
            Ruta Navigate
          </button>
          <Link to="/name-route">Ruta de ejemplo</Link>
          <a href="/">Ir al HOME</a>
        </div>
      </div>
    </div>
  );
}

export default HookUseNavigate;
