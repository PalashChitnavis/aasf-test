import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="w-full h-full">
      {items.length === 0 ? (
        <div className="flex gap-5 justify-center items-center w-full h-full text-6xl flex-col">
          Cart is Empty
          <Link to="/">
            <FaClipboardList
              size={50}
              className="hover:scale-105 transition-all"
            />
          </Link>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <caption className="flex h-10 justify-center items-center text-2xl font-bold">
            Cart Summary
          </caption>
          <table className="">
            <thead className="">
              <tr className="border-2 border-black">
                <th>Sr.</th>
                <th>ID</th>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Domain</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={item.id} className="border-2 border-black">
                    <td>{index + 1}</td>
                    <td className="font-bold">{item.id}</td>
                    <td className="flex sm:justify-center items-center">
                      <img
                        src={item.avatar}
                        alt="avatar"
                        className="border-2 border-gray-500 rounded-full"
                      />
                    </td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td className="text-[14px]">{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.domain}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
