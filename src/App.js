import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Preferences from "path/to/pages/Preferences";
import NotFound from "path/to/pages/NoyFound";
import Blog from "path/to/pages/Blog";
import BlogPost from "path/to/pages/BlogPost";

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/preferences">Preferences</StyledLink>
        <StyledLink to="*">NotFound</StyledLink>
        <StyledLink to="Blog">Blog</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={>BlogPost />} />
      </Routes>
    </div>
  );
};
