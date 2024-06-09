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
import ModalComplete from "./components/Modal/ModalComplete";

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
    // Filter events based on searchQuery and categoryFilter
    console.log(searchQuery);
    const filtered = allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!categoryFilter ||
          categoryFilter === "All" ||
          event.category.toLowerCase() === categoryFilter.toLowerCase()) &&
        (!cityFilter ||
          event.location.toLowerCase() === cityFilter.toLowerCase()) &&
        (!priceFilter || event.cost <= parseInt(priceFilter))
    );

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

          <Modal show={showModal} onClose={handleCloseModal}>
            {/* <form onSubmit={handleSubmit}>
              <div>
                <label>Event Title:</label>
                <input type="text" required />
              </div>
              <div>
                <label>Event Date:</label>
                <input type="date" required />
              </div>
              <div>
                <label>Event Location:</label>
                <input type="text" required />
              </div>
              <div>
                <label>Event Description:</label>
                <textarea required></textarea>
              </div>
              <button type="submit" className="button">
                Submit
              </button>
            </form> */}
          </Modal>

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
                  <Events events={filteredEvents} />
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
