import { ILogicalComponent } from './core/ILogicalComponent';

export class QualityIndicatedLocator extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"containsGlobalId":"boolean","containsIndices":"boolean"};

}
