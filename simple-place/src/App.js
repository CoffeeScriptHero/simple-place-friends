import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import { AppWrapper } from "./App-styles";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <AppRoutes />
      <ConfirmationModal />
    </AppWrapper>
  );
};

export default App;
