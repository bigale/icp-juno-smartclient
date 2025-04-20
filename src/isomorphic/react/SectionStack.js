import { VLayout } from './VLayout';

export class SectionStack extends VLayout {
    static ISC_CLASS_NAME = 'SectionStack';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"canTabToHeaders":"boolean","canCollapseAll":"Boolean","closeSectionIconSize":"Number","canResizeSections":"Boolean","sections":{"className":"SectionStackSection","isArray":true},"showExpandControls":"Boolean","itemEndIndent":"Number","itemStartIndent":"Number","canDropComponents":"Boolean","animateSections":"boolean","scrollSectionIntoView":"Boolean","useGlobalSectionIDs":"Boolean","closeSectionButtonProperties":{"className":"ImgButton","isProperties":true},"closeSectionButtonDefaults":{"className":"ImgButton","isProperties":true},"canCloseSections":"boolean","canReorderSections":"Boolean","itemIndent":"Number","headerHeight":"Number"};

}
