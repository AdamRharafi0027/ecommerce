import "./Home.css";
import "./Responsive.css";
import homeImage from "../../../../public/image/home.png";
import {Stars} from 'react-bootstrap-icons'
import {Products} from "../index";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="bg-image">
          <Stars className="stars st1"/>
          <img src={homeImage} alt="image home" />
          <Stars className="stars st2"/>
        </div>
        <div className="home-content">
          <div className="home-texts">
            <h1>Upgrade Your Style with the Latest Trends!</h1>
            <p>
              Explore a curated collection of stylish, high-quality clothing
              designed to elevate your look. Whether you're into casual, chic,
              or bold fashion, we’ve got something just for you. Shop now and
              stay ahead of the trends!
            </p>
            <button>
              shop now
            </button>
          </div>
        </div>
      </section>
      <Products />
    </>
  );
};

export default Home;
