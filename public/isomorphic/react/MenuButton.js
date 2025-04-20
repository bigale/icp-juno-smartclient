import { Button } from './Button';

export class MenuButton extends Button {
    static ISC_CLASS_NAME = 'MenuButton';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"menu":{"className":"Menu"},"rollOverMenuHideDelay":"Number","autoDestroyMenu":"Boolean","showMenuButtonImage":"Boolean","hiliteAccessKey":"Boolean","height":["Number","String"],"showMenuOnRollOver":"Boolean","showMenuBelow":"Boolean"};

}
