import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to='/NatPic'> Home </Link> | <Link to="/NatPic/favoritos"> Favoritos </Link>
    </nav>
  );
}
