import { Window } from './Window';

export class Dialog extends Window {
    static ISC_CLASS_NAME = 'Dialog';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"defaultWidth":"int","autoFocus":"Boolean","iconSize":"int","toolbarProperties":{"className":"Toolbar","isProperties":true},"toolbarButtons":{"className":"Button","isArray":true},"showToolbar":"boolean","buttons":{"className":"Button","isArray":true},"autoFocusButton":[{"className":"Canvas"},"String","int"]};

}
