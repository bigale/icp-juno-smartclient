import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface GradientEditorProps extends VLayoutProps {

/**
 * See {@link isc.GradientEditor.getGradient() GradientEditor.getGradient()}.
 */
getGradient?: Function;

/**
 * See {@link isc.GradientEditor.dragSnapAngle GradientEditor.dragSnapAngle}.
 */
dragSnapAngle?: number;

/**
 * See {@link isc.GradientEditor.showPreviewCanvas GradientEditor.showPreviewCanvas}.
 */
showPreviewCanvas?: boolean;

/**
 * See {@link isc.GradientEditor.previewCanvasProperties GradientEditor.previewCanvasProperties}.
 */
previewCanvasProperties?: Canvas;

/**
 * See {@link isc.GradientEditor.gradient GradientEditor.gradient}.
 */
gradient?: string;

/**
 * See {@link isc.GradientEditor.outputFormProperties GradientEditor.outputFormProperties}.
 */
outputFormProperties?: DynamicForm;

/**
 * See {@link isc.GradientEditor.setGradient() GradientEditor.setGradient()}.
 */
setGradient?: Function;

/**
 * See {@link isc.GradientEditor.gradientChanged() GradientEditor.gradientChanged()}.
 */
gradientChanged?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * GradientEditor wraps the SmartClient widget class
 * {@link isc.GradientEditor GradientEditor} for React, allowing you to import
 * GradientEditor for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class GradientEditor extends VLayout {
    props: AsComponentXML<GradientEditorProps>;
}
