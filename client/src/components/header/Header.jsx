import "./header.css"
import bg from "../../assets/b.jpg"
export default function Header() {
  return (
    <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={bg} alt="" />
    </div>
  )
}
