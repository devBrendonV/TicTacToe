import React from "react";
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
  const [fileiras, setFileiras] = useState("");a
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
      
    </Container>
  );
};

export default Quadro;
