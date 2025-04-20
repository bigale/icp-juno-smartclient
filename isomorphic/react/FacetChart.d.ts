import React from 'react';
import { DrawPane, DrawPaneProps } from './DrawPane';
import { AsComponentXML } from './core/ReactComponent';


declare interface FacetChartProps extends DrawPaneProps {

/**
 * See {@link isc.FacetChart.facetFields FacetChart.facetFields}.
 */
facetFields?: string[] | string;

/**
 * See {@link isc.FacetChart.logBase FacetChart.logBase}.
 */
logBase?: number;

/**
 * See {@link isc.FacetChart.autoSortBubblePoints FacetChart.autoSortBubblePoints}.
 */
autoSortBubblePoints?: boolean;

/**
 * See {@link isc.FacetChart.extraAxisLabelAlign FacetChart.extraAxisLabelAlign}.
 */
extraAxisLabelAlign?: string;

/**
 * See {@link isc.FacetChart.showRegressionLine FacetChart.showRegressionLine}.
 */
showRegressionLine?: boolean;

/**
 * See {@link isc.FacetChart.valueAxisLabelProperties FacetChart.valueAxisLabelProperties}.
 */
valueAxisLabelProperties?: DrawLabel;

/**
 * See {@link isc.FacetChart.facets FacetChart.facets}.
 */
facets?: Facet[] | Facet;

/**
 * See {@link isc.FacetChart.getDataLineWidth() FacetChart.getDataLineWidth()}.
 */
getDataLineWidth?: Function;

/**
 * See {@link isc.FacetChart.logScalePointColor FacetChart.logScalePointColor}.
 */
logScalePointColor?: boolean;

/**
 * See {@link isc.FacetChart.colorMutePercent FacetChart.colorMutePercent}.
 */
colorMutePercent?: number;

/**
 * See {@link isc.FacetChart.dataPointProperties FacetChart.dataPointProperties}.
 */
dataPointProperties?: DrawItem;

/**
 * See {@link isc.FacetChart.radarRotateLabels FacetChart.radarRotateLabels}.
 */
radarRotateLabels?: string;

/**
 * See {@link isc.FacetChart.canZoom FacetChart.canZoom}.
 */
canZoom?: boolean;

/**
 * See {@link isc.FacetChart.showDataValuesMode FacetChart.showDataValuesMode}.
 */
showDataValuesMode?: string;

/**
 * See {@link isc.FacetChart.tickMarkToValueAxisMargin FacetChart.tickMarkToValueAxisMargin}.
 */
tickMarkToValueAxisMargin?: number;

/**
 * See {@link isc.FacetChart.setDataColors() FacetChart.setDataColors()}.
 */
setDataColors?: Function;

/**
 * See {@link isc.FacetChart.showValueOnHover FacetChart.showValueOnHover}.
 */
showValueOnHover?: boolean;

/**
 * See {@link isc.FacetChart.maxBarThickness FacetChart.maxBarThickness}.
 */
maxBarThickness?: number;

/**
 * See {@link isc.FacetChart.drawTitleBackground FacetChart.drawTitleBackground}.
 */
drawTitleBackground?: boolean;

/**
 * See {@link isc.FacetChart.standardDeviations FacetChart.standardDeviations}.
 */
standardDeviations?: number[];

/**
 * See {@link isc.FacetChart.gradationZeroLineProperties FacetChart.gradationZeroLineProperties}.
 */
gradationZeroLineProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.hoverRectProperties FacetChart.hoverRectProperties}.
 */
hoverRectProperties?: DrawRect;

/**
 * See {@link isc.FacetChart.getMinChartHeight() FacetChart.getMinChartHeight()}.
 */
getMinChartHeight?: Function;

/**
 * See {@link isc.FacetChart.dataLabelFacetsMargin FacetChart.dataLabelFacetsMargin}.
 */
dataLabelFacetsMargin?: string;

/**
 * See {@link isc.FacetChart.lowErrorMetric FacetChart.lowErrorMetric}.
 */
lowErrorMetric?: string;

/**
 * See {@link isc.FacetChart.legendLabelProperties FacetChart.legendLabelProperties}.
 */
legendLabelProperties?: DrawLabel;

/**
 * See {@link isc.FacetChart.drawTitleBoundary FacetChart.drawTitleBoundary}.
 */
drawTitleBoundary?: boolean;

/**
 * See {@link isc.FacetChart.scaleStartColor FacetChart.scaleStartColor}.
 */
scaleStartColor?: string;

/**
 * See {@link isc.FacetChart.getMinContentWidth() FacetChart.getMinContentWidth()}.
 */
getMinContentWidth?: Function;

/**
 * See {@link isc.FacetChart.getChartWidth() FacetChart.getChartWidth()}.
 */
getChartWidth?: Function;

/**
 * See {@link isc.FacetChart.legendRectHeight FacetChart.legendRectHeight}.
 */
legendRectHeight?: number;

/**
 * See {@link isc.FacetChart.logScale FacetChart.logScale}.
 */
logScale?: boolean;

/**
 * See {@link isc.FacetChart.legendAlign FacetChart.legendAlign}.
 */
legendAlign?: string;

/**
 * See {@link isc.FacetChart.dataLineType FacetChart.dataLineType}.
 */
dataLineType?: string;

/**
 * See {@link isc.FacetChart.getMax() FacetChart.getMax()}.
 */
getMax?: Function;

/**
 * See {@link isc.FacetChart.logGradations FacetChart.logGradations}.
 */
logGradations?: number[];

/**
 * See {@link isc.FacetChart.zoomTo() FacetChart.zoomTo()}.
 */
zoomTo?: Function;

/**
 * See {@link isc.FacetChart.shadowProperties FacetChart.shadowProperties}.
 */
