import React from 'react';
import { Calendar, CalendarProps } from './Calendar';
import { AsComponentXML } from './core/ReactComponent';


declare interface TimelineProps extends CalendarProps {



children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Timeline wraps the SmartClient widget class
 * {@link isc.Timeline Timeline} for React, allowing you to import
 * Timeline for use in React JS and JSX.
 * @class
 * @extends Calendar
 */
declare class Timeline extends Calendar {
    props: AsComponentXML<TimelineProps>;
}
