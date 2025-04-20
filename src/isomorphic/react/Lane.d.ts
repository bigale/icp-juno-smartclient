import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface LaneProps {

/**
 * See {@link isc.Lane.sublanes Lane.sublanes}.
 */
sublanes?: Lane[];

/**
 * See {@link isc.Lane.styleName Lane.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.Lane.height Lane.height}.
 */
height?: number;

/**
 * See {@link isc.Lane.title Lane.title}.
 */
title?: string;

/**
 * See {@link isc.Lane.eventStyleName Lane.eventStyleName}.
 */
eventStyleName?: string;

/**
 * See {@link isc.Lane.name Lane.name}.
 */
name?: string;

/**
 * See {@link isc.Lane.width Lane.width}.
 */
width?: number;

/**
 * See {@link isc.Lane.fieldStyleName Lane.fieldStyleName}.
 */
fieldStyleName?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Lane wraps the SmartClient object
 * {@link isc.Lane Lane} for React, allowing you to import
 * Lane for use in React JS and JSX.
 * @class
 */
declare class Lane extends ILogicalComponent {
    props: AsComponentXML<LaneProps>;
}
