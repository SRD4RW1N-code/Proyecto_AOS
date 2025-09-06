
import { Suspense, useState, useDeferredValue, use } from 'react';
import { Link } from 'react-router-dom';


export default function HookUseDeferredValue() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
      <div className="w-100" style={{maxWidth: 640}}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">useDeferredValue</h2>
          <Link to="/" className="btn btn-outline-primary">Home</Link>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="search" className="form-label fw-semibold">Buscar álbums</label>
              <input
                id="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="form-control"
                placeholder="Escribe para filtrar..."
              />
              <div className="form-text">Se usa useDeferredValue para diferir el render costoso.</div>
            </div>
            <Suspense fallback={<div className="text-center py-3"><div className="spinner-border text-primary" role="status" /><p className="mt-2 mb-0">Cargando resultados...</p></div>}>
              <SearchResults query={deferredQuery} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}




function SearchResults({ query }) {
  if (query === '') {
    return <p className="text-muted fst-italic">Escribe algo para empezar...</p>;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return <p className="text-danger">Sin coincidencias para <i>"{query}"</i></p>;
  }
  return (
    <ul className="list-group">
      {albums.map(album => (
        <li key={album.id} className="list-group-item d-flex justify-content-between align-items-center">
          <span>{album.title}</span>
          <span className="badge bg-primary rounded-pill">{album.year}</span>
        </li>
      ))}
    </ul>
  );
}




let cache = new Map();

 function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  if (url.startsWith('/search?q=')) {
    return await getSearchResults(url.slice('/search?q='.length));
  } else {
    throw Error('Not implemented');
  }
}

async function getSearchResults(query) {
  // Agrega un falso retraso para que se note la espera.
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  const allAlbums = [{
    id: 13,
    title: 'Let It Be',
    year: 1970
  }, {
    id: 12,
    title: 'Abbey Road',
    year: 1969
  }, {
    id: 11,
    title: 'Yellow Submarine',
    year: 1969
  }, {
    id: 10,
    title: 'The Beatles',
    year: 1968
  }, {
    id: 9,
    title: 'Magical Mystery Tour',
    year: 1967
  }, {
    id: 8,
    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
    year: 1967
  }, {
    id: 7,
    title: 'Revolver',
    year: 1966
  }, {
    id: 6,
    title: 'Rubber Soul',
    year: 1965
  }, {
    id: 5,
    title: 'Help!',
    year: 1965
  }, {
    id: 4,
    title: 'Beatles For Sale',
    year: 1964
  }, {
    id: 3,
    title: 'A Hard Day\'s Night',
    year: 1964
  }, {
    id: 2,
    title: 'With The Beatles',
    year: 1963
  }, {
    id: 1,
    title: 'Please Please Me',
    year: 1963
  }];

  const lowerQuery = query.trim().toLowerCase();
  return allAlbums.filter(album => {
    const lowerTitle = album.title.toLowerCase();
    return (
      lowerTitle.startsWith(lowerQuery) ||
      lowerTitle.indexOf(' ' + lowerQuery) !== -1
    )
  });
}