shadowProperties?: DrawOval;

/**
 * See {@link isc.FacetChart.getMean() FacetChart.getMean()}.
 */
getMean?: Function;

/**
 * See {@link isc.FacetChart.dataPointSize FacetChart.dataPointSize}.
 */
dataPointSize?: number;

/**
 * See {@link isc.FacetChart.valueLineProperties FacetChart.valueLineProperties}.
 */
valueLineProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.allowedChartTypes FacetChart.allowedChartTypes}.
 */
allowedChartTypes?: string[];

/**
 * See {@link isc.FacetChart.getPercentile() FacetChart.getPercentile()}.
 */
getPercentile?: Function;

/**
 * See {@link isc.FacetChart.setOtherAxisGradationTimes() FacetChart.setOtherAxisGradationTimes()}.
 */
setOtherAxisGradationTimes?: Function;

/**
 * See {@link isc.FacetChart.dataShapeProperties FacetChart.dataShapeProperties}.
 */
dataShapeProperties?: DrawPath;

/**
 * See {@link isc.FacetChart.tickLength FacetChart.tickLength}.
 */
tickLength?: number;

/**
 * See {@link isc.FacetChart.dataMargin FacetChart.dataMargin}.
 */
dataMargin?: number;

/**
 * See {@link isc.FacetChart.getDataGradient() FacetChart.getDataGradient()}.
 */
getDataGradient?: Function;

/**
 * See {@link isc.FacetChart.zoomChanged() FacetChart.zoomChanged()}.
 */
zoomChanged?: Function;

/**
 * See {@link isc.FacetChart.setData() FacetChart.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.FacetChart.showScatterLines FacetChart.showScatterLines}.
 */
showScatterLines?: boolean;

/**
 * See {@link isc.FacetChart.getLegendFacet() FacetChart.getLegendFacet()}.
 */
getLegendFacet?: Function;

/**
 * See {@link isc.FacetChart.brightenPercent FacetChart.brightenPercent}.
 */
brightenPercent?: number;

/**
 * See {@link isc.FacetChart.gradationGaps FacetChart.gradationGaps}.
 */
gradationGaps?: number[];

/**
 * See {@link isc.FacetChart.chartRectMargin FacetChart.chartRectMargin}.
 */
chartRectMargin?: number;

/**
 * See {@link isc.FacetChart.autoScrollData FacetChart.autoScrollData}.
 */
autoScrollData?: boolean;

/**
 * See {@link isc.FacetChart.dataFetchMode FacetChart.dataFetchMode}.
 */
dataFetchMode?: string;

/**
 * See {@link isc.FacetChart.radialLabelOffset FacetChart.radialLabelOffset}.
 */
radialLabelOffset?: number;

/**
 * See {@link isc.FacetChart.allowBubbleGradients FacetChart.allowBubbleGradients}.
 */
allowBubbleGradients?: boolean;

/**
 * See {@link isc.FacetChart.showPointSizeLegend FacetChart.showPointSizeLegend}.
 */
showPointSizeLegend?: boolean;

/**
 * See {@link isc.FacetChart.formatDataValue() FacetChart.formatDataValue()}.
 */
formatDataValue?: Function;

/**
 * See {@link isc.FacetChart.showStatisticsOverData FacetChart.showStatisticsOverData}.
 */
showStatisticsOverData?: boolean;

/**
 * See {@link isc.FacetChart.legendMargin FacetChart.legendMargin}.
 */
legendMargin?: number;

/**
 * See {@link isc.FacetChart.getPolynomialRegressionFunction() FacetChart.getPolynomialRegressionFunction()}.
 */
getPolynomialRegressionFunction?: Function;

/**
 * See {@link isc.FacetChart.getDataLabelHoverHTML() FacetChart.getDataLabelHoverHTML()}.
 */
getDataLabelHoverHTML?: Function;

/**
 * See {@link isc.FacetChart.setOtherAxisPixelsPerGradation() FacetChart.setOtherAxisPixelsPerGradation()}.
 */
setOtherAxisPixelsPerGradation?: Function;

/**
 * See {@link isc.FacetChart.centerLegend FacetChart.centerLegend}.
 */
centerLegend?: boolean;

/**
 * See {@link isc.FacetChart.titleProperties FacetChart.titleProperties}.
 */
titleProperties?: DrawLabel;

/**
 * See {@link isc.FacetChart.getMin() FacetChart.getMin()}.
 */
getMin?: Function;

/**
 * See {@link isc.FacetChart.xAxisMetric FacetChart.xAxisMetric}.
 */
xAxisMetric?: string;

/**
 * See {@link isc.FacetChart.fetchRequestProperties FacetChart.fetchRequestProperties}.
 */
fetchRequestProperties?: DSRequest;

/**
 * See {@link isc.FacetChart.showXTicks FacetChart.showXTicks}.
 */
showXTicks?: boolean;

/**
 * See {@link isc.FacetChart.setTickLength() FacetChart.setTickLength()}.
 */
setTickLength?: Function;

/**
 * See {@link isc.FacetChart.getDrawnValue() FacetChart.getDrawnValue()}.
 */
getDrawnValue?: Function;

/**
 * See {@link isc.FacetChart.zoomSelectionChartProperties FacetChart.zoomSelectionChartProperties}.
 */
zoomSelectionChartProperties?: FacetChart;

/**
 * See {@link isc.FacetChart.formatSegmentLabel() FacetChart.formatSegmentLabel()}.
 */
formatSegmentLabel?: Function;

/**
 * See {@link isc.FacetChart.getVariance() FacetChart.getVariance()}.
 */
getVariance?: Function;

/**
 * See {@link isc.FacetChart.regressionPolynomialDegree FacetChart.regressionPolynomialDegree}.
 */
