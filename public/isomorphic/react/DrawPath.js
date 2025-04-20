import { DrawItem } from './DrawItem';

export class DrawPath extends DrawItem {
    static ISC_CLASS_NAME = 'DrawPath';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"showTitleLabelBackground":"boolean","points":{"className":"Point","isArray":true},"knobs":{"className":"KnobType","isArray":true}};

}
