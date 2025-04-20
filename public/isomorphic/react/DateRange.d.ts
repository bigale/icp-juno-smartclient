import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateRangeProps {

/**
 * See {@link isc.DateRange.end DateRange.end}.
 */
end?: RelativeDate | Date;

/**
 * See {@link isc.DateRange.start DateRange.start}.
 */
start?: RelativeDate | Date;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateRange wraps the SmartClient object
 * {@link isc.DateRange DateRange} for React, allowing you to import
 * DateRange for use in React JS and JSX.
 * @class
 */
declare class DateRange extends ILogicalComponent {
    props: AsComponentXML<DateRangeProps>;
}
