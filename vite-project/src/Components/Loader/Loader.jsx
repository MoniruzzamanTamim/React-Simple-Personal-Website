import "./Loader.css";


const Loader = () => {
  return (
    <div className="loader-container">
      <h1 className="loader-text" style={{color:'#dc3545'}}>Food<span style={{color:'black'}}>Hub</span></h1>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;