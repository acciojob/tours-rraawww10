import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Tours from "../components/Tours";

const API_URL = "https://mock-api-url.com/tours"; // Replace with the actual API

function App() {
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
    return <Loading />;
  }

  return (
    <main>
      {tours.length === 0 ? (
        <div className="empty-state">
          <h2>No tours left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  );
}

export default App;
