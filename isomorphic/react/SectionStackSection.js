import { ILogicalComponent } from './core/ILogicalComponent';

export class SectionStackSection extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"resizeable":"boolean","canClose":"Boolean","expanded":"boolean","destroyOnRemove":"Boolean","headerProperties":[{"className":"SectionHeader","isProperties":true},{"className":"ImgSectionHeader","isProperties":true}],"showHeader":"Boolean","canTabToHeader":"boolean","clipTitle":"Boolean","canDropBefore":"boolean","hidden":"boolean","showClippedTitleOnHover":"Boolean","canCollapse":"Boolean","controls":{"className":"Canvas","isArray":true},"closeIconSize":"Number","canReorder":"boolean","items":[{"className":"Canvas","isArray":true},{"className":"AutoChildShortcut","isArray":true}]};

}
