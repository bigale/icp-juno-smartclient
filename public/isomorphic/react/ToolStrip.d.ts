import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolStripProps extends LayoutProps {

/**
 * See {@link isc.ToolStrip.verticalStyleName ToolStrip.verticalStyleName}.
 */
verticalStyleName?: string;

/**
 * See {@link isc.ToolStrip.separatorBreadth ToolStrip.separatorBreadth}.
 */
separatorBreadth?: number;

/**
 * See {@link isc.ToolStrip.vertical ToolStrip.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.ToolStrip.resizeBarSize ToolStrip.resizeBarSize}.
 */
resizeBarSize?: number;

/**
 * See {@link isc.ToolStrip.formWrapperDefaults ToolStrip.formWrapperDefaults}.
 */
formWrapperDefaults?: DynamicForm;

/**
 * See {@link isc.ToolStrip.addFormItem() ToolStrip.addFormItem()}.
 */
addFormItem?: Function;

/**
 * See {@link isc.ToolStrip.separatorClass ToolStrip.separatorClass}.
 */
separatorClass?: string;

/**
 * See {@link isc.ToolStrip.members ToolStrip.members}.
 */
members?: Canvas[];

/**
 * See {@link isc.ToolStrip.formWrapperProperties ToolStrip.formWrapperProperties}.
 */
formWrapperProperties?: DynamicForm | DynamicForm;

/**
 * See {@link isc.ToolStrip.resizeBarClass ToolStrip.resizeBarClass}.
 */
resizeBarClass?: string;

/**
 * See {@link isc.ToolStrip.separatorSize ToolStrip.separatorSize}.
 */
separatorSize?: number;

/**
 * See {@link isc.ToolStrip.height ToolStrip.height}.
 */
height?: number;

/**
 * See {@link isc.ToolStrip.formWrapperConstructor ToolStrip.formWrapperConstructor}.
 */
formWrapperConstructor?: string;

/**
 * See {@link isc.ToolStrip.styleName ToolStrip.styleName}.
 */
styleName?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * ToolStrip wraps the SmartClient widget class
 * {@link isc.ToolStrip ToolStrip} for React, allowing you to import
 * ToolStrip for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class ToolStrip extends Layout {
    props: AsComponentXML<ToolStripProps>;
}
