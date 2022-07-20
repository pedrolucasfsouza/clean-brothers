import { Container, Content, Text, SmartPhone } from "./styles";
import Image from "next/image";

export default function Header() {
  return (
    <Container>
      <Content>
        <Text>
          <h1>Clean Brothers</h1>
          <p>
            A Clean Brothers, trabalha com higienização e impermeabilização de
            estofados em geral. Nossa equipe preparada e treinada vai até o
            local solicitado, e faz a higienização de sofás, cadeiras, interior
            de veículos, tapetes, poltronas, colchões, bebê conforto, carrinho
            de bebê, e etc.
          </p>
          <a href="http://app.boleta.ai/register">Começar Agora</a>
        </Text>
        <SmartPhone>
          <Image src="/iphone13.png" width={480} height={470} />
        </SmartPhone>
      </Content>
    </Container>
  );
}
