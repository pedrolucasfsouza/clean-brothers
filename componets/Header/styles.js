import styled from "styled-components";

export const Container = styled.div`
  background: #f0f2f5;
  display: flex;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  height: 300px;
  @media (max-width: 650px) {
    height: auto;
    padding: 1rem 2rem;
  }
  align-items: flex-start;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: yellow;
`;

export const Menu = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  list-style: none;
  color: #5674c9;
  @media (max-width: 650px) {
    display: none;
  }
  ul li {
    display: inline-block;
  }
  li {
    margin: 0px 1.5rem 0px 0px;
    cursor: pointer;
  }
  li a {
    text-decoration: underline;
    color: white;
  }
  li:hover {
    text-decoration: underline;
  }
`;
