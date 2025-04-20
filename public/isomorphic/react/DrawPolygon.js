import { DrawPath } from './DrawPath';

export class DrawPolygon extends DrawPath {
    static ISC_CLASS_NAME = 'DrawPolygon';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"knobs":{"className":"KnobType","isArray":true},"points":{"className":"Point","isArray":true},"showTitleLabelBackground":"boolean"};

}
