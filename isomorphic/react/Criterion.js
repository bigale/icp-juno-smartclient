import { ILogicalComponent } from './core/ILogicalComponent';

export class Criterion extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"end":"Any","start":"Any","criteria":{"className":"Criterion","isArray":true},"value":"Any"};

}
