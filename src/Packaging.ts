export default class Packaging{
    isOpen:boolean=false;
    toy:string=""

    open()
    {
        this.isOpen=true
    }

    insert(toy:string)
    {
        this.toy=toy
    }
}