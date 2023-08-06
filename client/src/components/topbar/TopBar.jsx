import "./TopBar.css"
import Ayan1 from "../../assets/Ayan1.jpg"
import { Link } from "react-router-dom";
export default function TopBar() {
    const user = false;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fb fa-brands fa-square-facebook"></i>
            <i className="topIcon x fa-brands fa-x-twitter"></i>
            <i className="topIcon pinterest fa-brands fa-square-pinterest"></i>
            <i className="topIcon insta fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/about">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/contact">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/logout">
                    {user && "LOGOUT"}
                </Link>
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img className="topImg" src={Ayan1} alt="Ayan" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                        
                        
                    </ul>
                )
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
