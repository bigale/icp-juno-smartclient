import { ILogicalComponent } from './core/ILogicalComponent';

export class PortalPosition extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"rowNum":"int","position":"int","colNum":"int"};

}
