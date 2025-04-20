import { Window } from './Window';

export class ModalWindow extends Window {
    static ISC_CLASS_NAME = 'ModalWindow';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"autoCenter":"boolean","width":["Number","String"],"height":["Number","String"],"maxHeight":"Number","isModal":"boolean","maxWidth":"Number"};

}
