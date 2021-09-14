import "./pages.css";
import members from "./Bd";
import { useParams } from "react-router";

import { Link } from "react-router-dom";

const Company = () => {
  const { id } = useParams();
  const member = members.find((element) => element.id === id);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome: {member && member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};
export default Company;