regressionPolynomialDegree?: number;

/**
 * See {@link isc.FacetChart.fetchRelatedData() FacetChart.fetchRelatedData()}.
 */
fetchRelatedData?: Function;

/**
 * See {@link isc.FacetChart.setAutoScrollData() FacetChart.setAutoScrollData()}.
 */
setAutoScrollData?: Function;

/**
 * See {@link isc.FacetChart.getNearestDrawnValues() FacetChart.getNearestDrawnValues()}.
 */
getNearestDrawnValues?: Function;

/**
 * See {@link isc.FacetChart.legendRectProperties FacetChart.legendRectProperties}.
 */
legendRectProperties?: DrawRect;

/**
 * See {@link isc.FacetChart.showDataPoints FacetChart.showDataPoints}.
 */
showDataPoints?: boolean;

/**
 * See {@link isc.FacetChart.getChartLeft() FacetChart.getChartLeft()}.
 */
getChartLeft?: Function;

/**
 * See {@link isc.FacetChart.showStandardDeviationLines FacetChart.showStandardDeviationLines}.
 */
showStandardDeviationLines?: boolean;

/**
 * See {@link isc.FacetChart.minDataPointSize FacetChart.minDataPointSize}.
 */
minDataPointSize?: number;

/**
 * See {@link isc.FacetChart.getFacetValue() FacetChart.getFacetValue()}.
 */
getFacetValue?: Function;

/**
 * See {@link isc.FacetChart.setZIndexMetric() FacetChart.setZIndexMetric()}.
 */
setZIndexMetric?: Function;

/**
 * See {@link isc.FacetChart.barProperties FacetChart.barProperties}.
 */
barProperties?: DrawRect;

/**
 * See {@link isc.FacetChart.hoverLabelProperties FacetChart.hoverLabelProperties}.
 */
hoverLabelProperties?: DrawLabel;

/**
 * See {@link isc.FacetChart.setAutoScrollContent() FacetChart.setAutoScrollContent()}.
 */
setAutoScrollContent?: Function;

/**
 * See {@link isc.FacetChart.setPixelsPerGradation() FacetChart.setPixelsPerGradation()}.
 */
setPixelsPerGradation?: Function;

/**
 * See {@link isc.FacetChart.pieBorderProperties FacetChart.pieBorderProperties}.
 */
pieBorderProperties?: DrawOval;

/**
 * See {@link isc.FacetChart.getMinChartWidth() FacetChart.getMinChartWidth()}.
 */
getMinChartWidth?: Function;

/**
 * See {@link isc.FacetChart.getChartHeight() FacetChart.getChartHeight()}.
 */
getChartHeight?: Function;

/**
 * See {@link isc.FacetChart.autoScrollContent FacetChart.autoScrollContent}.
 */
autoScrollContent?: boolean;

/**
 * See {@link isc.FacetChart.showDataLabels FacetChart.showDataLabels}.
 */
showDataLabels?: boolean;

/**
 * See {@link isc.FacetChart.rotateDataValues FacetChart.rotateDataValues}.
 */
rotateDataValues?: string;

/**
 * See {@link isc.FacetChart.minBarThickness FacetChart.minBarThickness}.
 */
minBarThickness?: number;

/**
 * See {@link isc.FacetChart.setShowYTicks() FacetChart.setShowYTicks()}.
 */
setShowYTicks?: Function;

/**
 * See {@link isc.FacetChart.getSimpleLinearRegressionFunction() FacetChart.getSimpleLinearRegressionFunction()}.
 */
getSimpleLinearRegressionFunction?: Function;

/**
 * See {@link isc.FacetChart.valueProperty FacetChart.valueProperty}.
 */
valueProperty?: string;

/**
 * See {@link isc.FacetChart.majorTickGradations FacetChart.majorTickGradations}.
 */
majorTickGradations?: number[];

/**
 * See {@link isc.FacetChart.labelCollapseMode FacetChart.labelCollapseMode}.
 */
labelCollapseMode?: string;

/**
 * See {@link isc.FacetChart.getNearestDrawnValue() FacetChart.getNearestDrawnValue()}.
 */
getNearestDrawnValue?: Function;

/**
 * See {@link isc.FacetChart.gradationTickMarkLength FacetChart.gradationTickMarkLength}.
 */
gradationTickMarkLength?: number;

/**
 * See {@link isc.FacetChart.titleBoundaryProperties FacetChart.titleBoundaryProperties}.
 */
titleBoundaryProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.xAxisStartValue FacetChart.xAxisStartValue}.
 */
xAxisStartValue?: number | Date;

/**
 * See {@link isc.FacetChart.setZoomEndValue() FacetChart.setZoomEndValue()}.
 */
setZoomEndValue?: Function;

/**
 * See {@link isc.FacetChart.minChartHeight FacetChart.minChartHeight}.
 */
minChartHeight?: number;

/**
 * See {@link isc.FacetChart.getDrawnValues() FacetChart.getDrawnValues()}.
 */
getDrawnValues?: Function;

/**
 * See {@link isc.FacetChart.showDataAxisLabel FacetChart.showDataAxisLabel}.
 */
showDataAxisLabel?: boolean;

/**
 * See {@link isc.FacetChart.formatStringFacetValueIds FacetChart.formatStringFacetValueIds}.
 */
formatStringFacetValueIds?: boolean;

/**
 * See {@link isc.FacetChart.pixelsPerGradation FacetChart.pixelsPerGradation}.
 */
pixelsPerGradation?: number;

/**
 * See {@link isc.FacetChart.endValueMetric FacetChart.endValueMetric}.
 */
endValueMetric?: string;

