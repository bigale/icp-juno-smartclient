import { ILogicalComponent } from './core/ILogicalComponent';

export class Hilite extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"fieldName":["FieldName",{"className":"FieldName","isArray":true}],"disabled":"Boolean","canEdit":"Boolean","criteria":[{"className":"Criteria"},{"className":"AdvancedCriteria"}]};

}
