import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import Events from "./components/Events/Events";
import axios from 'axios';
import React, { useState, useEffect } from "react";

function App() {
  
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events/search');
        setEvents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

    // Filter events based on search query
    const filteredEvents = events.filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="App">
<div className="main-content">
<Header />
<Hero />\
<SearchForm setSearchQuery={setSearchQuery}/>
<Events events={filteredEvents}/>
<Footer />
</div>
<Background />
    </div>
  );
}

export default App;
