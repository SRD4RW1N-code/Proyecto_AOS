import { useActionState } from "react";
import { useNavigate } from "react-router-dom";

async function updateCounter(previousState, formData) {
  const action = formData.get("action");
  switch (action) {
    case "increment":
      return previousState + 1;
    case "decrement":
      return previousState - 1;
    default:
      return previousState;
  }
}


function HookUseActionState({}) {
  const [state, formAction, isPending] = useActionState(updateCounter, 0);
  const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        action={formAction}
        className="p-4 border rounded shadow bg-light text-center"
        style={{ minWidth: 320 }}
      >
        <h4 className="mb-3">Contador con useActionState</h4>
        <div className="display-5 mb-3 fw-bold">{state}</div>
        <div className="d-flex gap-2 mb-2">
          <button
            type="submit"
            name="action"
            value="increment"
            className="btn btn-success w-100"
            disabled={isPending}
          >
            + Incrementar
          </button>
          <button
            type="submit"
            name="action"
            value="decrement"
            className="btn btn-danger w-100"
            disabled={isPending}
          >
            - Disminuir
          </button>
        </div>
        {isPending && <div className="text-muted small">Actualizando...</div>}
        <hr />
        <button
          type="button"
          onClick={() => navigate("/")}
          className="btn btn-outline-primary w-100 mt-2"
        >
          Volver a Home
        </button>
      </form>
    </div>
  );
}

export default HookUseActionState;