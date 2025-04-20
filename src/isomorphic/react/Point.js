import { ILogicalComponent } from './core/ILogicalComponent';

export class Point extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"x":"Coordinate","y":"Coordinate"};

}
