import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface MetricSettingsProps {

/**
 * See {@link isc.MetricSettings.filled MetricSettings.filled}.
 */
filled?: boolean;

/**
 * See {@link isc.MetricSettings.gradationZeroLineProperties MetricSettings.gradationZeroLineProperties}.
 */
gradationZeroLineProperties?: DrawLine;

/**
 * See {@link isc.MetricSettings.logScale MetricSettings.logScale}.
 */
logScale?: boolean;

/**
 * See {@link isc.MetricSettings.fixedFacetValue MetricSettings.fixedFacetValue}.
 */
fixedFacetValue?: string | number;

/**
 * See {@link isc.MetricSettings.showAxisLine MetricSettings.showAxisLine}.
 */
showAxisLine?: boolean;

/**
 * See {@link isc.MetricSettings.valueLineProperties MetricSettings.valueLineProperties}.
 */
valueLineProperties?: DrawLine;

/**
 * See {@link isc.MetricSettings.setStacked() MetricSettings.setStacked()}.
 */
setStacked?: Function;

/**
 * See {@link isc.MetricSettings.shadowProperties MetricSettings.shadowProperties}.
 */
shadowProperties?: DrawOval;

/**
 * See {@link isc.MetricSettings.gradationLineProperties MetricSettings.gradationLineProperties}.
 */
gradationLineProperties?: DrawLine;

/**
 * See {@link isc.MetricSettings.proportionalAxisLabel MetricSettings.proportionalAxisLabel}.
 */
proportionalAxisLabel?: string;

/**
 * See {@link isc.MetricSettings.axisLineProperties MetricSettings.axisLineProperties}.
 */
axisLineProperties?: DrawLine;

/**
 * See {@link isc.MetricSettings.dataLineProperties MetricSettings.dataLineProperties}.
 */
dataLineProperties?: DrawLine;

/**
 * See {@link isc.MetricSettings.dataOutlineProperties MetricSettings.dataOutlineProperties}.
 */
dataOutlineProperties?: DrawItem;

/**
 * See {@link isc.MetricSettings.showShadows MetricSettings.showShadows}.
 */
showShadows?: boolean;

/**
 * See {@link isc.MetricSettings.dataPointSize MetricSettings.dataPointSize}.
 */
dataPointSize?: number;

/**
 * See {@link isc.MetricSettings.showValueOnHover MetricSettings.showValueOnHover}.
 */
showValueOnHover?: boolean;

/**
 * See {@link isc.MetricSettings.getPointHoverHTML() MetricSettings.getPointHoverHTML()}.
 */
getPointHoverHTML?: Function;

/**
 * See {@link isc.MetricSettings.matchGradations MetricSettings.matchGradations}.
 */
matchGradations?: string;

/**
 * See {@link isc.MetricSettings.chartType MetricSettings.chartType}.
 */
chartType?: string;

/**
 * See {@link isc.MetricSettings.getDataGradient() MetricSettings.getDataGradient()}.
 */
getDataGradient?: Function;

/**
 * See {@link isc.MetricSettings.formatAxisValue() MetricSettings.formatAxisValue()}.
 */
formatAxisValue?: Function;

/**
 * See {@link isc.MetricSettings.axisStartValue MetricSettings.axisStartValue}.
 */
axisStartValue?: number;

/**
 * See {@link isc.MetricSettings.setChartType() MetricSettings.setChartType()}.
 */
setChartType?: Function;

/**
 * See {@link isc.MetricSettings.dataColors MetricSettings.dataColors}.
 */
dataColors?: string[];

/**
 * See {@link isc.MetricSettings.getDataLineWidth() MetricSettings.getDataLineWidth()}.
 */
getDataLineWidth?: Function;

/**
 * See {@link isc.MetricSettings.formatDataValue() MetricSettings.formatDataValue()}.
 */
formatDataValue?: Function;

/**
 * See {@link isc.MetricSettings.proportional MetricSettings.proportional}.
 */
proportional?: boolean;

/**
 * See {@link isc.MetricSettings.gradationLabelProperties MetricSettings.gradationLabelProperties}.
 */
gradationLabelProperties?: DrawLabel;

/**
 * See {@link isc.MetricSettings.valueAxisLabelProperties MetricSettings.valueAxisLabelProperties}.
 */
valueAxisLabelProperties?: DrawLabel;

/**
 * See {@link isc.MetricSettings.getYCoord() MetricSettings.getYCoord()}.
 */
getYCoord?: Function;

/**
 * See {@link isc.MetricSettings.showValueAxisLabel MetricSettings.showValueAxisLabel}.
 */
showValueAxisLabel?: boolean;

/**
 * See {@link isc.MetricSettings.dataShapeProperties MetricSettings.dataShapeProperties}.
 */
dataShapeProperties?: DrawPath;

/**
 * See {@link isc.MetricSettings.minDataSpreadPercent MetricSettings.minDataSpreadPercent}.
 */
minDataSpreadPercent?: number;

/**
 * See {@link isc.MetricSettings.stacked MetricSettings.stacked}.
 */
stacked?: boolean;

/**
 * See {@link isc.MetricSettings.pointClick() MetricSettings.pointClick()}.
 */
pointClick?: Function;

/**
 * See {@link isc.MetricSettings.showAxis MetricSettings.showAxis}.
 */
showAxis?: boolean;

/**
 * See {@link isc.MetricSettings.getDataLineColor() MetricSettings.getDataLineColor()}.
 */
getDataLineColor?: Function;

/**
 * See {@link isc.MetricSettings.logBase MetricSettings.logBase}.
 */
logBase?: number;

/**
 * See {@link isc.MetricSettings.dataPointProperties MetricSettings.dataPointProperties}.
 */
dataPointProperties?: DrawItem;

/**
 * See {@link isc.MetricSettings.setDataColors() MetricSettings.setDataColors()}.
 */
setDataColors?: Function;

/**
 * See {@link isc.MetricSettings.setProportional() MetricSettings.setProportional()}.
 */
setProportional?: Function;

/**
 * See {@link isc.MetricSettings.showDataPoints MetricSettings.showDataPoints}.
 */
showDataPoints?: boolean;

/**
 * See {@link isc.MetricSettings.getDataColor() MetricSettings.getDataColor()}.
 */
getDataColor?: Function;

/**
 * See {@link isc.MetricSettings.useLogGradations MetricSettings.useLogGradations}.
 */
useLogGradations?: boolean;

/**
 * See {@link isc.MetricSettings.getGradations() MetricSettings.getGradations()}.
 */
getGradations?: Function;

/**
 * See {@link isc.MetricSettings.xAxisEndValue MetricSettings.xAxisEndValue}.
 */
xAxisEndValue?: number;

/**
 * See {@link isc.MetricSettings.legendLabel MetricSettings.legendLabel}.
 */
legendLabel?: string;

/**
 * See {@link isc.MetricSettings.decimalPrecision MetricSettings.decimalPrecision}.
 */
decimalPrecision?: number;

/**
 * See {@link isc.MetricSettings.getXCoord() MetricSettings.getXCoord()}.
 */
getXCoord?: Function;

/**
 * See {@link isc.MetricSettings.setFilled() MetricSettings.setFilled()}.
 */
setFilled?: Function;

/**
 * See {@link isc.MetricSettings.showDataValues MetricSettings.showDataValues}.
 */
showDataValues?: boolean;

/**
 * See {@link isc.MetricSettings.multiFacet MetricSettings.multiFacet}.
 */
multiFacet?: boolean;

/**
 * See {@link isc.MetricSettings.valueTitle MetricSettings.valueTitle}.
 */
valueTitle?: string;

/**
 * See {@link isc.MetricSettings.logGradations MetricSettings.logGradations}.
 */
logGradations?: number[];


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MetricSettings wraps the SmartClient object
 * {@link isc.MetricSettings MetricSettings} for React, allowing you to import
 * MetricSettings for use in React JS and JSX.
 * @class
 */
declare class MetricSettings extends ILogicalComponent {
    props: AsComponentXML<MetricSettingsProps>;
}
