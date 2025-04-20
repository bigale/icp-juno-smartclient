import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface HeaderLevelProps {

/**
 * See {@link isc.HeaderLevel.titleFormatter() HeaderLevel.titleFormatter()}.
 */
titleFormatter?: Function;

/**
 * See {@link isc.HeaderLevel.headerWidth HeaderLevel.headerWidth}.
 */
headerWidth?: number;

/**
 * See {@link isc.HeaderLevel.unit HeaderLevel.unit}.
 */
unit?: string;

/**
 * See {@link isc.HeaderLevel.titles HeaderLevel.titles}.
 */
titles?: string[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * HeaderLevel wraps the SmartClient object
 * {@link isc.HeaderLevel HeaderLevel} for React, allowing you to import
 * HeaderLevel for use in React JS and JSX.
 * @class
 */
declare class HeaderLevel extends ILogicalComponent {
    props: AsComponentXML<HeaderLevelProps>;
}
