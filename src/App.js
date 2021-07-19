import "./App.css";
import BannerSection from "./components/BannerSection/BannerSection";
import Header from "./components/Header/Header.jsx";
// import ReduxContent from "./pages/Redux/ReduxContent";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ReduxContent /> */}
      <BannerSection />
    </div>
  );
}

export default App;
