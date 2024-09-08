import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <div className="App font-nunito-eb">
        {/* Background container */}
        <div className="fixed inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen">
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
