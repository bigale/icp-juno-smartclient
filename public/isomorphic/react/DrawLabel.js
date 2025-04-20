import { DrawItem } from './DrawItem';

export class DrawLabel extends DrawItem {
    static ISC_CLASS_NAME = 'DrawLabel';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"knobs":{"className":"KnobType","isArray":true},"escapeContents":"boolean","fontSize":"int","rotation":"float","top":"Coordinate","left":"Coordinate"};

}
