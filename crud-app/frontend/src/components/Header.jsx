import { useDispatch, useSelector } from "react-redux";
import { resetAll } from "../redux/filterSlice";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import { FaClipboardList } from "react-icons/fa";
import { createTeam } from "../services/createTeam";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleReset = () => {
    dispatch(resetAll());
  };
  const handleClear = () => {
    dispatch(clearCart());
  };
  const handleTeam = () => {
    if (cart.items.length === 0) {
      alert("Add Users in Team");
      return;
    }
    createTeam(cart.items);
  };
  return (
    <div className="w-full h-full flex justify-end items-center gap-5 px-5">
      <Link to="/">
        <FaClipboardList size={30} className="hover:scale-105 transition-all" />
      </Link>
      <div
        onClick={handleReset}
        className="border-2 text-[10px] sm:text-lg flex justify-center items-center border-red-500 h-[30px]  px-2 rounded-xl cursor-pointer text-white bg-red-500 hover:scale-105 transition-all"
      >
        Reset Filters
      </div>
      <div
        onClick={handleClear}
        className="border-2 border-red-500 sm:text-lg text-[10px] flex justify-center items-center h-[30px]  px-2 rounded-xl cursor-pointer text-white bg-red-500 hover:scale-105 transition-all"
      >
        Clear Cart
      </div>
      <div
        onClick={handleTeam}
        className="border-2 text-[10px] sm:text-lg flex justify-center items-center border-green-500 h-[30px]  px-2 rounded-xl cursor-pointer text-white bg-green-500 hover:scale-105 transition-all"
      >
        Create Team
      </div>
      <Link to="/cart">
        <div className="relative h-full w-[52px] flex items-center cursor-pointer hover:scale-125 transition-all">
          <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-blue-500 text-white rounded-full flex justify-center items-center">
            {cart.items.length}
          </div>
          <div className="relative z-10">
            <IoCart size={30} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
