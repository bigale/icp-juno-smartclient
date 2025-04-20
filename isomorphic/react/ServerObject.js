import { ILogicalComponent } from './core/ILogicalComponent';

export class ServerObject extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"dropExtraFields":"Boolean","visibleMethods":{"className":"VisibleMethod","isArray":true},"crudOnly":"boolean"};

}
