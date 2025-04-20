import { ILogicalComponent } from './core/ILogicalComponent';

export class PropertyValue extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"value":"Any"};

}
