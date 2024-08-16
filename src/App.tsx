import { PageRouter } from "@utils/routerUtils";
import { HelmetProvider } from "react-helmet-async";
import "./App.scss";

const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <PageRouter />
    </HelmetProvider>
  );
}

export default App;
