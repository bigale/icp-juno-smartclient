import { ILogicalComponent } from './core/ILogicalComponent';

export class SimpleType extends ILogicalComponent {
    static ISC_CLASS_NAME = 'SimpleType';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"groupingModes":{"className":"ValueMap"},"validOperators":{"className":"OperatorId","isArray":true},"canFilter":"Boolean","valueMap":{"className":"ValueMap"},"canEdit":"Boolean","fieldProperties":{"className":"DataSourceField","isProperties":true},"validators":{"className":"Validator","isArray":true}};

}
