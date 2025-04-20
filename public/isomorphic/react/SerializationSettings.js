import { ILogicalComponent } from './core/ILogicalComponent';

export class SerializationSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"indent":"Boolean","outputComponentsIndividually":"Boolean","serverless":"Boolean"};

}
