/* eslint-disable react-hooks/exhaustive-deps */
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAvailability,
  updateDomain,
  updateGender,
  updateSearch,
} from "../redux/filterSlice";
import { setPage } from "../redux/pageSlice";
const Navigation = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filters = {
    domain: [
      "Sales",
      "Finance",
      "Marketing",
      "IT",
      "Management",
      "UI Designing",
      "Business Development",
    ],
    genders: [
      "Female",
      "Male",
      "Agender",
      "Bigender",
      "Polygender",
      "Non-binary",
      "Genderfluid",
      "Genderqueer",
    ],
    available: ["Available", "Not Available"],
  };

  function handleClick(e, type) {
    if (type === "Domains") {
      dispatch(updateDomain(e.target.value));
    } else if (type === "Genders") {
      dispatch(updateGender(e.target.value));
    } else if (type === "Availabilty") {
      dispatch(updateAvailability(e.target.value));
    } else {
      dispatch(updateSearch(e.target.value));
    }
    dispatch(setPage(0));
  }

  return (
    <div className="flex flex-wrap w-full items-center justify-around gap-1 mt-1">
      <select
        name="domain"
        id="domain"
        className="border-2 border-black w-[150px] sm:w-[200px] h-[30px] sm:h-[50px] rounded-xl indent-2 bg-blue-300"
        value={filter.domain}
        onChange={(e) => handleClick(e, "Domains")}
      >
        <option value="Domains" selected hidden>
          Domains
        </option>
        {filters &&
          filters.domain.map((domain) => {
            return (
              <option value={domain} key={domain}>
                {domain}
              </option>
            );
          })}
      </select>
      <select
        name="gender"
        id="gender"
        className="border-2 border-black w-[150px] sm:w-[200px] h-[30px] sm:h-[50px] rounded-xl indent-2 bg-blue-300 "
        value={filter.gender}
        onChange={(e) => handleClick(e, "Genders")}
      >
        <option value="Genders" selected hidden>
          Genders
        </option>
        {filters &&
          filters.genders.map((gender) => {
            return (
              <option value={gender} key={gender}>
                {gender}
              </option>
            );
          })}
      </select>
      <select
        name="available"
        id="available"
        className="border-2 border-black w-[150px] sm:w-[200px] h-[30px] sm:h-[50px] rounded-xl indent-2 bg-blue-300 "
        value={filter.availability}
        onChange={(e) => handleClick(e, "Availabilty")}
      >
        <option value="Availabilty" selected hidden>
          Availability
        </option>
        {filters &&
          filters.available.map((available) => {
            return (
              <option value={available} key={available}>
                {available}
              </option>
            );
          })}
      </select>
      <div className="flex justify-center items-center w-[150px] sm:w-[200px] h-[30px] sm:h-[50px] ">
        <input
          type="text"
          name="Search"
          id="Search"
          className="border-2 border-black rounded-s-xl indent-2 w-[130px] sm:w-[150px] h-[30px] sm:h-[50px]"
          placeholder="Search ..."
          value={filter.search}
          onChange={(e) => handleClick(e, "Search")}
        />
        <MdOutlineSearch
          className="border-2 border-black rounded-e-xl  hover:cursor-pointer hover:bg-blue-500 hover:text-white transition-all h-[30px] sm:h-[50px]"
          size={30}
        />
      </div>
    </div>
  );
};

export default Navigation;
