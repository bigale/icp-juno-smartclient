import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface HeaderSpanProps {

/**
 * See {@link isc.HeaderSpan.title HeaderSpan.title}.
 */
title?: string;

/**
 * See {@link isc.HeaderSpan.wrap HeaderSpan.wrap}.
 */
wrap?: boolean;

/**
 * See {@link isc.HeaderSpan.spans HeaderSpan.spans}.
 */
spans?: HeaderSpan[];

/**
 * See {@link isc.HeaderSpan.height HeaderSpan.height}.
 */
height?: number;

/**
 * See {@link isc.HeaderSpan.headerBaseStyle HeaderSpan.headerBaseStyle}.
 */
headerBaseStyle?: string;

/**
 * See {@link isc.HeaderSpan.headerTitleStyle HeaderSpan.headerTitleStyle}.
 */
headerTitleStyle?: string;

/**
 * See {@link isc.HeaderSpan.valign HeaderSpan.valign}.
 */
valign?: string;

/**
 * See {@link isc.HeaderSpan.align HeaderSpan.align}.
 */
align?: string;

/**
 * See {@link isc.HeaderSpan.name HeaderSpan.name}.
 */
name?: string;

/**
 * See {@link isc.HeaderSpan.fields HeaderSpan.fields}.
 */
fields?: string[];

/**
 * See {@link isc.HeaderSpan.headerTitle HeaderSpan.headerTitle}.
 */
headerTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HeaderSpan wraps the SmartClient object
 * {@link isc.HeaderSpan HeaderSpan} for React, allowing you to import
 * HeaderSpan for use in React JS and JSX.
 * @class
 */
declare class HeaderSpan extends ILogicalComponent {
    props: AsComponentXML<HeaderSpanProps>;
}
