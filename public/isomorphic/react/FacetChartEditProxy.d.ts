import React from 'react';
import { EditProxy, EditProxyProps } from './EditProxy';
import { AsComponentXML } from './core/ReactComponent';


declare interface FacetChartEditProxyProps extends EditProxyProps {

/**
 * See {@link isc.FacetChartEditProxy.dataSeparatorChar FacetChartEditProxy.dataSeparatorChar}.
 */
dataSeparatorChar?: string;

/**
 * See {@link isc.FacetChartEditProxy.setInlineEditText() FacetChartEditProxy.setInlineEditText()}.
 */
setInlineEditText?: Function;

/**
 * See {@link isc.FacetChartEditProxy.dataEscapeChar FacetChartEditProxy.dataEscapeChar}.
 */
dataEscapeChar?: string;

/**
 * See {@link isc.FacetChartEditProxy.dataDisplaySeparatorChar FacetChartEditProxy.dataDisplaySeparatorChar}.
 */
dataDisplaySeparatorChar?: string;

/**
 * See {@link isc.FacetChartEditProxy.getInlineEditText() FacetChartEditProxy.getInlineEditText()}.
 */
getInlineEditText?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FacetChartEditProxy wraps the SmartClient widget class
 * {@link isc.FacetChartEditProxy FacetChartEditProxy} for React, allowing you to import
 * FacetChartEditProxy for use in React JS and JSX.
 * @class
 * @extends EditProxy
 */
declare class FacetChartEditProxy extends EditProxy {
    props: AsComponentXML<FacetChartEditProxyProps>;
}