/**
 * See {@link isc.FacetChart.hoverLabelPadding FacetChart.hoverLabelPadding}.
 */
hoverLabelPadding?: number;

/**
 * See {@link isc.FacetChart.majorTickTimeIntervals FacetChart.majorTickTimeIntervals}.
 */
majorTickTimeIntervals?: string[];

/**
 * See {@link isc.FacetChart.brightenAllOnHover FacetChart.brightenAllOnHover}.
 */
brightenAllOnHover?: boolean;

/**
 * See {@link isc.FacetChart.pointColorLogBase FacetChart.pointColorLogBase}.
 */
pointColorLogBase?: number;

/**
 * See {@link isc.FacetChart.showDetailFields FacetChart.showDetailFields}.
 */
showDetailFields?: boolean;

/**
 * See {@link isc.FacetChart.useSymmetricStandardDeviations FacetChart.useSymmetricStandardDeviations}.
 */
useSymmetricStandardDeviations?: boolean;

/**
 * See {@link isc.FacetChart.showLegend FacetChart.showLegend}.
 */
showLegend?: boolean;

/**
 * See {@link isc.FacetChart.gradationLineProperties FacetChart.gradationLineProperties}.
 */
gradationLineProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.titlePadding FacetChart.titlePadding}.
 */
titlePadding?: number;

/**
 * See {@link isc.FacetChart.axisStartValue FacetChart.axisStartValue}.
 */
axisStartValue?: number;

/**
 * See {@link isc.FacetChart.getPrintHTML() FacetChart.getPrintHTML()}.
 */
getPrintHTML?: Function;

/**
 * See {@link isc.FacetChart.zoomStartPosition FacetChart.zoomStartPosition}.
 */
zoomStartPosition?: string;

/**
 * See {@link isc.FacetChart.pieLabelLineExtent FacetChart.pieLabelLineExtent}.
 */
pieLabelLineExtent?: number;

/**
 * See {@link isc.FacetChart.legendHover() FacetChart.legendHover()}.
 */
legendHover?: Function;

/**
 * See {@link isc.FacetChart.setProportional() FacetChart.setProportional()}.
 */
setProportional?: Function;

/**
 * See {@link isc.FacetChart.getFacet() FacetChart.getFacet()}.
 */
getFacet?: Function;

/**
 * See {@link isc.FacetChart.scaleEndColor FacetChart.scaleEndColor}.
 */
scaleEndColor?: string;

/**
 * See {@link isc.FacetChart.autoScrollDataApproach FacetChart.autoScrollDataApproach}.
 */
autoScrollDataApproach?: string;

/**
 * See {@link isc.FacetChart.dataLineProperties FacetChart.dataLineProperties}.
 */
dataLineProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.yAxisLabelAlign FacetChart.yAxisLabelAlign}.
 */
yAxisLabelAlign?: string;

/**
 * See {@link isc.FacetChart.minorTickLength FacetChart.minorTickLength}.
 */
minorTickLength?: number;

/**
 * See {@link isc.FacetChart.minXDataSpreadPercent FacetChart.minXDataSpreadPercent}.
 */
minXDataSpreadPercent?: number;

/**
 * See {@link isc.FacetChart.setScaleStartColor() FacetChart.setScaleStartColor()}.
 */
setScaleStartColor?: Function;

/**
 * See {@link isc.FacetChart.getChartTop() FacetChart.getChartTop()}.
 */
getChartTop?: Function;

/**
 * See {@link isc.FacetChart.otherAxisGradationGaps FacetChart.otherAxisGradationGaps}.
 */
otherAxisGradationGaps?: number[];

/**
 * See {@link isc.FacetChart.zoomEndValue FacetChart.zoomEndValue}.
 */
zoomEndValue?: any;

/**
 * See {@link isc.FacetChart.zoomShowSelection FacetChart.zoomShowSelection}.
 */
zoomShowSelection?: boolean;

/**
 * See {@link isc.FacetChart.setShowMinorTicks() FacetChart.setShowMinorTicks()}.
 */
setShowMinorTicks?: Function;

/**
 * See {@link isc.FacetChart.outerLabelFacetLineProperties FacetChart.outerLabelFacetLineProperties}.
 */
outerLabelFacetLineProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.clusterMarginRatio FacetChart.clusterMarginRatio}.
 */
clusterMarginRatio?: number;

/**
 * See {@link isc.FacetChart.getXCoord() FacetChart.getXCoord()}.
 */
getXCoord?: Function;

/**
 * See {@link isc.FacetChart.stacked FacetChart.stacked}.
 */
stacked?: boolean;

/**
 * See {@link isc.FacetChart.setShowXTicks() FacetChart.setShowXTicks()}.
 */
setShowXTicks?: Function;

/**
 * See {@link isc.FacetChart.drawLegendBoundary FacetChart.drawLegendBoundary}.
 */
drawLegendBoundary?: boolean;

/**
 * See {@link isc.FacetChart.proportional FacetChart.proportional}.
 */
proportional?: boolean;

/**
 * See {@link isc.FacetChart.showExpectedValueLine FacetChart.showExpectedValueLine}.
 */
showExpectedValueLine?: boolean;

/**
 * See {@link isc.FacetChart.regressionLineProperties FacetChart.regressionLineProperties}.
 */
regressionLineProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.zoomStartValue FacetChart.zoomStartValue}.
 */
zoomStartValue?: any;

/**
 * See {@link isc.FacetChart.legendTextPadding FacetChart.legendTextPadding}.
 */
legendTextPadding?: number;

/**
 * See {@link isc.FacetChart.probabilityMetric FacetChart.probabilityMetric}.
 */
probabilityMetric?: string;

/**
 * See {@link isc.FacetChart.getDrawnValuesAtPoint() FacetChart.getDrawnValuesAtPoint()}.
 */
