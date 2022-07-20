import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding: 0 5rem;
  background: #474747;
  @media (max-width: 650px) {
    padding: 0 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 0px 3rem;
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0rem;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 30%;
  h1 {
    color: white;
    font-size: 1.3rem;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Descricao = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  p {
    color: white;
    font-size: 1rem;
    width: 100%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;
