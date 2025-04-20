import { ILogicalComponent } from './core/ILogicalComponent';

export class ValidatorDefinition extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"requiresServer":"boolean"};

}
