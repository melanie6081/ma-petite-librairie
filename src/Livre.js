// Un livre
export default class Livre {
  constructor(titre, qtestock, prix) {
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
    return `${this._titre} (${this._qtestock} en stock | ${this._prix}€)`;
  }
}
