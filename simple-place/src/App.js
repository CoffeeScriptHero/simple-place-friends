import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import { AppWrapper } from "./App-styles";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";

const App = () => {
  return (
    <AppWrapper>
      <ScrollArrow />
      <Header />
      <AppRoutes />
      <ConfirmationModal />
    </AppWrapper>
  );
};

export default App;
