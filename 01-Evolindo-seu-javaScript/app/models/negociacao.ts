export class Negociacao {
  constructor(_data: Date, _quantidade: number, _valor: number) {}

  get data(): Date {
    return this._data;
  }
  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }
  get volume(): number {
    return this._quantidade * this._valor;
  }
}
