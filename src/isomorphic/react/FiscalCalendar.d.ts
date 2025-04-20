import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FiscalCalendarProps {

/**
 * See {@link isc.FiscalCalendar.defaultMonth FiscalCalendar.defaultMonth}.
 */
defaultMonth?: number;

/**
 * See {@link isc.FiscalCalendar.fiscalYears FiscalCalendar.fiscalYears}.
 */
fiscalYears?: FiscalYear[];

/**
 * See {@link isc.FiscalCalendar.defaultDate FiscalCalendar.defaultDate}.
 */
defaultDate?: number;

/**
 * See {@link isc.FiscalCalendar.defaultYearMode FiscalCalendar.defaultYearMode}.
 */
defaultYearMode?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FiscalCalendar wraps the SmartClient object
 * {@link isc.FiscalCalendar FiscalCalendar} for React, allowing you to import
 * FiscalCalendar for use in React JS and JSX.
 * @class
 */
declare class FiscalCalendar extends ILogicalComponent {
    props: AsComponentXML<FiscalCalendarProps>;
}
