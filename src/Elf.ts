import Packaging from "./Packaging";

export default class Elf  extends Packaging{
    private _nickname:string;

    constructor(_nickname: string) {
        super();
        this._nickname=_nickname
    }

    getNickname() {
        return this._nickname
    }

    setNickname(value:string)
    {
        this._nickname= value
    }

    pack(pack:Packaging, DragonBall:any)
    {
        this.insert(DragonBall);
        if(this.isOpen === false) {
            console.log("Sorry this package is not open")
        }
        else {
            console.log("Yeaaaah! Just packing the toy ~~"+DragonBall+" ~~\n")

        }
    }

    unpack()
    {

    }

}