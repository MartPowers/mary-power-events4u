import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import Events from "./components/Events/Events";
import EventDetails from './pages/EventDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events/search");
        setAllEvents(response.data);
        setFilteredEvents(allEvents);
        console.log(response.data.image);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
    if (category === "All") {
      setFilteredEvents(allEvents); // Display all events if "All" is selected
    } else {
      const filtered = allEvents.filter(
        (event) => event.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredEvents(filtered);
    }
  };

  useEffect(() => {
    // Filter events based on searchQuery and categoryFilter
    const filtered = allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!categoryFilter ||
          event.category.toLowerCase() === categoryFilter.toLowerCase()) &&
        (!cityFilter ||
          event.location.toLowerCase() === cityFilter.toLowerCase()) &&
        (!priceFilter || event.cost <= parseInt(priceFilter))
    );
    setFilteredEvents(filtered);
  }, [allEvents, searchQuery, categoryFilter, cityFilter, priceFilter]);

  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <SearchForm
                  setSearchQuery={setSearchQuery}
                  setCategoryFilter={handleCategoryFilter}
                  setCityFilter={setCityFilter}
                  setPriceFilter={setPriceFilter}
                />
                <Events events={filteredEvents} />
              </>
            } />
           <Route path="/events/:title" element={<EventDetails events={allEvents} />} />
          </Routes>
          <Footer />
        </div>
        <Background />
      </div>
    </Router>
  );
}

export default App;
