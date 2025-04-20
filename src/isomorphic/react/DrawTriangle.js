import { DrawPolygon } from './DrawPolygon';

export class DrawTriangle extends DrawPolygon {
    static ISC_CLASS_NAME = 'DrawTriangle';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"points":{"className":"Point","isArray":true}};

}
