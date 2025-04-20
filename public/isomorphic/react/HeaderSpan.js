import { ILogicalComponent } from './core/ILogicalComponent';

export class HeaderSpan extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"wrap":"Boolean","spans":{"className":"HeaderSpan","isArray":true},"height":"Integer","fields":{"className":"String","isArray":true}};
static CHILD_TYPE_MAPPING = {"String":"fields"};

}
