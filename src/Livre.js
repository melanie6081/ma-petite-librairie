// Un livre
export default class Livre {
  constructor(id, titre, qtestock, prix) {
    this._id = id;
    this._titre = titre;
    this._qtestock = qtestock;
    this._prix = prix;
  }

  get titre() {
    return this._titre;
  }
  get qtestock() {
    return this._qtestock;
  }
  get prix() {
    return this._prix;
  }

  pourAfficher() {
    return `${this._titre} \n (${this._qtestock} en stock | ${this._prix}€)`;
  }

  add1() {
    return `${this._qtestock++}`;
  }

  delete1() {
    return `${this._qtestock--}`;
  }
}
