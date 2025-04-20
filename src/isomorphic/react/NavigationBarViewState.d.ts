import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface NavigationBarViewStateProps {

/**
 * See {@link isc.NavigationBarViewState.alwaysShowLeftButtonTitle NavigationBarViewState.alwaysShowLeftButtonTitle}.
 */
alwaysShowLeftButtonTitle?: boolean;

/**
 * See {@link isc.NavigationBarViewState.controls NavigationBarViewState.controls}.
 */
controls?: string[] | Canvas[];

/**
 * See {@link isc.NavigationBarViewState.shortLeftButtonTitle NavigationBarViewState.shortLeftButtonTitle}.
 */
shortLeftButtonTitle?: string;

/**
 * See {@link isc.NavigationBarViewState.leftButtonTitle NavigationBarViewState.leftButtonTitle}.
 */
leftButtonTitle?: string;

/**
 * See {@link isc.NavigationBarViewState.showLeftButton NavigationBarViewState.showLeftButton}.
 */
showLeftButton?: boolean;

/**
 * See {@link isc.NavigationBarViewState.title NavigationBarViewState.title}.
 */
title?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * NavigationBarViewState wraps the SmartClient object
 * {@link isc.NavigationBarViewState NavigationBarViewState} for React, allowing you to import
 * NavigationBarViewState for use in React JS and JSX.
 * @class
 */
declare class NavigationBarViewState extends ILogicalComponent {
    props: AsComponentXML<NavigationBarViewStateProps>;
}
