import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Ayan1 from "../../assets/Ayan1.jpg"
export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <div className="settingsUpdateTitle">Update Your Account</div>
            <div className="settingsDeleteTitle">Delete Account</div>
          </div>
          <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img src={Ayan1} alt="" />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon fa-regular fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
              </div>
            <label >Username</label>
            <input type="text" placeholder="Ayan" />
            <label >Email</label>
            <input type="email" placeholder="ayan@gmail.com" />
            <label >Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
