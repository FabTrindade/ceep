import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Trabalho", "Estudo"]
    }
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayDeNotas
    }
    this.setState(novoEstado);
  }

  addCategoria(categoria) {
    const novoArrayDeCategoria = [...this.state.categorias, categoria];
    const novoEstado = { ...this.state.categorias, categorias:novoArrayDeCategoria };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(index, 1);
    this.setState({ notas: arrayDeNotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            addCategoria={this.addCategoria.bind(this)} />
          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            notas={this.state.notas} />
        </main>
      </section>
    );
  }
}

export default App;
