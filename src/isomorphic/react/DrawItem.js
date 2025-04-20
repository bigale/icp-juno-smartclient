import { IBaseComponent } from './core/IBaseComponent';

export class DrawItem extends IBaseComponent {
    static ISC_CLASS_NAME = 'DrawItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"resizeViaLocalTransformOnly":"boolean","knobs":{"className":"KnobType","isArray":true},"zIndex":"Integer","fillOpacity":"float","keepInParentRect":["Boolean",{"className":"Float","isArray":true}],"showHover":"boolean","resizeKnobPoints":{"className":"ResizeKnobPoint","isArray":true},"destroying":"boolean","titleAutoFit":"boolean","hoverDelay":"number","rotation":"float","xShearFactor":"float","drawGroup":{"className":"DrawGroup"},"fillGradient":[{"className":"Gradient"},"String"],"sideResizeKnobProperties":{"className":"DrawKnob","isProperties":true},"showResizeOutline":"boolean","eventOpaque":"boolean","shapeData":{"className":"Object"},"cornerResizeKnobProperties":{"className":"DrawKnob","isProperties":true},"lineWidth":"int","rotateKnobProperties":{"className":"DrawKnob","isProperties":true},"useSimpleTransform":"boolean","canHover":"boolean","lineOpacity":"float","endKnobProperties":{"className":"DrawKnob","isProperties":true},"proportionalResizeModifiers":{"className":"KeyName","isArray":true},"drawPane":[{"className":"DrawPane"},"String"],"destroyed":"boolean","titleLabelPadding":"int","titleAutoFitMargin":"number","dragStartDistance":"number","moveKnobProperties":{"className":"DrawKnob","isProperties":true},"resizeOutlineProperties":{"className":"DrawRect","isProperties":true},"yShearFactor":"float","canDrag":"Boolean","startKnobProperties":{"className":"DrawKnob","isProperties":true},"contextMenu":{"className":"Menu"},"showTitleLabelBackground":"boolean","shadow":{"className":"Shadow"}};

}
