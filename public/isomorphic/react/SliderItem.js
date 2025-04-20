import { CanvasItem } from './CanvasItem';

export class SliderItem extends CanvasItem {
    static ISC_CLASS_NAME = 'SliderItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"shouldSaveValue":"Boolean","vertical":"Boolean","sliderProperties":[{"className":"Canvas","isProperties":true},{"className":"Slider","isProperties":true}],"maxValue":"float","minValue":"float","roundValues":"Boolean","width":"number","changeOnDrag":"Boolean","defaultValue":"float","roundPrecision":"number","numValues":"Integer"};

}