getDrawnValuesAtPoint?: Function;

/**
 * See {@link isc.FacetChart.barMargin FacetChart.barMargin}.
 */
barMargin?: number;

/**
 * See {@link isc.FacetChart.dataOutlineProperties FacetChart.dataOutlineProperties}.
 */
dataOutlineProperties?: DrawItem;

/**
 * See {@link isc.FacetChart.dataLabelToValueAxisMargin FacetChart.dataLabelToValueAxisMargin}.
 */
dataLabelToValueAxisMargin?: number;

/**
 * See {@link isc.FacetChart.expectedValueLineProperties FacetChart.expectedValueLineProperties}.
 */
expectedValueLineProperties?: DrawItem;

/**
 * See {@link isc.FacetChart.showDataValues FacetChart.showDataValues}.
 */
showDataValues?: boolean;

/**
 * See {@link isc.FacetChart.printZoomChart FacetChart.printZoomChart}.
 */
printZoomChart?: boolean;

/**
 * See {@link isc.FacetChart.standardDeviationBandProperties FacetChart.standardDeviationBandProperties}.
 */
standardDeviationBandProperties?: DrawItem[];

/**
 * See {@link isc.FacetChart.showShadows FacetChart.showShadows}.
 */
showShadows?: boolean;

/**
 * See {@link isc.FacetChart.showInlineLabels FacetChart.showInlineLabels}.
 */
showInlineLabels?: boolean;

/**
 * See {@link isc.FacetChart.titleAlign FacetChart.titleAlign}.
 */
titleAlign?: string;

/**
 * See {@link isc.FacetChart.titleRectHeight FacetChart.titleRectHeight}.
 */
titleRectHeight?: number;

/**
 * See {@link isc.FacetChart.setScaleEndColor() FacetChart.setScaleEndColor()}.
 */
setScaleEndColor?: Function;

/**
 * See {@link isc.FacetChart.doughnutRatio FacetChart.doughnutRatio}.
 */
doughnutRatio?: number;

/**
 * See {@link isc.FacetChart.zIndexMetric FacetChart.zIndexMetric}.
 */
zIndexMetric?: string;

/**
 * See {@link isc.FacetChart.showValueAxisLabel FacetChart.showValueAxisLabel}.
 */
showValueAxisLabel?: boolean;

/**
 * See {@link isc.FacetChart.valueAxisMargin FacetChart.valueAxisMargin}.
 */
valueAxisMargin?: number;

/**
 * See {@link isc.FacetChart.highlightDataValues FacetChart.highlightDataValues}.
 */
highlightDataValues?: boolean;

/**
 * See {@link isc.FacetChart.maxDataPointSize FacetChart.maxDataPointSize}.
 */
maxDataPointSize?: number;

/**
 * See {@link isc.FacetChart.padChartRectByCornerRadius FacetChart.padChartRectByCornerRadius}.
 */
padChartRectByCornerRadius?: boolean;

/**
 * See {@link isc.FacetChart.legendClick() FacetChart.legendClick()}.
 */
legendClick?: Function;

/**
 * See {@link isc.FacetChart.axisEndValue FacetChart.axisEndValue}.
 */
axisEndValue?: number;

/**
 * See {@link isc.FacetChart.getDataLineColor() FacetChart.getDataLineColor()}.
 */
getDataLineColor?: Function;

/**
 * See {@link isc.FacetChart.extraAxisMetrics FacetChart.extraAxisMetrics}.
 */
extraAxisMetrics?: string[];

/**
 * See {@link isc.FacetChart.logScalePointSize FacetChart.logScalePointSize}.
 */
logScalePointSize?: boolean;

/**
 * See {@link isc.FacetChart.dataSource FacetChart.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.FacetChart.pointSizeLogGradations FacetChart.pointSizeLogGradations}.
 */
pointSizeLogGradations?: number[];

/**
 * See {@link isc.FacetChart.extraAxisSettings FacetChart.extraAxisSettings}.
 */
extraAxisSettings?: MetricSettings[];

/**
 * See {@link isc.FacetChart.errorBarWidth FacetChart.errorBarWidth}.
 */
errorBarWidth?: number;

/**
 * See {@link isc.FacetChart.dataColors FacetChart.dataColors}.
 */
dataColors?: string[];

/**
 * See {@link isc.FacetChart.bandedBackground FacetChart.bandedBackground}.
 */
bandedBackground?: boolean;

/**
 * See {@link isc.FacetChart.zoomChartHeight FacetChart.zoomChartHeight}.
 */
zoomChartHeight?: number;

/**
 * See {@link isc.FacetChart.getMinContentHeight() FacetChart.getMinContentHeight()}.
 */
getMinContentHeight?: Function;

/**
 * See {@link isc.FacetChart.legendPadding FacetChart.legendPadding}.
 */
legendPadding?: number;

/**
 * See {@link isc.FacetChart.setMinorTickLength() FacetChart.setMinorTickLength()}.
 */
setMinorTickLength?: Function;

/**
 * See {@link isc.FacetChart.dataLabelClick() FacetChart.dataLabelClick()}.
 */
dataLabelClick?: Function;

/**
 * See {@link isc.FacetChart.getChartCenter() FacetChart.getChartCenter()}.
 */
getChartCenter?: Function;

/**
 * See {@link isc.FacetChart.setAutoScrollDataApproach() FacetChart.setAutoScrollDataApproach()}.
 */
setAutoScrollDataApproach?: Function;

/**
 * See {@link isc.FacetChart.pieRingBorderProperties FacetChart.pieRingBorderProperties}.
 */
pieRingBorderProperties?: DrawOval;

