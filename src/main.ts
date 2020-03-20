import Pony from './Pony'
import {DBHeroes, DragonBall} from './DragonBall'
import Elf from './Elf';
import Box from './Box';
import Packaging from "./Packaging";
import GiftWrap from "./GiftWrap";


// Step #1
console.log("--- STEP #1 ---");

const pony: Pony = new Pony();
const goku: DragonBall = new DragonBall(DBHeroes.SANGOKU);

pony.isMoved();
goku.isMoved();


// Step #2
console.log("--- STEP #2 ---")
const alexis: Elf = new Elf("Alexis3490")
const box: Packaging = new Box()
alexis.pack(box,goku)
box.open();
alexis.pack(box,goku)

const paper: Packaging = new GiftWrap()
alexis.pack(paper, pony)
alexis.pack(paper, pony)







