import { observable, computed, action } from "mobx";
class Store {
    @observable imgFondo: string = "./assets/img/fondo.jpg";
}
export const store = new Store();