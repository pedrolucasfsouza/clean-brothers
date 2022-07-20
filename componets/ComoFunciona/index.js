import React from "react";
import { Container, Content, Text, ContainerBoxers, Box } from "./styles";
import Image from "next/image";
import { BiChair, BiBed } from "react-icons/bi";
import { FaCouch } from "react-icons/fa";
import { TbBabyCarriage } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";

export default function ComoFunciona() {
  return (
    <Container>
      <Content>
        <Text>
          <h1>SERVIÇOS OFERECIDOS PELA CLEAN BROTHERS:</h1>
        </Text>
        <ContainerBoxers>
          <Box>
            <BiChair size="5em"></BiChair>
            <h1>HIGIENIZAÇÃO DE SOFÁ</h1>
          </Box>
          <Box>
            <FaCouch size="5em"></FaCouch>
            <h1>HIGIENIZAÇÃO DE SOFÁ</h1>
          </Box>
          <Box>
            <TbBabyCarriage size="5em"></TbBabyCarriage>
            <h1>HIGIENIZAÇÃO DE SOFÁ</h1>
          </Box>
          <Box>
            <BiBed size="5em"></BiBed>
            <h1>HIGIENIZAÇÃO DE SOFÁ</h1>
          </Box>
          <Box>
            <AiFillCar size="5em"></AiFillCar>
            <h1>HIGIENIZAÇÃO DE SOFÁ</h1>
          </Box>
        </ContainerBoxers>
      </Content>
    </Container>
  );
}
