import {Negociacao} from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista())
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const exp: RegExp = /-/g;
    const date: Date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade: number = parseInt(this.inputQuantidade.value);
    const valor: number = parseFloat(this.inputValor.value);
    const negociacao = new Negociacao(date, quantidade, valor);
    return negociacao;
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
