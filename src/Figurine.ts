export default class Figurine
{
    private _type: string="Dragon Ball Figurine"
    getType() {
        return this._type
    }

    setType(value:string)
    {
        this._type= value
    }
}