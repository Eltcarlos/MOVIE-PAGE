import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="bg-main flex flex-col justify-center items-center h-screen text-white">
      <BiHomeAlt size={120} />
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-4">Sorry, the page you're looking for cannot be found.</p>
      <Link to="/home">
        <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go back to home</span>
      </Link>
    </div>
  );
};

export default NotFound;
