import { ILogicalComponent } from './core/ILogicalComponent';

export class BrowserWindowSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"alwaysOnTop":"boolean","activateOnOpen":"boolean","tab":"Boolean","defaultHeight":"int","defaultWidth":"int"};

}
