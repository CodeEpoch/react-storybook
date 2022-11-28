import logo from "./logo.svg";
import "./App.css";
import Banner from "./stories/Banner";

function App() {
  return (
    <div className="App">
      <Banner variant="danger">
        <p>This is an eg of a danger banner to display warnings.</p>
      </Banner>
    </div>
  );
}

export default App;
