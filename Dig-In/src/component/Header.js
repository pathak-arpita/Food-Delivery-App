import NavBar from "./NavBar";
import BackgroundImg from "../assets/img/img.jpg";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImg})`, objectFit: "cover"}}
      className="header-container"
    >
      <NavBar />
    </div>
  );
};

export default Header;
