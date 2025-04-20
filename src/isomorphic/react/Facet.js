import { ILogicalComponent } from './core/ILogicalComponent';

export class Facet extends ILogicalComponent {
    static ISC_CLASS_NAME = 'Facet';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"sortFoldersBeforeLeaves":"Boolean","collapsed":"Boolean","width":"number","labelHeight":"number","minimized":"Boolean","id":["String","Number"],"synchColumnLayout":"Boolean","canMinimize":"Boolean","showParentsLast":"Boolean","indentVTree":"Boolean","separateFolders":"Boolean","height":"number","canCollapse":"Boolean","inlinedValues":"boolean","isTree":"Boolean","values":{"className":"FacetValue","isArray":true}};

}
