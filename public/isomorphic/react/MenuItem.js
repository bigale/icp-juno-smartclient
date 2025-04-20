import { ListGridRecord } from './ListGridRecord';

export class MenuItem extends ListGridRecord {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"iconWidth":"number","canSelectParent":"boolean","isSeparator":"Boolean","autoDismiss":"Boolean","embeddedComponentFields":{"className":"String","isArray":true},"fetchSubmenus":"Boolean","checked":"boolean","enabled":"Boolean","hidden":"boolean","embeddedComponent":{"className":"Canvas"},"visibleWhen":{"className":"AdvancedCriteria"},"iconHeight":"number","enableWhen":{"className":"AdvancedCriteria"},"submenu":{"className":"Menu"},"keys":[{"className":"KeyIdentifier"},{"className":"KeyIdentifier","isArray":true}],"showIconOnlyInline":"boolean"};

}
