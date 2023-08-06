// import Posts from "../../../sidebar/Sidebar"
// import Sidebar from "D:/Coding/Web Development/Bharat Intern/blog-website/src/posts/Posts.jsx"
import Sidebar from "D:/Coding/Web Development/Bharat Intern/client/src/components/sidebar/Sidebar.jsx";
import Posts from "D:/Coding/Web Development/Bharat Intern/client/src/components/posts/Posts.jsx";
import Header from "../../components/header/Header.jsx";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
