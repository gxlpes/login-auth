import AllRoutes from "./routes/AllRoutes";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";

export const Firebase = initializeApp(config.firebaseConfig);

function App() {
  return <AllRoutes />;
}

export default App;
