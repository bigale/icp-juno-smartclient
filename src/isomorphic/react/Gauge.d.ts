import React from 'react';
import { DrawPane, DrawPaneProps } from './DrawPane';
import { AsComponentXML } from './core/ReactComponent';


declare interface GaugeProps extends DrawPaneProps {

/**
 * See {@link isc.Gauge.setDialRadius() Gauge.setDialRadius()}.
 */
setDialRadius?: Function;

/**
 * See {@link isc.Gauge.addSector() Gauge.addSector()}.
 */
addSector?: Function;

/**
 * See {@link isc.Gauge.borderColor Gauge.borderColor}.
 */
borderColor?: string;

/**
 * See {@link isc.Gauge.setLabelPrefix() Gauge.setLabelPrefix()}.
 */
setLabelPrefix?: Function;

/**
 * See {@link isc.Gauge.sectorColors Gauge.sectorColors}.
 */
sectorColors?: string[];

/**
 * See {@link isc.Gauge.setSectors() Gauge.setSectors()}.
 */
setSectors?: Function;

/**
 * See {@link isc.Gauge.getNumSectors() Gauge.getNumSectors()}.
 */
getNumSectors?: Function;

/**
 * See {@link isc.Gauge.getSectorLabelContents() Gauge.getSectorLabelContents()}.
 */
getSectorLabelContents?: Function;

/**
 * See {@link isc.Gauge.minValue Gauge.minValue}.
 */
minValue?: number;

/**
 * See {@link isc.Gauge.needleProperties Gauge.needleProperties}.
 */
needleProperties?: DrawItem;

/**
 * See {@link isc.Gauge.getSectorFillColor() Gauge.getSectorFillColor()}.
 */
getSectorFillColor?: Function;

/**
 * See {@link isc.Gauge.tickLineProperties Gauge.tickLineProperties}.
 */
tickLineProperties?: DrawItem;

/**
 * See {@link isc.Gauge.getSectorValue() Gauge.getSectorValue()}.
 */
getSectorValue?: Function;

/**
 * See {@link isc.Gauge.numMinorTicks Gauge.numMinorTicks}.
 */
numMinorTicks?: number;

/**
 * See {@link isc.Gauge.labelPrefix Gauge.labelPrefix}.
 */
labelPrefix?: string;

/**
 * See {@link isc.Gauge.borderWidth Gauge.borderWidth}.
 */
borderWidth?: number;

/**
 * See {@link isc.Gauge.getDefaultFillColor() Gauge.getDefaultFillColor()}.
 */
getDefaultFillColor?: Function;

/**
 * See {@link isc.Gauge.setNumMajorTicks() Gauge.setNumMajorTicks()}.
 */
setNumMajorTicks?: Function;

/**
 * See {@link isc.Gauge.setSectorFillColor() Gauge.setSectorFillColor()}.
 */
setSectorFillColor?: Function;

/**
 * See {@link isc.Gauge.removeSector() Gauge.removeSector()}.
 */
removeSector?: Function;

/**
 * See {@link isc.Gauge.setMaxValue() Gauge.setMaxValue()}.
 */
setMaxValue?: Function;

/**
 * See {@link isc.Gauge.maxValue Gauge.maxValue}.
 */
maxValue?: number;

/**
 * See {@link isc.Gauge.fontSize Gauge.fontSize}.
 */
fontSize?: number;

/**
 * See {@link isc.Gauge.dialRadius Gauge.dialRadius}.
 */
dialRadius?: number;

/**
 * See {@link isc.Gauge.setValueRange() Gauge.setValueRange()}.
 */
setValueRange?: Function;

/**
 * See {@link isc.Gauge.setDrawnClockwise() Gauge.setDrawnClockwise()}.
 */
setDrawnClockwise?: Function;

/**
 * See {@link isc.Gauge.formatLabelContents() Gauge.formatLabelContents()}.
 */
formatLabelContents?: Function;

/**
 * See {@link isc.Gauge.drawnClockwise Gauge.drawnClockwise}.
 */
drawnClockwise?: boolean;

/**
 * See {@link isc.Gauge.sectorShapeProperties Gauge.sectorShapeProperties}.
 */
sectorShapeProperties?: DrawSector;

/**
 * See {@link isc.Gauge.value Gauge.value}.
 */
value?: number;

/**
 * See {@link isc.Gauge.setMinValue() Gauge.setMinValue()}.
 */
setMinValue?: Function;

/**
 * See {@link isc.Gauge.setPivotPoint() Gauge.setPivotPoint()}.
 */
setPivotPoint?: Function;

/**
 * See {@link isc.Gauge.reformatLabelContents() Gauge.reformatLabelContents()}.
 */
reformatLabelContents?: Function;

/**
 * See {@link isc.Gauge.setNumMinorTicks() Gauge.setNumMinorTicks()}.
 */
setNumMinorTicks?: Function;

/**
 * See {@link isc.Gauge.pivotPointHeight Gauge.pivotPointHeight}.
 */
pivotPointHeight?: number | string;

/**
 * See {@link isc.Gauge.valueLabelProperties Gauge.valueLabelProperties}.
 */
valueLabelProperties?: DrawLabel;

/**
 * See {@link isc.Gauge.pivotShapeProperties Gauge.pivotShapeProperties}.
 */
pivotShapeProperties?: DrawItem;

/**
 * See {@link isc.Gauge.pivotPoint Gauge.pivotPoint}.
 */
pivotPoint?: Point;

/**
 * See {@link isc.Gauge.setLabelSuffix() Gauge.setLabelSuffix()}.
 */
setLabelSuffix?: Function;

/**
 * See {@link isc.Gauge.labelSuffix Gauge.labelSuffix}.
 */
labelSuffix?: string;

/**
 * See {@link isc.Gauge.sectors Gauge.sectors}.
 */
sectors?: GaugeSector[];

/**
 * See {@link isc.Gauge.numMajorTicks Gauge.numMajorTicks}.
 */
numMajorTicks?: number;

/**
 * See {@link isc.Gauge.setValue() Gauge.setValue()}.
 */
setValue?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Gauge wraps the SmartClient widget class
 * {@link isc.Gauge Gauge} for React, allowing you to import
 * Gauge for use in React JS and JSX.
 * @class
 * @extends DrawPane
 */
declare class Gauge extends DrawPane {
    props: AsComponentXML<GaugeProps>;
}
