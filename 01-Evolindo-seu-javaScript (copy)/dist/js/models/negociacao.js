export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //as propriedades são publicas, ou seja, getters, mas readonly
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        console.log(date);
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }
}
