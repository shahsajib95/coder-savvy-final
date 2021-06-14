const Preloader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="spinner-grow text-secondary" role="status"></div>
      <div className="spinner-grow text-success" role="status"></div>
      <div className="spinner-grow text-danger" role="status"></div>
      <div className="spinner-grow text-warning" role="status"></div>
      <div className="spinner-grow text-info" role="status"></div>
      <div className="spinner-grow text-light" role="status"></div>
      <div className="spinner-grow text-dark" role="status"></div>
    </div>
  );
};

export default Preloader;
