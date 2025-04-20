import React from 'react';
import { Window, WindowProps } from './Window';
import { AsComponentXML } from './core/ReactComponent';


declare interface TourWindowProps extends WindowProps {

/**
 * See {@link isc.TourWindow.contentComponents TourWindow.contentComponents}.
 */
contentComponents?: Canvas[];

/**
 * See {@link isc.TourWindow.showCancelButton TourWindow.showCancelButton}.
 */
showCancelButton?: boolean;

/**
 * See {@link isc.TourWindow.actionButtonProperties TourWindow.actionButtonProperties}.
 */
actionButtonProperties?: IButton;

/**
 * See {@link isc.TourWindow.actionButtonTitle TourWindow.actionButtonTitle}.
 */
actionButtonTitle?: string;

/**
 * See {@link isc.TourWindow.cancelButtonProperties TourWindow.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.TourWindow.cancelClick() TourWindow.cancelClick()}.
 */
cancelClick?: Function;

/**
 * See {@link isc.TourWindow.contents TourWindow.contents}.
 */
contents?: string;

/**
 * See {@link isc.TourWindow.actionClick() TourWindow.actionClick()}.
 */
actionClick?: Function;

/**
 * See {@link isc.TourWindow.title TourWindow.title}.
 */
title?: string;

/**
 * See {@link isc.TourWindow.showProgressPercentInline TourWindow.showProgressPercentInline}.
 */
showProgressPercentInline?: boolean;

/**
 * See {@link isc.TourWindow.showProgressPercent TourWindow.showProgressPercent}.
 */
showProgressPercent?: boolean;

/**
 * See {@link isc.TourWindow.showProgress TourWindow.showProgress}.
 */
showProgress?: boolean;

/**
 * See {@link isc.TourWindow.cancelButtonPrompt TourWindow.cancelButtonPrompt}.
 */
cancelButtonPrompt?: string;

/**
 * See {@link isc.TourWindow.actionButtonURL TourWindow.actionButtonURL}.
 */
actionButtonURL?: string;

/**
 * See {@link isc.TourWindow.cancelButtonDisabled TourWindow.cancelButtonDisabled}.
 */
cancelButtonDisabled?: boolean;

/**
 * See {@link isc.TourWindow.showActionButton TourWindow.showActionButton}.
 */
showActionButton?: boolean;

/**
 * See {@link isc.TourWindow.cancelButtonTitle TourWindow.cancelButtonTitle}.
 */
cancelButtonTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TourWindow wraps the SmartClient widget class
 * {@link isc.TourWindow TourWindow} for React, allowing you to import
 * TourWindow for use in React JS and JSX.
 * @class
 * @extends Window
 */
declare class TourWindow extends Window {
    props: AsComponentXML<TourWindowProps>;
}
