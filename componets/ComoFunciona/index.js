import React from "react";
import { Container, Content, Text, ContainerBoxers, Box } from "./styles";
import Image from "next/image";
import { BiChair, BiBed } from "react-icons/bi";
import { FaCouch } from "react-icons/fa";
import { TbBabyCarriage } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";
import { GiBed } from "react-icons/gi"

export default function ComoFunciona() {
  return (
    <Container>
      <Content>
        <Text>
          <h1>SERVIÇOS OFERECIDOS PELA CLEAN BROTHERS:</h1>
        </Text>
        <ContainerBoxers>
          <Box>
            <BiChair size="5em"color="#454545"></BiChair>
            <h1>HIGIENIZAÇÃO DE CADEIRAS</h1>
          </Box>
          <Box>
            <FaCouch size="5em"color="#454545"></FaCouch>
            <h1>HIGIENIZAÇÃO DE SOFÁ</h1>
          </Box>
          <Box>
            <TbBabyCarriage size="5em" color="#454545"></TbBabyCarriage>
            <h1>HIGIENIZAÇÃO DE CARRINHO DE BEBÊ</h1>
          </Box>
          <Box>
            <GiBed size="5em"color="#454545"></GiBed>
            <h1>HIGIENIZAÇÃO DE CAMA / COLCHÃO</h1>
          </Box>
          <Box>
            <AiFillCar size="5em"color="#454545"></AiFillCar>
            <h1>HIGIENIZAÇÃO ESTOFADO AUTOMOTIVO</h1>
          </Box>
        </ContainerBoxers>
      </Content>
    </Container>
  );
}
