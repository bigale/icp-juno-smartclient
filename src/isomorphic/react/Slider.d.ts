import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface SliderProps extends CanvasProps {

/**
 * See {@link isc.Slider.flipValues Slider.flipValues}.
 */
flipValues?: boolean;

/**
 * See {@link isc.Slider.valueStyle Slider.valueStyle}.
 */
valueStyle?: string;

/**
 * See {@link isc.Slider.minValue Slider.minValue}.
 */
minValue?: number;

/**
 * See {@link isc.Slider.setMaxValueLabel() Slider.setMaxValueLabel()}.
 */
setMaxValueLabel?: Function;

/**
 * See {@link isc.Slider.getValue() Slider.getValue()}.
 */
getValue?: Function;

/**
 * See {@link isc.Slider.rangeFormat Slider.rangeFormat}.
 */
rangeFormat?: string;

/**
 * See {@link isc.Slider.labelWidth Slider.labelWidth}.
 */
labelWidth?: number;

/**
 * See {@link isc.Slider.setMaxValue() Slider.setMaxValue()}.
 */
setMaxValue?: Function;

/**
 * See {@link isc.Slider.titleSpacing Slider.titleSpacing}.
 */
titleSpacing?: number;

/**
 * See {@link isc.Slider.showTitle Slider.showTitle}.
 */
showTitle?: boolean;

/**
 * See {@link isc.Slider.setRoundPrecision() Slider.setRoundPrecision()}.
 */
setRoundPrecision?: Function;

/**
 * See {@link isc.Slider.setThumbThinWidth() Slider.setThumbThinWidth()}.
 */
setThumbThinWidth?: Function;

/**
 * See {@link isc.Slider.hTrackStyle Slider.hTrackStyle}.
 */
hTrackStyle?: string;

/**
 * See {@link isc.Slider.vertical Slider.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.Slider.setFlipValues() Slider.setFlipValues()}.
 */
setFlipValues?: Function;

/**
 * See {@link isc.Slider.valueTextStyle Slider.valueTextStyle}.
 */
valueTextStyle?: string;

/**
 * See {@link isc.Slider.rangeStyle Slider.rangeStyle}.
 */
rangeStyle?: string;

/**
 * See {@link isc.Slider.vTrackStyle Slider.vTrackStyle}.
 */
vTrackStyle?: string;

/**
 * See {@link isc.Slider.activeTrackStyle Slider.activeTrackStyle}.
 */
activeTrackStyle?: string;

/**
 * See {@link isc.Slider.vLabelSpacing Slider.vLabelSpacing}.
 */
vLabelSpacing?: number;

/**
 * See {@link isc.Slider.rangeLabelProperties Slider.rangeLabelProperties}.
 */
rangeLabelProperties?: Label;

/**
 * See {@link isc.Slider.animateThumbInit Slider.animateThumbInit}.
 */
animateThumbInit?: boolean;

/**
 * See {@link isc.Slider.setValue() Slider.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.Slider.setLabelSpacing() Slider.setLabelSpacing()}.
 */
setLabelSpacing?: Function;

/**
 * See {@link isc.Slider.length Slider.length}.
 */
length?: number;

/**
 * See {@link isc.Slider.activeTrackProperties Slider.activeTrackProperties}.
 */
activeTrackProperties?: StatefulCanvas;

/**
 * See {@link isc.Slider.vValueStyle Slider.vValueStyle}.
 */
vValueStyle?: string;

/**
 * See {@link isc.Slider.stepPercent Slider.stepPercent}.
 */
stepPercent?: number;

/**
 * See {@link isc.Slider.canFocus Slider.canFocus}.
 */
canFocus?: boolean;

/**
 * See {@link isc.Slider.setTitle() Slider.setTitle()}.
 */
setTitle?: Function;

/**
 * See {@link isc.Slider.labelSpacing Slider.labelSpacing}.
 */
labelSpacing?: number;

/**
 * See {@link isc.Slider.setShowValue() Slider.setShowValue()}.
 */
setShowValue?: Function;

/**
 * See {@link isc.Slider.trackWidth Slider.trackWidth}.
 */
trackWidth?: number;

/**
 * See {@link isc.Slider.hThumbStyle Slider.hThumbStyle}.
 */
hThumbStyle?: string;

/**
 * See {@link isc.Slider.showActiveTrack Slider.showActiveTrack}.
 */
showActiveTrack?: boolean;

/**
 * See {@link isc.Slider.numValues Slider.numValues}.
 */
numValues?: number;

/**
 * See {@link isc.Slider.setRoundValues() Slider.setRoundValues()}.
 */
setRoundValues?: Function;

/**
 * See {@link isc.Slider.setThumbThickWidth() Slider.setThumbThickWidth()}.
 */
setThumbThickWidth?: Function;

/**
 * See {@link isc.Slider.setShowTitle() Slider.setShowTitle()}.
 */
setShowTitle?: Function;

/**
 * See {@link isc.Slider.setStepPercent() Slider.setStepPercent()}.
 */
setStepPercent?: Function;

/**
 * See {@link isc.Slider.animateThumb Slider.animateThumb}.
 */
animateThumb?: boolean;

/**
 * See {@link isc.Slider.value Slider.value}.
 */
value?: number;

/**
 * See {@link isc.Slider.trackImageType Slider.trackImageType}.
 */
trackImageType?: string;

/**
 * See {@link isc.Slider.valueIsChanging() Slider.valueIsChanging()}.
 */
valueIsChanging?: Function;

/**
 * See {@link isc.Slider.showValue Slider.showValue}.
 */
showValue?: boolean;

/**
 * See {@link isc.Slider.setNumValues() Slider.setNumValues()}.
 */
setNumValues?: Function;

/**
 * See {@link isc.Slider.hValueStyle Slider.hValueStyle}.
 */
hValueStyle?: string;

/**
 * See {@link isc.Slider.showRange Slider.showRange}.
 */
showRange?: boolean;

/**
 * See {@link isc.Slider.valueFormat Slider.valueFormat}.
 */
valueFormat?: string;

/**
 * See {@link isc.Slider.setThumbSrc() Slider.setThumbSrc()}.
 */
setThumbSrc?: Function;

/**
 * See {@link isc.Slider.setLabelHeight() Slider.setLabelHeight()}.
 */
setLabelHeight?: Function;

/**
 * See {@link isc.Slider.maxValue Slider.maxValue}.
 */
maxValue?: number;

/**
 * See {@link isc.Slider.setTrackWidth() Slider.setTrackWidth()}.
 */
setTrackWidth?: Function;

/**
 * See {@link isc.Slider.valueLabelProperties Slider.valueLabelProperties}.
 */
valueLabelProperties?: Label;

/**
 * See {@link isc.Slider.setTrackSrc() Slider.setTrackSrc()}.
 */
setTrackSrc?: Function;

/**
 * See {@link isc.Slider.roundValues Slider.roundValues}.
 */
roundValues?: boolean;

/**
 * See {@link isc.Slider.thumbThickWidth Slider.thumbThickWidth}.
 */
thumbThickWidth?: number;

/**
 * See {@link isc.Slider.hLabelSpacing Slider.hLabelSpacing}.
 */
hLabelSpacing?: number;

/**
 * See {@link isc.Slider.sliderTarget Slider.sliderTarget}.
 */
sliderTarget?: Canvas;

/**
 * See {@link isc.Slider.roundPrecision Slider.roundPrecision}.
 */
roundPrecision?: number;

/**
 * See {@link isc.Slider.minValueLabel Slider.minValueLabel}.
 */
minValueLabel?: string;

/**
 * See {@link isc.Slider.setShowRange() Slider.setShowRange()}.
 */
setShowRange?: Function;

/**
 * See {@link isc.Slider.animateThumbTime Slider.animateThumbTime}.
 */
animateThumbTime?: number;

/**
 * See {@link isc.Slider.labelHeight Slider.labelHeight}.
 */
labelHeight?: number;

/**
 * See {@link isc.Slider.titleStyle Slider.titleStyle}.
 */
titleStyle?: string;

/**
 * See {@link isc.Slider.setLabelWidth() Slider.setLabelWidth()}.
 */
setLabelWidth?: Function;

/**
 * See {@link isc.Slider.trackCapSize Slider.trackCapSize}.
 */
trackCapSize?: number;

/**
 * See {@link isc.Slider.setVertical() Slider.setVertical()}.
 */
setVertical?: Function;

/**
 * See {@link isc.Slider.setTrackCapSize() Slider.setTrackCapSize()}.
 */
setTrackCapSize?: Function;

/**
 * See {@link isc.Slider.valueChanged() Slider.valueChanged()}.
 */
valueChanged?: Function;

/**
 * See {@link isc.Slider.title Slider.title}.
 */
title?: string;

/**
 * See {@link isc.Slider.maxValueLabel Slider.maxValueLabel}.
 */
maxValueLabel?: string;

/**
 * See {@link isc.Slider.thumbThinWidth Slider.thumbThinWidth}.
 */
thumbThinWidth?: number;

/**
 * See {@link isc.Slider.setMinValue() Slider.setMinValue()}.
 */
setMinValue?: Function;

/**
 * See {@link isc.Slider.vThumbStyle Slider.vThumbStyle}.
 */
vThumbStyle?: string;

/**
 * See {@link isc.Slider.setTrackImageType() Slider.setTrackImageType()}.
 */
setTrackImageType?: Function;

/**
 * See {@link isc.Slider.thumbSrc Slider.thumbSrc}.
 */
thumbSrc?: string;

/**
 * See {@link isc.Slider.trackSrc Slider.trackSrc}.
 */
trackSrc?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Slider wraps the SmartClient widget class
 * {@link isc.Slider Slider} for React, allowing you to import
 * Slider for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class Slider extends Canvas {
    props: AsComponentXML<SliderProps>;
}
