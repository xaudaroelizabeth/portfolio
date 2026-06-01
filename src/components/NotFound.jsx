import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        padding: "5em 2em",
        textAlign: "center",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
}
