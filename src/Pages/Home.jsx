import members from "./Bd.js";
import { Link } from "react-router-dom";
import "./pages.css";
const Home = () => {
  return (
    <div className="Home">
      <h1>Lista de Pessoas e Empresas</h1>
      <ul className="List-Home">
        {members.map((element) =>
          element.type === "pf" ? (
            <li key={element.id}>
              <Link to={`/Customer/${element.id}`}>{element.name} </Link>
            </li>
          ) : (
            <li key={element.id}>
              <Link to={`/Company/${element.id}`}>{element.name} </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default Home;
