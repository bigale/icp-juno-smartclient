import { Record } from './Record';

export class ListGridRecord extends Record {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"embeddedComponent":{"className":"Canvas"},"backgroundComponent":{"className":"Canvas"},"isGroupSummary":"Boolean","canExpand":"boolean","canAcceptDrop":"boolean","detailDS":{"className":"DataSource"},"includeInSummary":"boolean","embeddedComponentFields":{"className":"String","isArray":true},"canSelect":"boolean","isGridSummary":"Boolean","enabled":"boolean","isSeparator":"boolean","showRollOver":"Boolean","canDrag":"boolean"};

}
