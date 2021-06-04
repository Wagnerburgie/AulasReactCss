import React, { useState } from "react";
import { Icone, Box, Botao } from "../UI/index"
import styled from 'styled-components'
import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
const IconeMargim = styled(Icone)`
margin-top: 2px;
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icone src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="saldo">
            <span className="detalhe">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <Botao className="btn" onClick={toggleHandler}>
        <IconeMargim
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
