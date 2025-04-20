import { DrawItem } from './DrawItem';

export class DrawOval extends DrawItem {
    static ISC_CLASS_NAME = 'DrawOval';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"top":"Coordinate","radius":"Distance","left":"Coordinate","height":"Distance","centerPoint":{"className":"Point"},"width":"Distance"};

}
