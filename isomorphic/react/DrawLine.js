import { DrawItem } from './DrawItem';

export class DrawLine extends DrawItem {
    static ISC_CLASS_NAME = 'DrawLine';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"startPoint":{"className":"Point"},"endLeft":"Coordinate","knobs":{"className":"KnobType","isArray":true},"endPoint":{"className":"Point"},"startLeft":"Coordinate","endTop":"Coordinate","startTop":"Coordinate","showTitleLabelBackground":"boolean"};

}
