import { Link, useParams } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 555-123-4567",
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 555-234-5678",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+1 555-345-6789",
    city: "Chicago",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@example.com",
    phone: "+1 555-456-7890",
    city: "Houston",
  },
];

function UserDetail() {
  const { id } = useParams();

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return (
      <section className="page">
        <div className="card">
          <h1>User Not Found</h1>

          <p>
            Sorry, the user with ID {id} does not exist.
          </p>

          <Link to="/users" className="btn primary">
            ← Back to Users
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="user-detail-card">
        <div className="large-avatar">
          {user.name.charAt(0)}
        </div>

        <h1>{user.name}</h1>

        <div className="user-info">
          <div>
            <strong>User ID</strong>
            <p>{user.id}</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>{user.email}</p>
          </div>

          <div>
            <strong>Phone</strong>
            <p>{user.phone}</p>
          </div>

          <div>
            <strong>City</strong>
            <p>{user.city}</p>
          </div>
        </div>

        <Link to="/users" className="btn primary">
          Go Back
        </Link>
      </div>
    </section>
  );
}

export default UserDetail;
