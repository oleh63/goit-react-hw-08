import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import PhoneBook from "./components/PhoneBook/PhoneBook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contacts" element={<PhoneBook />} />
      </Routes>
    </>
  );
}

export default App;
