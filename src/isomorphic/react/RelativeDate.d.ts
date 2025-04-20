import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface RelativeDateProps {

/**
 * See {@link isc.RelativeDate.value RelativeDate.value}.
 */
value?: string | string;

/**
 * See {@link isc.RelativeDate.rangePosition RelativeDate.rangePosition}.
 */
rangePosition?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RelativeDate wraps the SmartClient object
 * {@link isc.RelativeDate RelativeDate} for React, allowing you to import
 * RelativeDate for use in React JS and JSX.
 * @class
 */
declare class RelativeDate extends ILogicalComponent {
    props: AsComponentXML<RelativeDateProps>;
}
