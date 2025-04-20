import { Layout } from './Layout';

export class Toolbar extends Layout {
    static ISC_CLASS_NAME = 'Toolbar';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"canReorderItems":"Boolean","buttons":{"className":"Button","isArray":true},"buttonDefaults":{"className":"Object"},"canAcceptDrop":"Boolean","createButtonsOnInit":"Boolean","vertical":"Boolean","canResizeItems":"Boolean"};

}
