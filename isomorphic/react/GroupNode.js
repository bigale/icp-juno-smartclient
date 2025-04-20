import { ILogicalComponent } from './core/ILogicalComponent';

export class GroupNode extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"groupMembers":[{"className":"ListGridRecord","isArray":true},{"className":"GroupNode"}],"groupValue":"Any"};

}
