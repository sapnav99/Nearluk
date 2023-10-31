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
import PostProperty from "../pages/PostProperty/PostProperty";
import NearU from "../pages/Near-U/NearU";
import TermsandConditions from "../pages/TermsandCondition/TermsandConditions";
import PrivacyandPolicy from "../pages/PrivacyandPolicy/PrivacyandPolicy";


import { useSelector } from "react-redux";
import HeaderBeforeLogin from "../components/header/Header1";
import SearchResult from "../landingPage/navigationPages/searchfilters/SearchResultPage";
import Viewall from "../landingPage/navigationPages/viewallpage/ViewallPage";

export default function AppRoutes() {
  const isLoggedIn = useSelector(
    (state: any) => state?.loginReducer?.isLoggedIn
  );

  const UnAuthRoutes = () => {
    return (
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/viewall" element={<Viewall />} />
        <Route path="/proprtydetail/:id" element={<PropertyDetaing />} />
        <Route path="/termsandconditions" element={<TermsandConditions/>} />
        <Route path="/privacyandpolicy" element={<PrivacyandPolicy/>} />
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
        <Route path="/nearu" element={<NearU />} />
        <Route path="/postproperty" element={<PostProperty />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/privacyandpolicy" element={<PrivacyandPolicy />} />
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
