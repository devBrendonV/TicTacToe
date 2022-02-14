import React, { useState, useEffect } from "react";
import Simbolo from "../Simbolo";
import { marcados } from "../marcados";
import { BsGear } from "react-icons/bs";
import {
  Botao,
  BotoesPainel,
  Container,
  Fileiras,
  Focus,
  LinhaPainel,
  Mensagem,
  Menu,
  Painel,
  Quadrinho,
  Titulo,
} from "./styles";
import Spinner from "react-bootstrap/Spinner";
const Quadro = () => {
  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setpontosJogador2] = useState(0);
  const [nomeJogador1, setNomeJogador1] = useState("");
  const [nomeJogador2, setNomeJogador2] = useState("");
  const [menu, setMenu] = useState(false);
  const [resultado, setResultado] = useState("");
  const [vezJogador, setVezJogador] = useState(false);
  const [jogarContraComputador, setJogarContraComputador] = useState(false);
  const [travar, setTravar] = useState(false);
  const [jogadas, setJogadas] = useState(0);
  const [casa0, setCasa0] = useState(false);
  const [casa1, setCasa1] = useState(false);
  const [casa2, setCasa2] = useState(false);
  const [casa3, setCasa3] = useState(false);
  const [casa4, setCasa4] = useState(false);
  const [casa5, setCasa5] = useState(false);
  const [casa6, setCasa6] = useState(false);
  const [casa7, setCasa7] = useState(false);
  const [casa8, setCasa8] = useState(false);
  const [fileiras, setFileiras] = useState("");
  const casas = [casa0, casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8];
  const setCasas = [
    setCasa0,
    setCasa1,
    setCasa2,
    setCasa3,
    setCasa4,
    setCasa5,
    setCasa6,
    setCasa7,
    setCasa8,
  ];

  function mapear() {
    const mapeado = casas.map((bloco, indice) => {
      return (
        <Quadrinho
          border={indice}
          key={indice}
          disabled={casas[indice] || travar}
          onClick={() => {
            puxarSimbolo(indice);
          }}
        >
          {casas[indice]}
        </Quadrinho>
      );
    });
    setFileiras(mapeado);
  }

  useEffect(() => {
    if (travar === false) {
      mapear();
      conferirGanhador();
    }
    if (marcados.includes(10)) {
      setMenu(true);
    }
  }, [vezJogador, travar]);

  function marcar(valor, indice) {
    marcados.splice(indice, 1, valor);
  }

  function puxarSimbolo(indice) {
    if (jogarContraComputador === false) {
      if (vezJogador === false) {
        marcar(10, indice);
      }
      if (vezJogador === true) {
        marcar(1, indice);
      }
      setJogadas(jogadas + 1);
      setVezJogador(!vezJogador);
      return setCasas[indice](
        <Simbolo jogador={vezJogador} hidden={true}></Simbolo>
      );
    }
    if (jogarContraComputador === true) {
      if (vezJogador === false && travar === false) {
        marcar(10, indice);
        setJogadas(jogadas + 2);
        setVezJogador(true);
        return setCasas[indice](
          <Simbolo jogador={false} hidden={true}></Simbolo>
        );
      }
    }
  }

  function conferirGanhador() {
    // Conferir Linhas
    for (let x = 0; x < marcados.length; x += 3) {
      if (marcados[x] + marcados[x + 1] + marcados[x + 2] === 30) {
        setPontosJogador1(pontosJogador1 + 1);
        return resetar(1);
      }
      if (marcados[x] + marcados[x + 1] + marcados[x + 2] === 3) {
        setpontosJogador2(pontosJogador2 + 1);
        return resetar(2);
      }
    }
    // Conferir Colunas
    for (let x = 0; x < marcados.length; x++) {
      if (marcados[x] + marcados[x + 3] + marcados[x + 6] === 30) {
        setPontosJogador1(pontosJogador1 + 1);
        return resetar(1);
      }
      if (marcados[x] + marcados[x + 3] + marcados[x + 6] === 3) {
        setpontosJogador2(pontosJogador2 + 1);
        return resetar(2);
      }
    }
    // Conferir Diagonais
    for (let x = 0; x < marcados.length; x += 3) {
      if (marcados[x] + marcados[x + 4] + marcados[x + 8] === 30) {
        setPontosJogador1(pontosJogador1 + 1);
        return resetar(1);
      }
      if (marcados[x] + marcados[x + 4] + marcados[x + 8] === 3) {
        setpontosJogador2(pontosJogador2 + 1);
        return resetar(2);
      }
    }
    for (let x = 2; x < marcados.length; x += 3) {
      if (marcados[x] + marcados[x + 2] + marcados[x + 4] === 30) {
        setPontosJogador1(pontosJogador1 + 1);
        return resetar(1);
      }
      if (marcados[x] + marcados[x + 2] + marcados[x + 4] === 3) {
        setpontosJogador2(pontosJogador2 + 1);
        return resetar(2);
      }
    }
    if (vezJogador === true && jogarContraComputador === true) {
      jogadaComputador();
    }
    if (jogadas >= 9) {
      resetar(3);
    }
  }
  function jogadaComputador() {
    while (true) {
      const j = Math.floor(Math.random() * (9 + 1));
      if (marcados.includes("") === false) {
        resetar(3);
        break;
      }
      if (marcados[j] === "") {
        marcar(1, j, false);
        setCasas[j](<Simbolo jogador={true} hidden={true}></Simbolo>);
        break;
      }
    }
    setVezJogador(false);
  }
  function resetarCasas() {
    return setCasas.map((casa) => {
      return casa(false);
    });
  }

  function resetarMarcados() {
    return marcados.map((valor, indice) => {
      marcados.splice(indice, 1, "");
    });
  }

  function resetar(prop) {
    setTravar(true);
    setVezJogador();
    if (prop === 1) {
      if (jogarContraComputador === false) {
        setResultado(
          `${nomeJogador1.trim().length === 0 ? "JOGADOR 1" : nomeJogador1}` +
            " GANHOU !!"
        );
      }
      if (jogarContraComputador === true) {
        setResultado(
          `${nomeJogador1.trim().length === 0 ? "JOGADOR" : nomeJogador1}` +
            " GANHOU !!"
        );
      }
    }
    if (prop === 2) {
      if (jogarContraComputador === false) {
        setResultado(
          `${nomeJogador2.trim().length === 0 ? "JOGADOR 2" : nomeJogador2}` +
            " GANHOU !!"
        );
      }

      if (jogarContraComputador === true) {
        setResultado("COMPUTADOR GANHOU !!");
      }
    }
    if (prop === 3) {
      setResultado("EMPATOU !!!!");
    }
    if (prop === 4) {
      setResultado("RESETANDO...");
    }
    if (prop === 5) {
      setResultado("ALTERANDO MODO...");
      setPontosJogador1(0);
      setpontosJogador2(0);
      setJogarContraComputador(!jogarContraComputador);
    }
    setTimeout(() => {
      resetarCasas();
      setJogadas(0);
      resetarMarcados();
      setVezJogador(false);
      setResultado(false);
      setTravar(false);
    }, 1000);
  }
  return (
    <Container>
      <Focus hidden={menu}></Focus>
      <Titulo hidden={menu}>TicTacToe</Titulo>
      <Menu hidden={menu}>
        <label htmlFor="">DIGITE O NOME DOS JOGADORES</label>
        <input
          maxLength={10}
          type="text"
          placeholder="Nome do primeiro Jogador..."
          onChange={(e) => setNomeJogador1(e.target.value)}
        />
        <input
          maxLength={10}
          type="text"
          placeholder="Nome do segundo Jogador..."
          onChange={(e) => setNomeJogador2(e.target.value)}
        />
        <Botao onClick={() => setMenu(true)}>
          {nomeJogador1.trim().length === 0 && nomeJogador2.trim().length === 0
            ? "Jogar sem digitar nomes!"
            : "Pronto !"}
        </Botao>
      </Menu>
      <Mensagem hidden={!resultado}>
        {resultado}{" "}
        {resultado === "RESETANDO..." || resultado === "ALTERANDO MODO..." ? (
          <Spinner animation="border" />
        ) : (
          ""
        )}
      </Mensagem>
      <Fileiras>{fileiras}</Fileiras>
      <Painel>
        <div>
          <LinhaPainel>
            <div>
              Pontos{" "}
              {jogarContraComputador
                ? nomeJogador1.trim().length === 0
                  ? "Jogador:"
                  : `${
                      nomeJogador1.trim().length === 0
                        ? "Jogador 1:"
                        : nomeJogador1 + ":"
                    }`
                : `${
                    nomeJogador1.trim().length === 0
                      ? "Jogador 1:"
                      : nomeJogador1 + ":"
                  }`}{" "}
              <strong>{pontosJogador1}</strong>
            </div>
            <div>
              Pontos{" "}
              {jogarContraComputador
                ? "computador:"
                : `${
                    nomeJogador2.trim().length === 0
                      ? "Jogador 2:"
                      : nomeJogador2 + ":"
                  }`}{" "}
              <strong>{pontosJogador2}</strong>
            </div>
          </LinhaPainel>
          <LinhaPainel>
            <div>
              Vez atual:{" "}
              <strong>
                {vezJogador
                  ? jogarContraComputador
                    ? "Computador"
                    : nomeJogador2.trim().length === 0
                    ? "Jogador 2"
                    : nomeJogador2
                  : jogarContraComputador
                  ? nomeJogador1.trim().length === 0
                    ? "Jogador"
                    : nomeJogador1
                  : nomeJogador1.trim().length === 0
                  ? "Jogador 1"
                  : nomeJogador1}
              </strong>
            </div>
            <div>
              Jogando contra :{" "}
              <strong>
                {jogarContraComputador
                  ? "Computador"
                  : nomeJogador2.trim().length === 0
                  ? "Outra pessoa"
                  : nomeJogador2}
              </strong>
            </div>
          </LinhaPainel>
        </div>
        <BotoesPainel>
          <Botao disabled={!marcados.includes(10)} onClick={() => resetar(4)}>
            Resetar
          </Botao>
          <Botao
            disabled={marcados.includes(10) || !menu}
            onClick={() => resetar(5)}
          >
            Alterar Modo
          </Botao>
          <Botao
            disabled={marcados.includes(10)}
            onClick={() => setMenu(!menu)}
          >
            <BsGear></BsGear>
          </Botao>
        </BotoesPainel>
      </Painel>
    </Container>
  );
};

export default Quadro;
