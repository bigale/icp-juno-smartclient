import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface SummarizeValueExampleProps {

/**
 * See {@link isc.SummarizeValueExample.value SummarizeValueExample.value}.
 */
value?: any;

/**
 * See {@link isc.SummarizeValueExample.record SummarizeValueExample.record}.
 */
record?: Record;

/**
 * See {@link isc.SummarizeValueExample.summary SummarizeValueExample.summary}.
 */
summary?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SummarizeValueExample wraps the SmartClient object
 * {@link isc.SummarizeValueExample SummarizeValueExample} for React, allowing you to import
 * SummarizeValueExample for use in React JS and JSX.
 * @class
 */
declare class SummarizeValueExample extends ILogicalComponent {
    props: AsComponentXML<SummarizeValueExampleProps>;
}
