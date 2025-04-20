import { ILogicalComponent } from './core/ILogicalComponent';

export class StretchItem extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"width":["number","String"],"height":["number","String"]};

}
