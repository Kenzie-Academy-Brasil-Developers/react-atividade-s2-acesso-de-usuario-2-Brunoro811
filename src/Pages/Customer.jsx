import "./pages.css";
import members from "./Bd";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Customer = () => {
  const { id } = useParams();
  const member = members.find((element) => element.id === id);
  return (
    <div className="Customer">
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};
export default Customer;
