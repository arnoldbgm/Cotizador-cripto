import styled from "@emotion/styled";
const ResultadoStyled = styled.div`
  display: flex;
  color: #000;
  font-family: "Lato", sans-serif;
  background-color: #fd97faf8;
  border-radius: 8px;
  box-shadow: 1px solid #242424;
  padding: 15px;
  margin-top: 15px;
  gap: 2px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  width: 50%;
  height: 50%;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <ResultadoStyled>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />
      <div>
        <Precio>
          El precio es de <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24HRS <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualizacion <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </ResultadoStyled>
  );
};

export default Resultado;
