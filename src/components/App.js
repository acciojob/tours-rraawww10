import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const API_URL = "https://example.com/tours"; // Replace with actual API URL

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return (
      <main id="main">
        <Loading />
      </main>
    );
  }

  return (
    <main id="main">
      {tours.length > 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div id="no-tours">
          <h2>No Tours Left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      )}
    </main>
  );
};

export default App;
