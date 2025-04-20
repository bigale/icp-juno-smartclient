import { ILogicalComponent } from './core/ILogicalComponent';

export class Field extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"escapeHTML":"Boolean","canEdit":"Boolean","canExport":"Boolean","valueMap":{"className":"ValueMap"},"required":"Boolean","multiple":"Boolean"};

}
