import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import Events from "./components/Events/Events";
import EventDetails from "./pages/EventDetails";
import Modal from "./components/Modal/Modal";

function App() {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const [showModal, setShowModal] = useState(false);

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
    console.log(categoryFilter);
  }, [categoryFilter]);

  useEffect(() => {
    // Filter events based on searchQuery, categoryFilter, cityFilter, and priceFilter
    console.log(searchQuery);
  
    const filtered = allEvents.filter((event) => {
      if (!event.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
  
      if (categoryFilter && categoryFilter !== "All" && event.category.toLowerCase() !== categoryFilter.toLowerCase()) {
        return false;
      }
  
      if (cityFilter && event.location.toLowerCase() !== cityFilter.toLowerCase()) {
        return false;
      }
  
      if (priceFilter && event.cost > parseInt(priceFilter)) {
        return false;
      }
  
      return true;
    });

    console.log(filtered);
    setFilteredEvents(filtered);
  }, [allEvents, searchQuery, categoryFilter, cityFilter, priceFilter]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <Header onShowModal={handleShowModal} />

          <Modal show={showModal} onClose={handleCloseModal}></Modal>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <SearchForm
                    setSearchQuery={setSearchQuery}
                    setCategoryFilter={handleCategoryFilter}
                    setCityFilter={setCityFilter}
                    setPriceFilter={setPriceFilter}
                  />
                   {filteredEvents.length > 0 ? (
                    <Events events={filteredEvents} />
                  ) : (
                    <div className="no-events">
                    <div className="no-events__card">
                    <p className="no-events__text">No events found</p>
                    </div>
                    </div>
                  )}
                </>
              }
            />
            <Route
              path="/events/:title"
              element={<EventDetails events={allEvents} />}
            />
          </Routes>
          <Footer />
        </div>
        <Background />
      </div>
    </Router>
  );
}

export default App;
