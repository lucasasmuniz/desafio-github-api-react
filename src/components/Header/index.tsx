import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <h2>Github API</h2>
        </Link>
      </nav>
    </header>
  );
}
