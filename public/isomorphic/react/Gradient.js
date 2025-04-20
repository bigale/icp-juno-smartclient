import { ILogicalComponent } from './core/ILogicalComponent';

export class Gradient extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"colorStops":{"className":"ColorStop","isArray":true}};

}