/**
 * See {@link isc.FacetChart.decimalPrecision FacetChart.decimalPrecision}.
 */
decimalPrecision?: number;

/**
 * See {@link isc.FacetChart.rotateLabels FacetChart.rotateLabels}.
 */
rotateLabels?: string;

/**
 * See {@link isc.FacetChart.highErrorMetric FacetChart.highErrorMetric}.
 */
highErrorMetric?: string;

/**
 * See {@link isc.FacetChart.showTitle FacetChart.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.FacetChart.getChartRadius() FacetChart.getChartRadius()}.
 */
getChartRadius?: Function;

/**
 * See {@link isc.FacetChart.pointSizeGradations FacetChart.pointSizeGradations}.
 */
pointSizeGradations?: number;

/**
 * See {@link isc.FacetChart.useMultiplePointShapes FacetChart.useMultiplePointShapes}.
 */
useMultiplePointShapes?: boolean;

/**
 * See {@link isc.FacetChart.setMajorTickGradations() FacetChart.setMajorTickGradations()}.
 */
setMajorTickGradations?: Function;

/**
 * See {@link isc.FacetChart.showBubbleLegendPerShape FacetChart.showBubbleLegendPerShape}.
 */
showBubbleLegendPerShape?: boolean;

/**
 * See {@link isc.FacetChart.bubbleHoverMaxDistance FacetChart.bubbleHoverMaxDistance}.
 */
bubbleHoverMaxDistance?: number;

/**
 * See {@link isc.FacetChart.setMajorTickTimeIntervals() FacetChart.setMajorTickTimeIntervals()}.
 */
setMajorTickTimeIntervals?: Function;

/**
 * See {@link isc.FacetChart.dataValueHoverShadow FacetChart.dataValueHoverShadow}.
 */
dataValueHoverShadow?: Shadow;

/**
 * See {@link isc.FacetChart.pieStartAngle FacetChart.pieStartAngle}.
 */
pieStartAngle?: number;

/**
 * See {@link isc.FacetChart.pointSizeMetric FacetChart.pointSizeMetric}.
 */
pointSizeMetric?: string;

/**
 * See {@link isc.FacetChart.standardDeviationLineProperties FacetChart.standardDeviationLineProperties}.
 */
standardDeviationLineProperties?: DrawItem;

/**
 * See {@link isc.FacetChart.dataLabelHover() FacetChart.dataLabelHover()}.
 */
dataLabelHover?: Function;

/**
 * See {@link isc.FacetChart.filled FacetChart.filled}.
 */
filled?: boolean;

/**
 * See {@link isc.FacetChart.xAxisEndValue FacetChart.xAxisEndValue}.
 */
xAxisEndValue?: number | Date;

/**
 * See {@link isc.FacetChart.otherAxisPixelsPerGradation FacetChart.otherAxisPixelsPerGradation}.
 */
otherAxisPixelsPerGradation?: number;

/**
 * See {@link isc.FacetChart.initialCriteria FacetChart.initialCriteria}.
 */
initialCriteria?: Criteria;

/**
 * See {@link isc.FacetChart.errorLineProperties FacetChart.errorLineProperties}.
 */
errorLineProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.minLabelGap FacetChart.minLabelGap}.
 */
minLabelGap?: number;

/**
 * See {@link isc.FacetChart.setUseMultiplePointShapes() FacetChart.setUseMultiplePointShapes()}.
 */
setUseMultiplePointShapes?: Function;

/**
 * See {@link isc.FacetChart.metricFacetId FacetChart.metricFacetId}.
 */
metricFacetId?: string;

/**
 * See {@link isc.FacetChart.setDataLineType() FacetChart.setDataLineType()}.
 */
setDataLineType?: Function;

/**
 * See {@link isc.FacetChart.gradationLabelProperties FacetChart.gradationLabelProperties}.
 */
gradationLabelProperties?: DrawLabel;

/**
 * See {@link isc.FacetChart.showYTicks FacetChart.showYTicks}.
 */
showYTicks?: boolean;

/**
 * See {@link isc.FacetChart.formatFacetValueId() FacetChart.formatFacetValueId()}.
 */
formatFacetValueId?: Function;

/**
 * See {@link isc.FacetChart.pointClick() FacetChart.pointClick()}.
 */
pointClick?: Function;

/**
 * See {@link isc.FacetChart.setStacked() FacetChart.setStacked()}.
 */
setStacked?: Function;

/**
 * See {@link isc.FacetChart.dataAxisLabelDelimiter FacetChart.dataAxisLabelDelimiter}.
 */
dataAxisLabelDelimiter?: string;

/**
 * See {@link isc.FacetChart.setGradationGaps() FacetChart.setGradationGaps()}.
 */
setGradationGaps?: Function;

/**
 * See {@link isc.FacetChart.useLogGradations FacetChart.useLogGradations}.
 */
useLogGradations?: boolean;

/**
 * See {@link isc.FacetChart.chartDrawn() FacetChart.chartDrawn()}.
 */
chartDrawn?: Function;

/**
 * See {@link isc.FacetChart.formatAxisValue() FacetChart.formatAxisValue()}.
 */
formatAxisValue?: Function;

/**
 * See {@link isc.FacetChart.valueClick() FacetChart.valueClick()}.
 */
valueClick?: Function;

/**
 * See {@link isc.FacetChart.setShowScatterLines() FacetChart.setShowScatterLines()}.
 */
setShowScatterLines?: Function;

/**
 * See {@link isc.FacetChart.chartBackgroundDrawn() FacetChart.chartBackgroundDrawn()}.
 */
chartBackgroundDrawn?: Function;

/**
 * See {@link isc.FacetChart.pieLabelAngleStart FacetChart.pieLabelAngleStart}.
 */
pieLabelAngleStart?: number;

