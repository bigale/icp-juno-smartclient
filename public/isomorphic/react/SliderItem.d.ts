import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface SliderItemProps extends CanvasItemProps {

/**
 * See {@link isc.SliderItem.shouldSaveValue SliderItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.SliderItem.vertical SliderItem.vertical}.
 */
vertical?: boolean;

/**
 * See {@link isc.SliderItem.sliderProperties SliderItem.sliderProperties}.
 */
sliderProperties?: Canvas | Slider;

/**
 * See {@link isc.SliderItem.maxValue SliderItem.maxValue}.
 */
maxValue?: number;

/**
 * See {@link isc.SliderItem.minValue SliderItem.minValue}.
 */
minValue?: number;

/**
 * See {@link isc.SliderItem.roundValues SliderItem.roundValues}.
 */
roundValues?: boolean;

/**
 * See {@link isc.SliderItem.setNumValues() SliderItem.setNumValues()}.
 */
setNumValues?: Function;

/**
 * See {@link isc.SliderItem.setMaxValue() SliderItem.setMaxValue()}.
 */
setMaxValue?: Function;

/**
 * See {@link isc.SliderItem.width SliderItem.width}.
 */
width?: number;

/**
 * See {@link isc.SliderItem.pendingStatusChanged() SliderItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.SliderItem.changeOnDrag SliderItem.changeOnDrag}.
 */
changeOnDrag?: boolean;

/**
 * See {@link isc.SliderItem.defaultValue SliderItem.defaultValue}.
 */
defaultValue?: number;

/**
 * See {@link isc.SliderItem.roundPrecision SliderItem.roundPrecision}.
 */
roundPrecision?: number;

/**
 * See {@link isc.SliderItem.setMinValue() SliderItem.setMinValue()}.
 */
setMinValue?: Function;

/**
 * See {@link isc.SliderItem.numValues SliderItem.numValues}.
 */
numValues?: number;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * SliderItem wraps the SmartClient widget class
 * {@link isc.SliderItem SliderItem} for React, allowing you to import
 * SliderItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class SliderItem extends CanvasItem {
    props: AsComponentXML<SliderItemProps>;
}
