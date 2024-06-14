/* eslint-disable react/prop-types */
import {
  MdDriveFileRenameOutline,
  MdEmail,
  MdDomain,
  MdEventAvailable,
} from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsGenderTrans } from "react-icons/bs";
import { useEffect, useState } from "react";
import { addItem, removeItem } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Card = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const [selected, setSelected] = useState(
    !cart.items.some((i) => i.id === item.id)
  );
  const disabled =
    selected &&
    (!item.available || cart.domains.some((domain) => domain === item.domain));
  const dispatch = useDispatch();
  function handleClick() {
    setSelected(!selected);
    selected
      ? dispatch(addItem({ item: item, domain: item.domain }))
      : dispatch(removeItem({ item: item, domain: item.domain }));
  }

  useEffect(() => {
    setSelected(!cart.items.some((i) => i.id === item.id));
  }, [cart]);

  return (
    <div
      className={`h-[40%] w-[45%] sm:h-1/2 sm:w-[22%] border-2 flex flex-col justify-evenly border-black bg-[#e1f8fd] hover:scale-105 transition-all rounded-xl font-mono cursor-pointer overflow-y-auto ${
        disabled ? "bg-slate-400 opacity-50 cursor-no-drop" : ""
      }`}
      onClick={disabled ? null : handleClick}
    >
      <div className="w-full flex justify-between p-1">
        {!selected ? (
          <div className="border-2 border-black rounded-3xl flex bg-red-500 justify-center items-center hover:scale-105 transition-all">
            <FaRegTrashAlt size={30} className="fill-gray-200" />
          </div>
        ) : (
          <div className="text-xl pl-2 text-red-500">{item.id}</div>
        )}
        <img
          src={item.avatar}
          alt="avatar"
          className="border-2 border-black rounded-[50%]"
        />
      </div>
      <div className="w-full flex justify-center items-center gap-1 sm:text-2xl flex-wrap">
        <MdDriveFileRenameOutline />
        {item.first_name + " " + item.last_name}
      </div>
      <div className="w-full flex-wrap flex justify-center items-center gap-1 text-[11px] sm:text-[18px]">
        <MdEmail />
        {item.email}
      </div>
      <div className="w-full flex text-[12px] sm:text-[18px]">
        <div className="w-full flex justify-center items-center gap-1">
          <BsGenderTrans />
          {item.gender}
        </div>
        <div className="w-full flex justify-center items-center gap-1">
          <MdDomain />
          {item.domain}
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-1 ">
        <MdEventAvailable />
        <div
          className={`${item.available ? "text-green-800" : "text-red-500"}`}
        >
          {item.available ? "Available" : "Not Available"}
        </div>
      </div>
    </div>
  );
};

export default Card;
