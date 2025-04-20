import { DrawItem } from './DrawItem';

export class DrawImage extends DrawItem {
    static ISC_CLASS_NAME = 'DrawImage';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"top":"Coordinate","height":"Distance","width":"Distance","useMatrixFilter":"Boolean","left":"Coordinate"};

}
