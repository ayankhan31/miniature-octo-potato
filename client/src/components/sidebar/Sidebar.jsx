import "./sidebar.css"
import Ayan from "../../assets/Ayan.jpg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
export default function Posts() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>
        {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    })
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={Ayan} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, dolores. Autem fugiat itaque molestias omnis odio ab molestiae</p>
        </div>  
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            {cats.map((c)=>(
                <Link className="link" to={`/?cat=${c.name}`}>
                <li className="sidebarListItem">{c.name}</li>
                </Link>
            ))}
                
            </ul>
        </div> 
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="fb sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="x sidebarIcon fa-brands fa-x-twitter"></i>
            <i className="pinterest sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="insta sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div> 
    </div>
  )
}
