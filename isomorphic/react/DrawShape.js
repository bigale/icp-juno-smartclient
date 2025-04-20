import { DrawItem } from './DrawItem';

export class DrawShape extends DrawItem {
    static ISC_CLASS_NAME = 'DrawShape';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"commands":{"className":"DrawShapeCommand","isArray":true}};

}
