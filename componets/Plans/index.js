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
          <h1>ANTES E DEPOIS</h1>
        </Text>
        <ContainerBoxers>
          <Box>
            <Boxitem>
              <h1>Antes</h1>
              <Image src="/colchao-antes.png" width={250} height={300} />
            </Boxitem>

            <Boxitem>
              <h1>Depois</h1>
              <Image src="/colchao-depois.png" width={250} height={300} />
            </Boxitem>
          </Box>
          <Box>
            <Boxitem>
              <h1>Antes</h1>
              <Image src="/bebe-antes.png" width={250} height={300} />
            </Boxitem>

            <Boxitem>
              <h1>Depois</h1>
              <Image src="/bebe-depois.png" width={250} height={300} />
            </Boxitem>
          </Box>
          <Box>
            <Boxitem>
              <h1>Antes</h1>
              <Image src="/cadeira-antes.png" width={250} height={300} />
            </Boxitem>

            <Boxitem>
              <h1>Depois</h1>
              <Image src="/cadeira-depois.png" width={250} height={300} />
            </Boxitem>
          </Box>
        </ContainerBoxers>
      </Content>
    </Container>
  );
}