/**
 * See {@link isc.FacetChart.dataLabelProperties FacetChart.dataLabelProperties}.
 */
dataLabelProperties?: DrawLabel;

/**
 * See {@link isc.FacetChart.maxDataZIndex FacetChart.maxDataZIndex}.
 */
maxDataZIndex?: number;

/**
 * See {@link isc.FacetChart.getMinClusterSize() FacetChart.getMinClusterSize()}.
 */
getMinClusterSize?: Function;

/**
 * See {@link isc.FacetChart.getDataColor() FacetChart.getDataColor()}.
 */
getDataColor?: Function;

/**
 * See {@link isc.FacetChart.setShowRegressionLine() FacetChart.setShowRegressionLine()}.
 */
setShowRegressionLine?: Function;

/**
 * See {@link isc.FacetChart.getMedian() FacetChart.getMedian()}.
 */
getMedian?: Function;

/**
 * See {@link isc.FacetChart.getDataLabelFacet() FacetChart.getDataLabelFacet()}.
 */
getDataLabelFacet?: Function;

/**
 * See {@link isc.FacetChart.showRadarGradationLabels FacetChart.showRadarGradationLabels}.
 */
showRadarGradationLabels?: boolean;

/**
 * See {@link isc.FacetChart.radarBackgroundProperties FacetChart.radarBackgroundProperties}.
 */
radarBackgroundProperties?: DrawOval;

/**
 * See {@link isc.FacetChart.zoomMutePercent FacetChart.zoomMutePercent}.
 */
zoomMutePercent?: number;

/**
 * See {@link isc.FacetChart.colorScaleMetric FacetChart.colorScaleMetric}.
 */
colorScaleMetric?: string;

/**
 * See {@link isc.FacetChart.setZoomStartValue() FacetChart.setZoomStartValue()}.
 */
setZoomStartValue?: Function;

/**
 * See {@link isc.FacetChart.minDataSpreadPercent FacetChart.minDataSpreadPercent}.
 */
minDataSpreadPercent?: number;

/**
 * See {@link isc.FacetChart.canMoveAxes FacetChart.canMoveAxes}.
 */
canMoveAxes?: boolean;

/**
 * See {@link isc.FacetChart.pointShapes FacetChart.pointShapes}.
 */
pointShapes?: string[];

/**
 * See {@link isc.FacetChart.data FacetChart.data}.
 */
data?: CellRecord[] | CellRecord;

/**
 * See {@link isc.FacetChart.showDoughnut FacetChart.showDoughnut}.
 */
showDoughnut?: boolean;

/**
 * See {@link isc.FacetChart.setFilled() FacetChart.setFilled()}.
 */
setFilled?: Function;

/**
 * See {@link isc.FacetChart.invalidateCache() FacetChart.invalidateCache()}.
 */
invalidateCache?: Function;

/**
 * See {@link isc.FacetChart.setRegressionLineType() FacetChart.setRegressionLineType()}.
 */
setRegressionLineType?: Function;

/**
 * See {@link isc.FacetChart.minContentHeight FacetChart.minContentHeight}.
 */
minContentHeight?: number;

/**
 * See {@link isc.FacetChart.matchBarChartDataLineColor FacetChart.matchBarChartDataLineColor}.
 */
matchBarChartDataLineColor?: boolean;

/**
 * See {@link isc.FacetChart.regressionLineType FacetChart.regressionLineType}.
 */
regressionLineType?: string;

/**
 * See {@link isc.FacetChart.pieLabelLineProperties FacetChart.pieLabelLineProperties}.
 */
pieLabelLineProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.otherAxisGradationTimes FacetChart.otherAxisGradationTimes}.
 */
otherAxisGradationTimes?: string[];

/**
 * See {@link isc.FacetChart.gradationLabelPadding FacetChart.gradationLabelPadding}.
 */
gradationLabelPadding?: number;

/**
 * See {@link isc.FacetChart.autoFetchTextMatchStyle FacetChart.autoFetchTextMatchStyle}.
 */
autoFetchTextMatchStyle?: string;

/**
 * See {@link isc.FacetChart.editProxyConstructor FacetChart.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.FacetChart.pieSliceProperties FacetChart.pieSliceProperties}.
 */
pieSliceProperties?: DrawSector;

/**
 * See {@link isc.FacetChart.yAxisLabelPadding FacetChart.yAxisLabelPadding}.
 */
yAxisLabelPadding?: number;

/**
 * See {@link isc.FacetChart.getNumDataPoints() FacetChart.getNumDataPoints()}.
 */
getNumDataPoints?: Function;

/**
 * See {@link isc.FacetChart.pointSizeLogBase FacetChart.pointSizeLogBase}.
 */
pointSizeLogBase?: number;

/**
 * See {@link isc.FacetChart.valueTitle FacetChart.valueTitle}.
 */
valueTitle?: string;

/**
 * See {@link isc.FacetChart.getPointHoverHTML() FacetChart.getPointHoverHTML()}.
 */
getPointHoverHTML?: Function;

/**
 * See {@link isc.FacetChart.chartRectProperties FacetChart.chartRectProperties}.
 */
chartRectProperties?: DrawRect;

/**
 * See {@link isc.FacetChart.doughnutHoleProperties FacetChart.doughnutHoleProperties}.
 */
doughnutHoleProperties?: DrawOval;

/**
 * See {@link isc.FacetChart.autoRotateLabels FacetChart.autoRotateLabels}.
 */
autoRotateLabels?: boolean;

/**
 * See {@link isc.FacetChart.showChartRect FacetChart.showChartRect}.
 */
showChartRect?: boolean;

/**
 * See {@link isc.FacetChart.getLegendHoverHTML() FacetChart.getLegendHoverHTML()}.
 */
