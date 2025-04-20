import { Toolbar } from './Toolbar';

export class MenuBar extends Toolbar {
    static ISC_CLASS_NAME = 'MenuBar';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"menus":{"className":"Menu","isArray":true},"tabIndex":"number"};

}
