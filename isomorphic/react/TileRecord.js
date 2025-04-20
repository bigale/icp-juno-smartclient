import { ILogicalComponent } from './core/ILogicalComponent';

export class TileRecord extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"tileProperties":{"className":"Canvas","isProperties":true},"minimumImageFieldSize":"int"};

}
