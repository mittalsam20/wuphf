import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";

import "./home.css";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="homecont">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Home;
