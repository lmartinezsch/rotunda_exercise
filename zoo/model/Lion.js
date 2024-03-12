import {Animal} from "./Animal.js";
import {soundTypes} from "../utils/soundTypes.js";

export class Lion extends Animal {
    constructor() {
        super(soundTypes.ROAR);
    }
}