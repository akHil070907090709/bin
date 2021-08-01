import "./App.css";
import CardsSection from "./components/cards/CardsSection";
import CarouselSection from "./components/carousel/CarouselSection";
import Header from "./components/Header/Header.jsx";
import TaglineSection from "./components/Tagline/TaglineSection";
// import ReduxContent from "./pages/Redux/ReduxContent";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ReduxContent /> */}
      <CarouselSection />
      <TaglineSection />
      <CardsSection />
    </div>
  );
}

export default App;
