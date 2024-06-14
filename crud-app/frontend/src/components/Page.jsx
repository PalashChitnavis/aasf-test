import Card from "./Card";
import { useSelector } from "react-redux";
const Page = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="flex justify-center items-center flex-wrap gap-5 h-full  w-full">
      {data.users.length === 0
        ? "Please Wait ... "
        : data.users.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
    </div>
  );
};

export default Page;
