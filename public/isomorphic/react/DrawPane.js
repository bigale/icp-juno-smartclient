import { Canvas } from './Canvas';

export class DrawPane extends Canvas {
    static ISC_CLASS_NAME = 'DrawPane';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"drawingHeight":"int","zoomLevel":"float","gradients":{"className":"Gradient","isArray":true},"canDragScroll":"boolean","drawItems":{"className":"DrawItem","isArray":true},"rotation":"float","drawingWidth":"int"};

}
