import { ILogicalComponent } from './core/ILogicalComponent';

export class ColorStop extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"offset":"float","opacity":"float"};

}
