import Toy from './Toy'

export default class Pony extends Toy {
    public id: number;
    private _nb: number;

    constructor() {
        super();
        this._nb = 1;
        this.id = this._nb;
        this.setType(this.getType()+this.id);
        console.log(this.getType()+ " is singing -->\n" +
            "Dou-double poney, j’fais izi money\n" +
            "D’où tu m’connais ? Parle moi en billets violets\n" +
            "Dou-double poney, j’fais izi money\n")
    }

    public isMoved() {
        console.log("Huuuuuuhu!")
    }

}
