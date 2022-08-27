import React from "react";
import {
  Container,
  Content,
  Text,
  ContainerBoxers,
  Box,
  Boxitem,
  BoxBlue,
} from "./styles";
import Image from "next/image";

export default function ComoFunciona() {
  return (
    <Container>
      <Content>
        <Text>
          <h1>UM POUCO DO NOSSO DIA A DIA...</h1>
        </Text>
        <ContainerBoxers>
          <Box>
            <Boxitem>
              <Image src="/fred.png" width={350} height={320} />
            </Boxitem>
          </Box>
          <Box>
            <Boxitem>
              <Image src="/trabalho2.png" width={350} height={320} />
            </Boxitem>
          </Box>
          <Box>
            <Boxitem>
              <Image src="/trabalho3.png" width={350} height={320} />
            </Boxitem>
          </Box>
        </ContainerBoxers>
      </Content>
    </Container>
  );
}
