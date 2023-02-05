export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  //as propriedades são publicas, ou seja, getters, mas readonly
  get volume(): number {
    return this.quantidade * this.valor;
  }
  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp: RegExp = /-/g;
    const date: Date = new Date(dataString.replace(exp, ","));
    console.log(date);
    const quantidade: number = parseInt(quantidadeString);
    const valor: number = parseFloat(valorString);
    const negociacao = new Negociacao(date, quantidade, valor);
    return negociacao;
  }
}
