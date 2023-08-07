import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcao><p>{texto}</p></Opcao>
        </Link>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
