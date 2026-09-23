import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page home-page">
      <div className="hero">
        <h1>React User App </h1>

        <p>
          This is a multi-page React application built using React Router.
        </p>

        <div className="button-group">
          <Link to="/about" className="btn primary">
            About the App
          </Link>

          <Link to="/users" className="btn secondary">
            View Users
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
