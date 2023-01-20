import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let isHomePage = window.location.pathname == "/";
  const navigate = useNavigate();
  const clickHandler = (e) => {
    isHomePage ? e.preventDefault() : navigate(-1);
  };
  return (
    <div className="header" onClick={(e) => clickHandler(e)}>
      <div className={"headerTitle" + (isHomePage ? "" : "-clickable")}>
        <span className="headerTitleLarge">
          {isHomePage ? "News" : "Back to all news"}
        </span>
      </div>
    </div>
  );
}
