import React from 'react';
import { Layout, LayoutProps } from './Layout';
import { AsComponentXML } from './core/ReactComponent';


declare interface ToolbarProps extends LayoutProps {

/**
 * See {@link isc.Toolbar.itemDragResized() Toolbar.itemDragResized()}.
 */
itemDragResized?: Function;

/**
 * See {@link isc.Toolbar.canReorderItems Toolbar.canReorderItems}.
 */
canReorderItems?: boolean;

/**
 * See {@link isc.Toolbar.getButton() Toolbar.getButton()}.
 */
getButton?: Function;

/**
 * See {@link isc.Toolbar.deselectButton() Toolbar.deselectButton()}.
 */
deselectButton?: Function;

/**
 * See {@link isc.Toolbar.buttons Toolbar.buttons}.
 */
buttons?: Button[];

/**
 * See {@link isc.Toolbar.setCanResizeItems() Toolbar.setCanResizeItems()}.
 */
setCanResizeItems?: Function;

/**
 * See {@link isc.Toolbar.buttonDefaults Toolbar.buttonDefaults}.
 */
buttonDefaults?: Object;

/**
 * See {@link isc.Toolbar.addButtons() Toolbar.addButtons()}.
 */
addButtons?: Function;

/**
 * See {@link isc.Toolbar.itemDoubleClick() Toolbar.itemDoubleClick()}.
 */
itemDoubleClick?: Function;

/**
 * See {@link isc.Toolbar.itemClick() Toolbar.itemClick()}.
 */
itemClick?: Function;

/**
 * See {@link isc.Toolbar.removeButtons() Toolbar.removeButtons()}.
 */
removeButtons?: Function;

/**
 * See {@link isc.Toolbar.getButtonNumber() Toolbar.getButtonNumber()}.
 */
getButtonNumber?: Function;

/**
 * See {@link isc.Toolbar.setButtons() Toolbar.setButtons()}.
 */
setButtons?: Function;

/**
 * See {@link isc.Toolbar.canAcceptDrop Toolbar.canAcceptDrop}.
 */
canAcceptDrop?: boolean;

/**
 * See {@link isc.Toolbar.createButtonsOnInit Toolbar.createButtonsOnInit}.
 */
createButtonsOnInit?: boolean;

/**
 * See {@link isc.Toolbar.vertical Toolbar.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.Toolbar.canResizeItems Toolbar.canResizeItems}.
 */
canResizeItems?: boolean;

/**
 * See {@link isc.Toolbar.selectButton() Toolbar.selectButton()}.
 */
selectButton?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Toolbar wraps the SmartClient widget class
 * {@link isc.Toolbar Toolbar} for React, allowing you to import
 * Toolbar for use in React JS and JSX.
 * @class
 * @extends Layout
 */
declare class Toolbar extends Layout {
    props: AsComponentXML<ToolbarProps>;
}
