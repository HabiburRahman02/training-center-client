import Features from "../../Features/Features";
import ProjectLeader from "../../ProjectLeader";
import Footer from "../../Sharred/Navbar/Footer/Footer";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Features></Features>
      <ProjectLeader></ProjectLeader>
      <Footer></Footer>
    </div>
  );
};

export default Home;