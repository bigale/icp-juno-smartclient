import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface FiscalYearProps {

/**
 * See {@link isc.FiscalYear.fiscalYear FiscalYear.fiscalYear}.
 */
fiscalYear?: number;

/**
 * See {@link isc.FiscalYear.year FiscalYear.year}.
 */
year?: number;

/**
 * See {@link isc.FiscalYear.month FiscalYear.month}.
 */
month?: number;

/**
 * See {@link isc.FiscalYear.date FiscalYear.date}.
 */
date?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FiscalYear wraps the SmartClient object
 * {@link isc.FiscalYear FiscalYear} for React, allowing you to import
 * FiscalYear for use in React JS and JSX.
 * @class
 */
declare class FiscalYear extends ILogicalComponent {
    props: AsComponentXML<FiscalYearProps>;
}
