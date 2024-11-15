import './Home.css';
import HomeBg from '../assets/HomeBg.jpg';

const Home = () => {
  return (
    <div className="relative">
      <img src={HomeBg} alt="Background" className="background-image" />
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-12">
        <h1 className="welcome-text">
          <span className="small">Welcome to</span><br />
          <span className="large">YakshaKatha</span><br />
          <span className="small">A Image to Text Description Platform</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
