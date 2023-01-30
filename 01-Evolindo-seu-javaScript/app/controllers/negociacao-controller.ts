import Negociacao from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona() {
    const negociacao = this.criaNegociacao();
    console.log(negociacao);
  }

  criaNegociacao() {
    const exp: RegExp = /-/g;
    const date: Date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade: number = parseInt(this.inputQuantidade.value);
    const valor: number = parseFloat(this.inputValor.value);
    const negociacao = new Negociacao(date, quantidade, valor);
    return negociacao;
  }
}
