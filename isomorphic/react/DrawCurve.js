import { DrawItem } from './DrawItem';

export class DrawCurve extends DrawItem {
    static ISC_CLASS_NAME = 'DrawCurve';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"controlPoint1":{"className":"Point"},"endPoint":{"className":"Point"},"showTitleLabelBackground":"boolean","knobs":{"className":"KnobType","isArray":true},"startPoint":{"className":"Point"},"c2KnobProperties":{"className":"DrawKnob","isProperties":true},"controlPoint2":{"className":"Point"},"c1KnobProperties":{"className":"DrawKnob","isProperties":true}};

}
