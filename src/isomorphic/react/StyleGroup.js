import { ILogicalComponent } from './core/ILogicalComponent';

export class StyleGroup extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"expanded":"Boolean","settings":{"className":"StyleSetting","isArray":true},"allowAsymmetry":"Boolean","canCollapse":"Boolean"};

}
