import { ILogicalComponent } from './core/ILogicalComponent';

export class Operator extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"hidden":"boolean","fieldTypes":{"className":"FieldType","isArray":true},"requiresServer":"boolean"};

}
