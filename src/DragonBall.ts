import Figurine from './Figurine'
export enum DBHeroes {
    SANGOKU= "SANGOKU" ,
    BEJITA = "BEJITA",
    BEERUS = "BEERUS" ,
    KAMESENNIN = "KAMESENNIN" ,
}
export class DragonBall extends Figurine{
    private _character:DBHeroes;

        constructor(DBHeroes:DBHeroes) {
        super()
        this._character=DBHeroes;
        this.setType(this.getType()+DBHeroes)

        console.log(this._character+" is singing -->\n" +
            "CHA-LA HEAD CHA-LA\n" +
            "Nani ga okite mo kibun wa heno-heno kappa\n" +
            "CHA-LA HEAD CHA-LA\n" +
            "Mune ga pachi-pachi suru hodo\n" +
            "Sawagu Genki-Dama --Sparking !\n")
    }

    public isMoved()
    {
        console.log("Kamé Hamé Ha!")
    }
}