import React, { useReducer } from 'react';
import { Link } from "react-router-dom";

const initialState = {
  count: 0,
  history: []
};

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        history: [...state.history, `Incrementó a ${state.count + 1}`]
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        history: [...state.history, `Decrementó a ${state.count - 1}`]
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
        history: [...state.history, 'Reseteó a 0']
      };
    case 'SET_VALUE':
      return {
        ...state,
        count: action.payload,
        history: [...state.history, `Estableció a ${action.payload}`]
      };
    default:
      return state;
  }
}

function HookUseReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  const handleSetValue = (value) => {
    dispatch({ type: 'SET_VALUE', payload: value });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h2>useReducer Contador</h2>
              <Link to="/" className='btn btn-warning'>HOME</Link>
            </div>
            <div className="card-body">
              
              <div className="text-center mb-4">
                <h3 className="display-1 text-primary">{state.count}</h3>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-center mb-4">
                <button 
                  onClick={handleDecrement} 
                  className="btn btn-danger me-md-2"
                >
                  -1
                </button>
                <button 
                  onClick={handleReset} 
                  className="btn btn-warning me-md-2"
                >
                  Reset
                </button>
                <button 
                  onClick={handleIncrement} 
                  className="btn btn-success"
                >
                  +1
                </button>
              </div>

              <div className="text-center mb-4">
                <h5>Establecer valor:</h5>
                <div className="btn-group">
                  {[5, 10, 15].map(value => (
                    <button
                      key={value}
                      onClick={() => handleSetValue(value)}
                      className="btn btn-outline-primary"
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h5 className="text-center">Historial de acciones:</h5>
                <div className="list-group" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {state.history.length === 0 ? (
                    <div className="list-group-item text-center text-muted">
                      No hay acciones registradas
                    </div>
                  ) : (
                    state.history.map((action, index) => (
                      <div key={index} className="list-group-item small">
                        {action}
                      </div>
                    )).reverse()
                  )}
                </div>
              </div>

            </div>
            <div className="card-footer text-muted text-center">
              Total de acciones: {state.history.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HookUseReducer;