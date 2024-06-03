import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import Events from "./components/Events/Events";

function App() {
  return (
    <div className="App">
<div className="main-content">
<Header />
<Hero />\
<SearchForm />
<Events />
<Footer />
</div>
<Background />
    </div>
  );
}

export default App;
