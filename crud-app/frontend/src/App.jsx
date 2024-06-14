import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Cart from "./pages/Cart";
import Header from "./components/Header";
function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      <BrowserRouter>
        <div className="w-full h-[7%] border-4">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-[full] h-[93%]">
                <List />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div className="w-[full] h-[93%]">
                <Cart />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
