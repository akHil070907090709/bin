import "./App.css";
import CarouselSection from "./components/carousel/CarouselSection";
import Header from "./components/Header/Header.jsx";
// import ReduxContent from "./pages/Redux/ReduxContent";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ReduxContent /> */}
      <CarouselSection />
    </div>
  );
}

export default App;
