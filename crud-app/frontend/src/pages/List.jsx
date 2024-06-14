import Page from "../components/Page";
import Navigation from "../components/Navigation";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../services/getUsers";
import { resetData, setData } from "../redux/dataSlice";
function List() {
  const filter = useSelector((state) => state.filter);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const initialState = {
    domain: "Domains",
    gender: "Genders",
    availability: "Availability",
    search: "",
  };

  useEffect(() => {
    dispatch(resetData());
    let reqBody = {};
    filter.domain === "Domains" ? null : (reqBody.domain = filter.domain);
    filter.gender === "Genders" ? null : (reqBody.gender = filter.gender);
    filter.availability === "Availability"
      ? null
      : (reqBody.availability = filter.availability);
    filter.search === "" ? null : (reqBody.search = filter.search);
    reqBody.page = page.number;

    getUsers(reqBody).then((res) => {
      dispatch(setData(res));
    });
  }, [page, filter]);
  return (
    <div className="flex flex-col  h-full w-[100vw]">
      <div className="w-full h-[10%] border-2 ">
        <Navigation />
      </div>

      <div className="w-full h-[70%] sm:h-[80%] border-4 overflow-y-scroll py-7 sm:py-10">
        <Page />
      </div>
      <div className="w-full h-[7%] border-4">
        <Pagination />
      </div>
    </div>
  );
}

export default List;
