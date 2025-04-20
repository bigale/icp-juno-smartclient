import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface QualityIndicatedLocatorProps {

/**
 * See {@link isc.QualityIndicatedLocator.locator QualityIndicatedLocator.locator}.
 */
locator?: string;

/**
 * See {@link isc.QualityIndicatedLocator.globalID QualityIndicatedLocator.globalID}.
 */
globalID?: string;

/**
 * See {@link isc.QualityIndicatedLocator.containsGlobalId QualityIndicatedLocator.containsGlobalId}.
 */
containsGlobalId?: boolean;

/**
 * See {@link isc.QualityIndicatedLocator.firstParentOfIndex QualityIndicatedLocator.firstParentOfIndex}.
 */
firstParentOfIndex?: string;

/**
 * See {@link isc.QualityIndicatedLocator.containsIndices QualityIndicatedLocator.containsIndices}.
 */
containsIndices?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * QualityIndicatedLocator wraps the SmartClient object
 * {@link isc.QualityIndicatedLocator QualityIndicatedLocator} for React, allowing you to import
 * QualityIndicatedLocator for use in React JS and JSX.
 * @class
 */
declare class QualityIndicatedLocator extends ILogicalComponent {
    props: AsComponentXML<QualityIndicatedLocatorProps>;
}
