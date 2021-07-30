import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
const Navbar = () => {
  return (
    <>
      <div className="navbarcont">
        <div className="navbarleft">
          <span className="logo">WUPHF</span>
        </div>
        <div className="navbarcenter">
          <div className="searchbar">
            <Search />
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
