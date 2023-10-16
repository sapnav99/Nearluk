import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Video from "../components/video/video";
import Courses from "../components/courses/Courses";
import Books from "../components/books/Books";
import Blog from "../components/blog/Blog";
import Groups from "../components/groups/Groups";
import Topnavbar from "../components/topnavbar/Topnavbar";
import Login1 from "../pages/auth/login/Login1";
import Signup from "../pages/auth/signup1/Signup";
import UserProfile from "../pages/auth/profile/UserProfile";
import LandingPage from "../landingPage/LandingPage";
import PropertyDetaing from "../pages/propertydetailingpage/PropertyDetailing";

import { useSelector } from "react-redux";
import HeaderBeforeLogin from "../components/header/Header1";
import SearchResult from "../landingPage/navigationPages/SearchResultPage";

export default function AppRoutes() {
  const isLoggedIn = useSelector(
    (state: any) => state?.loginReducer?.isLoggedIn
  );
  console.log("this is for login ==>", isLoggedIn);
  const UnAuthRoutes = () => {
    return (
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/searchresult/" element={<SearchResult />} />
      </Routes>
    );
  };

  const AuthRoutes = () => {
    return (
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/video" element={<Video />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/proprtydetail/:id" element={<PropertyDetaing />} />
      </Routes>
    );
  };

  return (
    <BrowserRouter>
    {isLoggedIn? <Header/>:<HeaderBeforeLogin />}
      

      <Topnavbar />

      {isLoggedIn ? <AuthRoutes /> : <UnAuthRoutes />}

      <Footer />
    </BrowserRouter>
  );
}
