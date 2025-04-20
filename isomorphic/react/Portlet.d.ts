import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface PortletProps extends WindowProps {

/**
 * See {@link isc.Portlet.getPortalPosition() Portlet.getPortalPosition()}.
 */
getPortalPosition?: Function;

/**
 * See {@link isc.Portlet.minWidth Portlet.minWidth}.
 */
minWidth?: number;

/**
 * See {@link isc.Portlet.minHeight Portlet.minHeight}.
 */
minHeight?: number;

/**
 * See {@link isc.Portlet.close() Portlet.close()}.
 */
close?: Function;

/**
 * See {@link isc.Portlet.closeConfirmationMessage Portlet.closeConfirmationMessage}.
 */
closeConfirmationMessage?: string;

/**
 * See {@link isc.Portlet.setRowHeight() Portlet.setRowHeight()}.
 */
setRowHeight?: Function;

/**
 * See {@link isc.Portlet.getPortalLayout() Portlet.getPortalLayout()}.
 */
getPortalLayout?: Function;

/**
 * See {@link isc.Portlet.rowHeight Portlet.rowHeight}.
 */
rowHeight?: number | string;

/**
 * See {@link isc.Portlet.closeConfirmationDialogProperties Portlet.closeConfirmationDialogProperties}.
 */
closeConfirmationDialogProperties?: Dialog;

/**
 * See {@link isc.Portlet.canDrop Portlet.canDrop}.
 */
canDrop?: boolean;

/**
 * See {@link isc.Portlet.destroyOnClose Portlet.destroyOnClose}.
 */
destroyOnClose?: boolean;

/**
 * See {@link isc.Portlet.dragType Portlet.dragType}.
 */
dragType?: string;

/**
 * See {@link isc.Portlet.setHeight() Portlet.setHeight()}.
 */
setHeight?: Function;

/**
 * See {@link isc.Portlet.closeClick() Portlet.closeClick()}.
 */
closeClick?: Function;

/**
 * See {@link isc.Portlet.editProxyConstructor Portlet.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.Portlet.showCloseConfirmationMessage Portlet.showCloseConfirmationMessage}.
 */
showCloseConfirmationMessage?: boolean;

/**
 * See {@link isc.Portlet.height Portlet.height}.
 */
height?: number | string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Portlet wraps the SmartClient widget class
 * {@link isc.Portlet Portlet} for React, allowing you to import
 * Portlet for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class Portlet extends Window {
    props: AsComponentXML<PortletProps>;
}
