import { DrawItem } from './DrawItem';

export class DrawLinePath extends DrawItem {
    static ISC_CLASS_NAME = 'DrawLinePath';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"startTop":"Coordinate","endTop":"Coordinate","controlPoint1":{"className":"Point"},"startLeft":"Coordinate","showTitleLabelBackground":"boolean","endPoint":{"className":"Point"},"knobs":{"className":"KnobType","isArray":true},"endLeft":"Coordinate","tailSize":"Distance","startPoint":{"className":"Point"},"controlPoint2":{"className":"Point"}};

}
