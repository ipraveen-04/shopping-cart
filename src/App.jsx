import Header from "./Header";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./CartList";
import Footer from "./Footer";
// import { clearAllItem } from "./redux/slice";
// import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <h1 className="mx-8">React Redux toolkit tutorials</h1>
      <button
        onClick={() => dispatch(clearAllItem())}
        className="bg-[#e63946] mx-8 text-white px-4 py-2 rounded-lg hover:bg-[#af2631] transition"
      >
        clear all Item
      </button> */}

        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
