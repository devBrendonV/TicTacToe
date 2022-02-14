import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Focus = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
`;

export const Fileiras = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 610px;
  height: 610px;
  display: flex;
  flex-wrap: wrap;
`;

export const Mensagem = styled.div`
  position: fixed;
  margin: -135px 0 0 0;
  border: 1px solid #ffffff;
  width: 300px;
  height: 200px;
  font-size: 15px;
  background: rgb(36, 31, 0);
  background: linear-gradient(
    180deg,
    rgba(36, 31, 0, 1) 3%,
    rgba(17, 9, 121, 0.9676674364896074) 34%,
    rgba(0, 212, 255, 1) 97%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;
export const Quadrinho = styled.button`
  margin: auto;
  background-color: transparent;
  border: 1px solid white;
  width: 200px;
  height: 200px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 110px;
  border-top: ${(prop) => (prop.border <= 2 ? "none" : "")};
  border-left: ${(prop) => (prop.border % 3 === 0 ? "none" : "")};
  border-right: ${(prop) =>
    prop.border === 2 || prop.border === 5 || prop.border === 8 ? "none" : ""};
  border-bottom: ${(prop) => (prop.border > 5 ? "none" : "")};
`;
export const Painel = styled.div`
  width: 650px;
  height: auto;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #161945;
  color: white;
  border: 4px solid #727372;
  div {
    width: 100%;
  }
`;
export const LinhaPainel = styled.div`
  display: flex;
  width: 100%;
  strong {
    color: #26abed;
  }

  div {
    text-align: center;
    border: 1px solid #727372;
    margin: 2px;
  }
`;
export const BotoesPainel = styled.div`
  display: flex;
  justify-content: space-around;
  justify-items: center;
  width: 100%;
  margin-top: 2px;
`;

export const Botao = styled.button`
  color: ${(prop) => (prop.disabled ? "#cccccc" : "#f5f2f2")};
  background-color: ${(prop) =>
    prop.disabled === true ? "#979998" : "#542ca3"};
  border: 1px solid #878787;
  margin-top: 5px;
`;

export const Menu = styled.div`
  position: fixed;
  margin: -100px 0 0 0;

  border: 1px solid #ffffff;
  width: 400px;
  height: 300px;
  font-size: 15px;
  background: rgb(36, 31, 0);
  background: linear-gradient(
    180deg,
    rgba(36, 31, 0, 1) 3%,
    rgba(17, 9, 121, 0.9676674364896074) 34%,
    rgba(0, 212, 255, 1) 97%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  input {
    outline: 0;
    margin-top: 5px;
  }
`;

export const Titulo = styled.h1`
  position: fixed;
  top: 0;
  text-align: center;
  margin-top: 50px;
  font-size: 80px;
  color: rgb(67, 59, 171);
  text-shadow: rgb(0, 212, 255) 4px 4px 4px;
`;
