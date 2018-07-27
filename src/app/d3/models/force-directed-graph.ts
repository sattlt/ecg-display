import { EventEmitter } from '@angular/core';
import { Link } from './link';
import { Node } from './node';


const FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
};

export class ForcedirectedGraph {

    public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
    public simulation: d3.Simulation<any, any>;

    public nodes: Node[] = [];
    public links: Link[] = [];

    constructor(nodes: Node[], links: Link[], options: { width, height }) {

    }
}
