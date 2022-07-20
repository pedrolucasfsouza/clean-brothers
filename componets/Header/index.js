import { Container, Content, Top, Menu } from "./styles";
import Image from "next/image";
import ContentHeader from "../ContentHeader";
import MenuMobile from "../MenuMobile";

export default function Header() {
  return (
    <Container>
      <Content>
        <MenuMobile></MenuMobile>

        <Image src="/logo.svg" width={530} height={160} />

        <Menu>
          <ul>
            <li>Home</li>
            <li>Sobre Nós</li>
            <li>Como Funciona</li>
            <li>Preços</li>
          </ul>
        </Menu>
      </Content>
    </Container>
  );
}
