import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
