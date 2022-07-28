import MainScreen from "./components/MainScreen/MainScreen";
import { app } from "./firebase";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <MainScreen />
    </div>
  );
}

export default App;
