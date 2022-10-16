import React from "react";
import Lottie from "react-lottie";
import Finance from "../../public/animations/colchao.json";
import { AnimationContainer, Container, Content, Text } from "./styles";

export default function NextLevel() {
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
        <Text>
          <h2>Clean Brothers</h2>
          <p>
            A Clean Brothers, trabalha com higienização e impermeabilização de
            estofados em geral. Nossa equipe preparada e treinada vai até o
            local solicitado, e faz a higienização de sofás, cadeiras, interior
            de veículos, tapetes, poltronas, colchões, bebê conforto, carrinho
            de bebê, e etc.
          </p>
          <a href="https://api.whatsapp.com/send?phone=5527998388435">
            Agendar Agora
          </a>
        </Text>
        <AnimationContainer>
          <Lottie options={defaultOptions} height="100%" width="80%" />
        </AnimationContainer>
      </Content>
    </Container>
  );
}
