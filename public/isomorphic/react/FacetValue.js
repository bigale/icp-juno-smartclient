import { ILogicalComponent } from './core/ILogicalComponent';

export class FacetValue extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"isMinimizeValue":"Boolean","collapsed":"Boolean","width":"number","canCollapse":"Boolean","id":["String","Number"],"canEdit":"Boolean","canMinimize":"Boolean","minimized":"Boolean","parentId":["String","Number"]};

}
