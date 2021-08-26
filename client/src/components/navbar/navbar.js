import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbarcont">
        <div className="navbarleft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">WUPHF</span>
          </Link>
        </div>
        <div className="navbarcenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for freind ,post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarright">
          <div className="navbarlinks">
            <span className="navbarlink">HomePage</span>
            <span className="navbarlink">TimeLine</span>
          </div>
          <div className="navbaricons">
            <div className="navbaricon">
              <Person />
              <span className="navbariconbadge">2</span>
            </div>
            <div className="navbaricon">
              <Chat />
              <span className="navbariconbadge">2</span>
            </div>
            <div className="navbaricon">
              <Notifications />
              <span className="navbariconbadge">2</span>
            </div>
          </div>
          <img src="" alt="" srcset="" className="navbarimg" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
