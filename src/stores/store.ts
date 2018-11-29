import { observable, computed, action } from "mobx";
class Store {
    @observable imgFondo: string = "./assets/img/fondo.jpg";
    @observable logo: string = "./assets/img/logo.png";
}
export const store = new Store();