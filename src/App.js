import { useEffect, useState } from 'react';
import "./App.css"
import {Layout}  from './containers';
import { Archive, Loader } from './components';
import {fetchFromAPI} from './utils/fetchFromAPI';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI();
        setData(data);
        
      } catch (error) {
        console.log('Error fetching data:',error);
      }
    };

    fetchData();
  }, []);

if (!data) return <Loader/>
  return ( 
    <>
      { loading 
      ? (<Loader/>) 
      : (
        
        <Routes>
          <Route path="/" element={<Layout data={data} />} />
          <Route path="/archive" element={<Archive data={data}/>} />
        </Routes>
      )
      }

     

    </>
   );
}

export default App;
