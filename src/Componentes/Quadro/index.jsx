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
  return (
    <Container>
      
    </Container>
  );
};

export default Quadro;
