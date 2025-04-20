import { MenuButton } from './MenuButton';

export class IMenuButton extends MenuButton {
    static ISC_CLASS_NAME = 'IMenuButton';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"autoDestroyMenu":"Boolean","hiliteAccessKey":"Boolean","showMenuBelow":"Boolean","height":["Number","String"],"menu":{"className":"Menu"},"showMenuButtonImage":"Boolean"};

}
