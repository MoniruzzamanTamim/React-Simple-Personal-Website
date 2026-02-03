
import { useEffect, useState } from "react";
import MainHeader from './Components/Header/MainHeader'
import RoutesAll from './Routes/Routes'
import Loader from './Components/Loader/Loader'



function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 👉 Website load simulate (API / assets / components)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 seconds loader

    return () => clearTimeout(timer);
  }, []);

  // 🔁 Loader show
  if (loading) {
    return <Loader />;
  }


  return (
    <>
    <RoutesAll/>

    </>
  )
}

export default App
