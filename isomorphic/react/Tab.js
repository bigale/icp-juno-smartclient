import { ILogicalComponent } from './core/ILogicalComponent';

export class Tab extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"pane":[{"className":"Canvas"},"AutoChildShortcut"],"visibleWhen":{"className":"Criteria"},"canClose":"boolean","paneMargin":"int","iconHeight":"Integer","iconWidth":"Integer","hidden":"boolean","canAdaptWidth":"Boolean","disabled":"boolean","iconSize":"Integer","canEditTitle":"boolean","canReorder":"Boolean","closeIconSize":"number","width":"number","enableWhen":{"className":"Criteria"}};

}
