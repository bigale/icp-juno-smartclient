import React from 'react';
import { Flashlet, FlashletProps } from './Flashlet';
import { AsComponentXML } from './core/ReactComponent';


declare interface FusionChartProps extends FlashletProps {

/**
 * See {@link isc.FusionChart.chartURL FusionChart.chartURL}.
 */
chartURL?: string;

/**
 * See {@link isc.FusionChart.fusionVersion FusionChart.fusionVersion}.
 */
fusionVersion?: string;

/**
 * See {@link isc.FusionChart.chartsBaseURL FusionChart.chartsBaseURL}.
 */
chartsBaseURL?: string;

/**
 * See {@link isc.FusionChart.dataColors FusionChart.dataColors}.
 */
dataColors?: string[];

/**
 * See {@link isc.FusionChart.getDataColor() FusionChart.getDataColor()}.
 */
getDataColor?: Function;

/**
 * See {@link isc.FusionChart.chartProperties FusionChart.chartProperties}.
 */
chartProperties?: Object;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FusionChart wraps the SmartClient widget class
 * {@link isc.FusionChart FusionChart} for React, allowing you to import
 * FusionChart for use in React JS and JSX.
 * @class
 * @extends Flashlet
 */
declare class FusionChart extends Flashlet {
    props: AsComponentXML<FusionChartProps>;
}
