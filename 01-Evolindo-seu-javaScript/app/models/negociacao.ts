export default class Negociacao {
  private _data; //private field are accesible on the class constructor from inside the class declaration itself.
  private _quantidade;
  private _valor;

  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get data() {
    return this._data;
  }
  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
  get volume() {
    return this._quantidade * this._valor;
  }
}
