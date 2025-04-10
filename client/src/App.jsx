import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Eager load critical components
import Header from "./components/Header";

// Lazy load non-critical components/pages
const SignUp = lazy(() => import("./pages/SignUp"));
const Signin = lazy(() => import("./pages/Signin"));
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const PostPage = lazy(() => import("./pages/PostPage"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const UpdatePost = lazy(() => import("./pages/UpdatePost"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const OnlyAdminPrivateRoute = lazy(() => import("./components/OnlyAdminPrivateRoute"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Contact = lazy(() => import("./pages/Contact"));


function App() {


  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privecy" element={<PrivacyPolicy />} />
          <Route path="/termsandcondition" element={<TermsConditions />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
          
        </Route>
      </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
