import React from "react";
import { Container, Content, Box, Descricao } from "./styles";
import Lottie from "react-lottie";
import Finance from "../../public/animations/rocket.json";

export default function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Finance,
    rendererSettings: {
      PreserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Content>
        <Box>
          <h1>Horários de atendimento</h1>
          <Descricao>
            <p>
              seg a sex de 08:00 às 18:00 <br />
              sáb de 08:00 às 16:00
            </p>
          </Descricao>
        </Box>

        <Box>
          <h1>Formas de pagamento</h1>
          <Descricao>
            <p>Aceitamos pix, picpay, transferência e dinheiro físico</p>
          </Descricao>
        </Box>

        <Box>
          <h1>CNPJ:</h1>
          <Descricao>
            <p>37.026.558/0001-56</p>
          </Descricao>
        </Box>
      </Content>
    </Container>
  );
}
