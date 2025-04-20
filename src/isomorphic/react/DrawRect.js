import { DrawItem } from './DrawItem';

export class DrawRect extends DrawItem {
    static ISC_CLASS_NAME = 'DrawRect';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"top":"Coordinate","height":"Distance","left":"Coordinate","rounding":"float","width":"Distance"};

}
