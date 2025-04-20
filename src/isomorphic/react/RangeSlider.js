import { Canvas } from './Canvas';

export class RangeSlider extends Canvas {
    static ISC_CLASS_NAME = 'RangeSlider';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"vertical":"boolean","minValue":"float","trackProperties":{"className":"Canvas","isProperties":true},"startValue":"float","endThumbProperties":{"className":"Snapbar","isProperties":true},"startThumbProperties":{"className":"Snapbar","isProperties":true},"scrollbarProperties":{"className":"Scrollbar","isProperties":true},"endValue":"float","maxValue":"float"};

}
