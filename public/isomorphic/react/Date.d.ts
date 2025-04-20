import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateProps {

/**
 * See {@link isc.Date.toNormalDate() Date.toNormalDate()}.
 */
toNormalDate?: Function;

/**
 * See {@link isc.Date.getShortDayName() Date.getShortDayName()}.
 */
getShortDayName?: Function;

/**
 * See {@link isc.Date.duplicate() Date.duplicate()}.
 */
duplicate?: Function;

/**
 * See {@link isc.Date.toShortDate() Date.toShortDate()}.
 */
toShortDate?: Function;

/**
 * See {@link isc.Date.getDefaultDateSeparator() Date.getDefaultDateSeparator()}.
 */
getDefaultDateSeparator?: Function;

/**
 * See {@link isc.Date.getFiscalWeek() Date.getFiscalWeek()}.
 */
getFiscalWeek?: Function;

/**
 * See {@link isc.Date.toNormalDatetime() Date.toNormalDatetime()}.
 */
toNormalDatetime?: Function;

/**
 * See {@link isc.Date.toDateStamp() Date.toDateStamp()}.
 */
toDateStamp?: Function;

/**
 * See {@link isc.Date.getDayName() Date.getDayName()}.
 */
getDayName?: Function;

/**
 * See {@link isc.Date.getShortYear() Date.getShortYear()}.
 */
getShortYear?: Function;

/**
 * See {@link isc.Date.getMonthName() Date.getMonthName()}.
 */
getMonthName?: Function;

/**
 * See {@link isc.Date.toUSShortDate() Date.toUSShortDate()}.
 */
toUSShortDate?: Function;

/**
 * See {@link isc.Date.setFormatter() Date.setFormatter()}.
 */
setFormatter?: Function;

/**
 * See {@link isc.Date.toJapanShortDateTime() Date.toJapanShortDateTime()}.
 */
toJapanShortDateTime?: Function;

/**
 * See {@link isc.Date.toShortDateTime() Date.toShortDateTime()}.
 */
toShortDateTime?: Function;

/**
 * See {@link isc.Date.toEuropeanShortDate() Date.toEuropeanShortDate()}.
 */
toEuropeanShortDate?: Function;

/**
 * See {@link isc.Date.getShortMonthName() Date.getShortMonthName()}.
 */
getShortMonthName?: Function;

/**
 * See {@link isc.Date.toSerializeableDate() Date.toSerializeableDate()}.
 */
toSerializeableDate?: Function;

/**
 * See {@link isc.Date.getFiscalYear() Date.getFiscalYear()}.
 */
getFiscalYear?: Function;

/**
 * See {@link isc.Date.toEuropeanShortDateTime() Date.toEuropeanShortDateTime()}.
 */
toEuropeanShortDateTime?: Function;

/**
 * See {@link isc.Date.toUSShortDateTime() Date.toUSShortDateTime()}.
 */
toUSShortDateTime?: Function;

/**
 * See {@link isc.Date.setDefaultDateSeparator() Date.setDefaultDateSeparator()}.
 */
setDefaultDateSeparator?: Function;

/**
 * See {@link isc.Date.toJapanShortDate() Date.toJapanShortDate()}.
 */
toJapanShortDate?: Function;

/**
 * See {@link isc.Date.getWeek() Date.getWeek()}.
 */
getWeek?: Function;

/**
 * See {@link isc.Date.toPrettyString() Date.toPrettyString()}.
 */
toPrettyString?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Date wraps the SmartClient object
 * {@link isc.Date Date} for React, allowing you to import
 * Date for use in React JS and JSX.
 * @class
 */
declare class Date extends ILogicalComponent {
    props: AsComponentXML<DateProps>;
}
