export default class Toy
{
    private _type: string = "Pony #";
   getType() {
        return this._type
   }

   setType(value:string)
   {
       this._type= value
   }
}