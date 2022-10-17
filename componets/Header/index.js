import Image from "next/image";
import MenuMobile from "../MenuMobile";
import { Container, Content, Menu } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <MenuMobile></MenuMobile>

        <Image src="/logo.svg" width={530} height={160} />

        <Menu></Menu>
      </Content>
    </Container>
  );
}
