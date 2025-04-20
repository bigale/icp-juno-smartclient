import React from 'react';
import { ToolStrip, ToolStripProps } from './ToolStrip';
import { AsComponentXML } from './core/ReactComponent';


declare interface HeaderProps extends ToolStripProps {

/**
 * See {@link isc.Header.setTitle() Header.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.Header.titleLabelProperties Header.titleLabelProperties}.
 */
titleLabelProperties?: Label;

/**
 * See {@link isc.Header.title Header.title}.
 */
title?: string;

/**
 * See {@link isc.Header.editProxyConstructor Header.editProxyConstructor}.
 */
editProxyConstructor?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Header wraps the SmartClient widget class
 * {@link isc.Header Header} for React, allowing you to import
 * Header for use in React JS and JSX.
 * @class
 * @extends ToolStrip
 */
declare class Header extends ToolStrip {
    props: AsComponentXML<HeaderProps>;
}
