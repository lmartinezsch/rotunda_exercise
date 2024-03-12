import {Animal} from "./Animal.js";
import {soundTypes} from "../utils/soundTypes.js";

export class Tiger extends Animal {
    constructor() {
        super(soundTypes.GRRR);
    }
}