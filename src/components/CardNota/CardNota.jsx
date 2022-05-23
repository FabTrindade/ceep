import React, { Component } from "react";
import {ReactComponent as DeleteForeverSVG} from  "../../assets/img/delete_forever.svg"
import "./estilo.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteForeverSVG />
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
