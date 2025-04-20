import { Window } from './Window';

export class Portlet extends Window {
    static ISC_CLASS_NAME = 'Portlet';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"minWidth":"Number","minHeight":"Number","rowHeight":["Number","String"],"closeConfirmationDialogProperties":{"className":"Dialog","isProperties":true},"canDrop":"boolean","destroyOnClose":"Boolean","showCloseConfirmationMessage":"Boolean","height":["Number","String"]};

}
