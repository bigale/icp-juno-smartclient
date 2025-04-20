import React from 'react';
import { DrawItem, DrawItemProps } from './DrawItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DrawLabelProps extends DrawItemProps {

/**
 * See {@link isc.DrawLabel.fontStyle DrawLabel.fontStyle}.
 */
fontStyle?: string;

/**
 * See {@link isc.DrawLabel.setContents() DrawLabel.setContents()}.
 */
setContents?: Function;

/**
 * See {@link isc.DrawLabel.setLineColor() DrawLabel.setLineColor()}.
 */
setLineColor?: Function;

/**
 * See {@link isc.DrawLabel.knobs DrawLabel.knobs}.
 */
knobs?: string[];

/**
 * See {@link isc.DrawLabel.styleName DrawLabel.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.DrawLabel.fontWeight DrawLabel.fontWeight}.
 */
fontWeight?: string;

/**
 * See {@link isc.DrawLabel.escapeContents DrawLabel.escapeContents}.
 */
escapeContents?: boolean;

/**
 * See {@link isc.DrawLabel.setStyleName() DrawLabel.setStyleName()}.
 */
setStyleName?: Function;

/**
 * See {@link isc.DrawLabel.alignment DrawLabel.alignment}.
 */
alignment?: string;

/**
 * See {@link isc.DrawLabel.editProxyConstructor DrawLabel.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.DrawLabel.fontSize DrawLabel.fontSize}.
 */
fontSize?: number;

/**
 * See {@link isc.DrawLabel.lineColor DrawLabel.lineColor}.
 */
lineColor?: string;

/**
 * See {@link isc.DrawLabel.setFontSize() DrawLabel.setFontSize()}.
 */
setFontSize?: Function;

/**
 * See {@link isc.DrawLabel.contents DrawLabel.contents}.
 */
contents?: string;

/**
 * See {@link isc.DrawLabel.setEscapeContents() DrawLabel.setEscapeContents()}.
 */
setEscapeContents?: Function;

/**
 * See {@link isc.DrawLabel.fontFamily DrawLabel.fontFamily}.
 */
fontFamily?: string;

/**
 * See {@link isc.DrawLabel.rotation DrawLabel.rotation}.
 */
rotation?: number;

/**
 * See {@link isc.DrawLabel.top DrawLabel.top}.
 */
top?: number;

/**
 * See {@link isc.DrawLabel.getCenter() DrawLabel.getCenter()}.
 */
getCenter?: Function;

/**
 * See {@link isc.DrawLabel.getBoundingBox() DrawLabel.getBoundingBox()}.
 */
getBoundingBox?: Function;

/**
 * See {@link isc.DrawLabel.left DrawLabel.left}.
 */
left?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DrawLabel wraps the SmartClient widget class
 * {@link isc.DrawLabel DrawLabel} for React, allowing you to import
 * DrawLabel for use in React JS and JSX.
 * @class
 * @extends DrawItem
 */
declare class DrawLabel extends DrawItem {
    props: AsComponentXML<DrawLabelProps>;
}
