import React, { useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';

let listeners = [];
let counter = 0;

const counterStore = {
  getState: () => counter,
  
  subscribe: (listener) => {
    listeners.push(listener);
    return () => listeners = listeners.filter(l => l !== listener);
  },
  
  increment: () => {
    counter++;
    listeners.forEach(listener => listener());
  },
  
  decrement: () => {
    counter--;
    listeners.forEach(listener => listener());
  }
};

function UseSyncExternalStore() {
  const count = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getState
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-header bg-info text-white">
              <h4>useSyncExternalStore</h4>
              <Link to="/" className='btn btn-warning'>HOME</Link>
            </div>
            
            <div className="card-body">
              <h1 className="display-2">{count}</h1>
              <p>Contador desde store externo</p>
              
              <div className="d-flex gap-2 justify-content-center">
                <button 
                  onClick={counterStore.decrement}
                  className="btn btn-danger"
                >
                  -1
                </button>
                <button 
                  onClick={counterStore.increment}
                  className="btn btn-success"
                >
                  +1
                </button>
              </div>
            </div>

            <div className="card-footer text-muted">
              <small>
                Sincronizado con store externo usando useSyncExternalStore
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseSyncExternalStore;