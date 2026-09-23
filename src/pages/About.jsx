import { Link } from "react-router-dom";

function About() {
  return (
    <section className="page">
      <div className="card">
        <h1>About</h1>
<p>
        This includes a Home page, About page, Users list, and individual User
          Detail pages.
        </p>


        <Link to="/" className="btn primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default About;
