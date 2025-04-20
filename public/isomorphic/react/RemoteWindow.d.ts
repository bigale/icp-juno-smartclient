import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface RemoteWindowProps {

/**
 * See {@link isc.RemoteWindow.isShowing() RemoteWindow.isShowing()}.
 */
isShowing?: Function;

/**
 * See {@link isc.RemoteWindow.getInfo() RemoteWindow.getInfo()}.
 */
getInfo?: Function;

/**
 * See {@link isc.RemoteWindow.move() RemoteWindow.move()}.
 */
move?: Function;

/**
 * See {@link isc.RemoteWindow.resize() RemoteWindow.resize()}.
 */
resize?: Function;

/**
 * See {@link isc.RemoteWindow.getName() RemoteWindow.getName()}.
 */
getName?: Function;

/**
 * See {@link isc.RemoteWindow.bringToFront() RemoteWindow.bringToFront()}.
 */
bringToFront?: Function;

/**
 * See {@link isc.RemoteWindow.deactivate() RemoteWindow.deactivate()}.
 */
deactivate?: Function;

/**
 * See {@link isc.RemoteWindow.getWindow() RemoteWindow.getWindow()}.
 */
getWindow?: Function;

/**
 * See {@link isc.RemoteWindow.getParent() RemoteWindow.getParent()}.
 */
getParent?: Function;

/**
 * See {@link isc.RemoteWindow.focus() RemoteWindow.focus()}.
 */
focus?: Function;

/**
 * See {@link isc.RemoteWindow.blur() RemoteWindow.blur()}.
 */
blur?: Function;

/**
 * See {@link isc.RemoteWindow.restore() RemoteWindow.restore()}.
 */
restore?: Function;

/**
 * See {@link isc.RemoteWindow.minimize() RemoteWindow.minimize()}.
 */
minimize?: Function;

/**
 * See {@link isc.RemoteWindow.show() RemoteWindow.show()}.
 */
show?: Function;

/**
 * See {@link isc.RemoteWindow.maximize() RemoteWindow.maximize()}.
 */
maximize?: Function;

/**
 * See {@link isc.RemoteWindow.getContainerWindow() RemoteWindow.getContainerWindow()}.
 */
getContainerWindow?: Function;

/**
 * See {@link isc.RemoteWindow.activate() RemoteWindow.activate()}.
 */
activate?: Function;

/**
 * See {@link isc.RemoteWindow.hide() RemoteWindow.hide()}.
 */
hide?: Function;

/**
 * See {@link isc.RemoteWindow.close() RemoteWindow.close()}.
 */
close?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RemoteWindow wraps the non-rendered SmartClient class
 * {@link isc.RemoteWindow RemoteWindow} for React, allowing you to import
 *  RemoteWindow for use in React JS and JSX.
 * @class
 * @extends ILogicalComponent
 */
declare class RemoteWindow extends ILogicalComponent {
    props: AsComponentXML<RemoteWindowProps>;
}