getLegendHoverHTML?: Function;

/**
 * See {@link isc.FacetChart.dataAxisLabelProperties FacetChart.dataAxisLabelProperties}.
 */
dataAxisLabelProperties?: DrawLabel;

/**
 * See {@link isc.FacetChart.legendSwatchProperties FacetChart.legendSwatchProperties}.
 */
legendSwatchProperties?: DrawRect;

/**
 * See {@link isc.FacetChart.setRegressionPolynomialDegree() FacetChart.setRegressionPolynomialDegree()}.
 */
setRegressionPolynomialDegree?: Function;

/**
 * See {@link isc.FacetChart.chartType FacetChart.chartType}.
 */
chartType?: string;

/**
 * See {@link isc.FacetChart.styleName FacetChart.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.FacetChart.title FacetChart.title}.
 */
title?: string;

/**
 * See {@link isc.FacetChart.minContentWidth FacetChart.minContentWidth}.
 */
minContentWidth?: number;

/**
 * See {@link isc.FacetChart.legendBoundaryProperties FacetChart.legendBoundaryProperties}.
 */
legendBoundaryProperties?: DrawLine;

/**
 * See {@link isc.FacetChart.zoomChartProperties FacetChart.zoomChartProperties}.
 */
zoomChartProperties?: FacetChart;

/**
 * See {@link isc.FacetChart.getDrawnValueAtPoint() FacetChart.getDrawnValueAtPoint()}.
 */
getDrawnValueAtPoint?: Function;

/**
 * See {@link isc.FacetChart.showGradationsOverData FacetChart.showGradationsOverData}.
 */
showGradationsOverData?: boolean;

/**
 * See {@link isc.FacetChart.backgroundBandProperties FacetChart.backgroundBandProperties}.
 */
backgroundBandProperties?: DrawRect;

/**
 * See {@link isc.FacetChart.getRange() FacetChart.getRange()}.
 */
getRange?: Function;

/**
 * See {@link isc.FacetChart.fetchData() FacetChart.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.FacetChart.proportionalAxisLabel FacetChart.proportionalAxisLabel}.
 */
proportionalAxisLabel?: string;

/**
 * See {@link isc.FacetChart.showColorScaleLegend FacetChart.showColorScaleLegend}.
 */
showColorScaleLegend?: boolean;

/**
 * See {@link isc.FacetChart.legendItemPadding FacetChart.legendItemPadding}.
 */
legendItemPadding?: number;

/**
 * See {@link isc.FacetChart.getYCoord() FacetChart.getYCoord()}.
 */
getYCoord?: Function;

/**
 * See {@link isc.FacetChart.centerTitle FacetChart.centerTitle}.
 */
centerTitle?: boolean;

/**
 * See {@link isc.FacetChart.titleBackgroundProperties FacetChart.titleBackgroundProperties}.
 */
titleBackgroundProperties?: DrawLabel;

/**
 * See {@link isc.FacetChart.drawnValueContainsPoint() FacetChart.drawnValueContainsPoint()}.
 */
drawnValueContainsPoint?: Function;

/**
 * See {@link isc.FacetChart.setOtherAxisGradationGaps() FacetChart.setOtherAxisGradationGaps()}.
 */
setOtherAxisGradationGaps?: Function;

/**
 * See {@link isc.FacetChart.zoomLogScale FacetChart.zoomLogScale}.
 */
zoomLogScale?: boolean;

/**
 * See {@link isc.FacetChart.legendSwatchSize FacetChart.legendSwatchSize}.
 */
legendSwatchSize?: number;

/**
 * See {@link isc.FacetChart.discontinuousLines FacetChart.discontinuousLines}.
 */
discontinuousLines?: boolean;

/**
 * See {@link isc.FacetChart.bubbleProperties FacetChart.bubbleProperties}.
 */
bubbleProperties?: DrawItem;

/**
 * See {@link isc.FacetChart.yAxisMetric FacetChart.yAxisMetric}.
 */
yAxisMetric?: string;

/**
 * See {@link isc.FacetChart.autoFetchData FacetChart.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.FacetChart.implicitCriteria FacetChart.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.FacetChart.useAutoGradients FacetChart.useAutoGradients}.
 */
useAutoGradients?: boolean;

/**
 * See {@link isc.FacetChart.usePointSizeLogGradations FacetChart.usePointSizeLogGradations}.
 */
usePointSizeLogGradations?: boolean;

/**
 * See {@link isc.FacetChart.errorBarColorMutePercent FacetChart.errorBarColorMutePercent}.
 */
errorBarColorMutePercent?: number;

/**
 * See {@link isc.FacetChart.getGradations() FacetChart.getGradations()}.
 */
getGradations?: Function;

/**
 * See {@link isc.FacetChart.setChartType() FacetChart.setChartType()}.
 */
setChartType?: Function;

/**
 * See {@link isc.FacetChart.minChartWidth FacetChart.minChartWidth}.
 */
minChartWidth?: number;

/**
 * See {@link isc.FacetChart.showMinorTicks FacetChart.showMinorTicks}.
 */
showMinorTicks?: boolean;

/**
 * See {@link isc.FacetChart.getStdDev() FacetChart.getStdDev()}.
 */
getStdDev?: Function;

/**
 * See {@link isc.FacetChart.bandedStandardDeviations FacetChart.bandedStandardDeviations}.
 */
bandedStandardDeviations?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * FacetChart wraps the SmartClient widget class
 * {@link isc.FacetChart FacetChart} for React, allowing you to import
 * FacetChart for use in React JS and JSX.
 * @class
 * @extends DrawPane
 */
declare class FacetChart extends DrawPane {
    props: AsComponentXML<FacetChartProps>;
}
