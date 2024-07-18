import GlobalStyles from "@styles/globalStyles";
import { PageRouter } from "@utils/routerUtils";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <GlobalStyles />
      <PageRouter />
    </HelmetProvider>
  );
}

export default App;
