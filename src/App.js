import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: ["Trabalho", "Estudo"],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  addCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state.categorias, categorias: novoArrayCategorias };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.criarNota.bind(this)}
          categorias={this.state.categorias} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            addCategoria={this.addCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
