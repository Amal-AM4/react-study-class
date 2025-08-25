import axios from 'axios';
import './App.scss'
import { useEffect, useState } from 'react';


function App() {

  // const [url, setUrl] = useState('')
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);      // error handling
  const [loading, setLoading] = useState(true);  // loading state


// useEffect(() => { ... }, [dependencies])
// It runs the function inside whenever the component renders.
// But when it runs depends on the dependencies you put in that array.


  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res) => {
      setProducts(res.data)
      setLoading(false);   // 👈 important!
    })
    .catch((err) => {
      setError(err.message)
      setLoading(false);
      console.log(error);
    })
  }, []) // ✅ runs only once when component mounts

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;


  return (
    <div className="App">
      
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title} - {p.price}</li>
        ))}
      </ul>


    </div>
  );
}

export default App;
