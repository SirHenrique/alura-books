import { styled } from "styled-components";

const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Botao = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgLivro = styled.img`
  width: 150px;
`;

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
  return (
    <Card>
      <div>
        <h3>{titulo}</h3>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} />
        <Botao>Saiba Mais</Botao>
      </div>
    </Card>
  );
}

export default CardRecomenda;
