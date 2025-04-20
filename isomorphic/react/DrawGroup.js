import { DrawItem } from './DrawItem';

export class DrawGroup extends DrawItem {
    static ISC_CLASS_NAME = 'DrawGroup';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"width":"Distance","drawItems":{"className":"DrawItem","isArray":true},"knobs":{"className":"KnobType","isArray":true},"showGroupRectOutline":"Boolean","moveItemsWithGroup":"Boolean","groupRectOutlineProperties":{"className":"DrawRect","isProperties":true},"useGroupRect":"boolean","left":"Coordinate","height":"Distance","top":"Coordinate"};

}
