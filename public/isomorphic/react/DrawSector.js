import { DrawItem } from './DrawItem';

export class DrawSector extends DrawItem {
    static ISC_CLASS_NAME = 'DrawSector';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"radius":"Distance","rotation":"float","startAngle":"float","showTitleLabelBackground":"boolean","centerPoint":{"className":"Point"},"endAngle":"float","knobs":{"className":"KnobType","isArray":true}};

}
