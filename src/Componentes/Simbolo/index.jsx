import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosRadioButtonOff } from "react-icons/io";

const Simbolo = (prop) => {
  return (
    <div>
      <div>{prop.jogador? <IoClose></IoClose> : <IoIosRadioButtonOff></IoIosRadioButtonOff>}</div>
    </div>
  );
};

export default Simbolo;
