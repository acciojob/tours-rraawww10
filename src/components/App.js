import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("your-api-url-here")
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      });
  }, []);

  const handleDeleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) return <Loading />;

return (
    <div id="main" className="container">
      {tours.length === 0 ? (
        <div>
          <h2>No tours left</h2>
          <button onClick={() => setLoading(true)}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} onDelete={handleDeleteTour} />
      )}
    </div>
  );

export default App;
