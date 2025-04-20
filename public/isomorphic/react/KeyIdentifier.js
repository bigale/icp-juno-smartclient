import { ILogicalComponent } from './core/ILogicalComponent';

export class KeyIdentifier extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"altKey":"Boolean","shiftKey":"Boolean","ctrlKey":"Boolean"};

}
