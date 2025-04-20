import { DrawItem } from './DrawItem';

export class DrawDiamond extends DrawItem {
    static ISC_CLASS_NAME = 'DrawDiamond';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"top":"Coordinate","width":"Distance","left":"Coordinate","height":"Distance"};

}
