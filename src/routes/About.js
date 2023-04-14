import AboutBg from "../assets/TimeToTravel.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style.css";

function About() {
  return (
    <>
      <Navbar />
      <section className="hero about container max-w-screen-lg mx-auto text-center pb-10">
        <div className="about-img">
          <img src={AboutBg} className="item-center" />
        </div>
        <div className="text-center">
          <h1 className="text-5xl mb-5 lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
            ABOUT OUR TRAVEL AGENCY
          </h1>
          <div>
            fact that a reader will be distracted by the readable content of a
            page when looking at it's layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters,
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default About;
