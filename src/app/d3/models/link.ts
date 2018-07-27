
import { Node } from './node';

export class Link implements d3.SimulationLinkDatum<Node> {

    source: string | number | Node;    target: string | number | Node;
    index?: number;

    constructor(source, target) {
        this.source = source;
        this.target = target;
    }

}
