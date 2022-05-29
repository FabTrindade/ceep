class Notas {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}

export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this.inscritos =[];
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    notificar() {
        this.inscritos.forEach(func => {
            func(this.notas);
        })
    }

    criarNota(titulo, texto, categoria) {
        this.notas.push(new Notas(titulo, texto, categoria));
        this.notificar();
    }

    deletarNota(index) {
        this.notas.splice(index, 1);
        this.notificar();
    }
}