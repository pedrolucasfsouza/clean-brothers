import styled from "styled-components";

export const Container = styled.div`
  margin: -10px;
  .whatsapp-link {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 1px 1px 2px #888;
    z-index: 1000;
    transition: 0.5s;
  }
  .whatsapp-link:hover {
    width: 100px;
  }
  i {
    margin-top: 16px;
  }
  p {
    margin-top: 10px;
    color: var(--blue-hard);
    font-size: 12px;
  }
  p:hover {
  }
`;
