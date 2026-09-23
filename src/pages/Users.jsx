import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@example.com",
  },
];

function Users() {
  return (
    <section className="page">
      <h1>Users</h1>

      <p className="page-description">
      </p>

      <div className="users-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <Link to={`/users/${user.id}`} className="btn primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;
