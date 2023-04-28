import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="title-container">
        <h3>The wait for</h3>
        <h1 className="main-heading">Event Name</h1>
        <h3>is over.</h3>
        <Link to="/register">
          <button className="home-btn">Register Now</button>
        </Link>
        <p>To book your spot</p>
      </div>
      {/* <div className="img-container">
        <h1>img</h1>
      </div> */}
    </main>
  );
};

export default Home;
