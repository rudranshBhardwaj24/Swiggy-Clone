import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>This is our about us page</h1>
      <p>We are making a Swiggy Clone</p>
      <Outlet />
    </div>
  );
};

export default About;
