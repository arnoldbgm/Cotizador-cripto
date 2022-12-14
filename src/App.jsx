import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spiner from "./components/Spiner";

// El style component se define fuera del componente
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const App = () => {
  const [resultado, setResultado] = useState({});
  const [monedas, setMonedas] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCriptomoneda = async (moneda, criptomoneda) => {
        setCargando(true);
        setResultado({});

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const response = await fetch(url);
        const data = await response.json();
        setResultado(data.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      };
      cotizarCriptomoneda(monedas.moneda, monedas.criptomoneda);
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagenes criptomonedas" />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spiner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  );
};

export default App;
