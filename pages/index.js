import Head from "next/head";
import Header from "../componets/Header/index";
import NextLevel from "../componets/NextLevel/index";
import ComoFunciona from "../componets/ComoFunciona/index";
import Plans from "../componets/Plans/index";
import Footer from "../componets/Footer/index";
import Fotos from "../componets/Fotos/index";
import Clientes1 from "../componets/Clientes/index";

import { Container } from "../componets/styles";

import { GlobalStyle } from "../styles/global.js";

export default function Home() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div className="container">
        <Head>
          <title>
            Clean Brothers - Higienização de sofa Vila Velha, Serra e Grande
            Vitória.
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <a
            className="whatsapp-link"
            href="https://api.whatsapp.com/send?phone=5527992964913"
            target="_blank"
          >
            <i className="fa fa-whatsapp"></i>
            <p>Falar no Whatsapp</p>
          </a>
        </Container>
        <Header></Header>
        <NextLevel></NextLevel>
        <ComoFunciona></ComoFunciona>
        <Clientes1></Clientes1>
        <Plans></Plans>
        <Fotos></Fotos>

        <Footer></Footer>
      </div>
    </>
  );
}
