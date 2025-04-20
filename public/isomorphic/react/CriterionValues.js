import { ILogicalComponent } from './core/ILogicalComponent';

export class CriterionValues extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"otherValue":"Any","end":"Any","value":"Any","start":"Any","criterion":{"className":"Criterion"},"record":{"className":"Record","isProperties":true}};

}
