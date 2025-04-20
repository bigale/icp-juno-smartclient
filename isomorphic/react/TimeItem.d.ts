import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface TimeItemProps extends FormItemProps {

/**
 * See {@link isc.TimeItem.millisecondIncrement TimeItem.millisecondIncrement}.
 */
millisecondIncrement?: number;

/**
 * See {@link isc.TimeItem.hourMinValue TimeItem.hourMinValue}.
 */
hourMinValue?: number;

/**
 * See {@link isc.TimeItem.secondIncrement TimeItem.secondIncrement}.
 */
secondIncrement?: number;

/**
 * See {@link isc.TimeItem.ampmItemProperties TimeItem.ampmItemProperties}.
 */
ampmItemProperties?: SelectItem | SelectItem;

/**
 * See {@link isc.TimeItem.hourItemPrompt TimeItem.hourItemPrompt}.
 */
hourItemPrompt?: string;

/**
 * See {@link isc.TimeItem.showMillisecondItem TimeItem.showMillisecondItem}.
 */
showMillisecondItem?: boolean;

/**
 * See {@link isc.TimeItem.setSelectionRange() TimeItem.setSelectionRange()}.
 */
setSelectionRange?: Function;

/**
 * See {@link isc.TimeItem.minuteItemProperties TimeItem.minuteItemProperties}.
 */
minuteItemProperties?: SelectItem | SelectItem;

/**
 * See {@link isc.TimeItem.setValue() TimeItem.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.TimeItem.hourValues TimeItem.hourValues}.
 */
hourValues?: number[];

/**
 * See {@link isc.TimeItem.getDuration() TimeItem.getDuration()}.
 */
getDuration?: Function;

/**
 * See {@link isc.TimeItem.textBoxStyle TimeItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.TimeItem.getMillisecondValues() TimeItem.getMillisecondValues()}.
 */
getMillisecondValues?: Function;

/**
 * See {@link isc.TimeItem.itemTitleAlign TimeItem.itemTitleAlign}.
 */
itemTitleAlign?: string;

/**
 * See {@link isc.TimeItem.secondMaxValue TimeItem.secondMaxValue}.
 */
secondMaxValue?: number;

/**
 * See {@link isc.TimeItem.showSecondItem TimeItem.showSecondItem}.
 */
showSecondItem?: boolean;

/**
 * See {@link isc.TimeItem.millisecondItemPrompt TimeItem.millisecondItemPrompt}.
 */
millisecondItemPrompt?: string;

/**
 * See {@link isc.TimeItem.textFieldProperties TimeItem.textFieldProperties}.
 */
textFieldProperties?: TextItem | TextItem;

/**
 * See {@link isc.TimeItem.setMinutes() TimeItem.setMinutes()}.
 */
setMinutes?: Function;

/**
 * See {@link isc.TimeItem.showMinuteItem TimeItem.showMinuteItem}.
 */
showMinuteItem?: boolean;

/**
 * See {@link isc.TimeItem.textAlign TimeItem.textAlign}.
 */
textAlign?: string;

/**
 * See {@link isc.TimeItem.pendingStatusChanged() TimeItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.TimeItem.secondMinValue TimeItem.secondMinValue}.
 */
secondMinValue?: number;

/**
 * See {@link isc.TimeItem.minuteItemTitle TimeItem.minuteItemTitle}.
 */
minuteItemTitle?: string;

/**
 * See {@link isc.TimeItem.useTextField TimeItem.useTextField}.
 */
useTextField?: boolean;

/**
 * See {@link isc.TimeItem.secondItemProperties TimeItem.secondItemProperties}.
 */
secondItemProperties?: SelectItem | SelectItem;

/**
 * See {@link isc.TimeItem.timeFormatter TimeItem.timeFormatter}.
 */
timeFormatter?: string;

/**
 * See {@link isc.TimeItem.timeFormatter24Hour TimeItem.timeFormatter24Hour}.
 */
timeFormatter24Hour?: string;

/**
 * See {@link isc.TimeItem.hourItemProperties TimeItem.hourItemProperties}.
 */
hourItemProperties?: SelectItem | SelectItem;

/**
 * See {@link isc.TimeItem.millisecondItemTitle TimeItem.millisecondItemTitle}.
 */
millisecondItemTitle?: string;

/**
 * See {@link isc.TimeItem.wrapHintText TimeItem.wrapHintText}.
 */
wrapHintText?: boolean;

/**
 * See {@link isc.TimeItem.itemTitleOrientation TimeItem.itemTitleOrientation}.
 */
itemTitleOrientation?: string;

/**
 * See {@link isc.TimeItem.useMask TimeItem.useMask}.
 */
useMask?: boolean;

/**
 * See {@link isc.TimeItem.timeFormatter12Hour TimeItem.timeFormatter12Hour}.
 */
timeFormatter12Hour?: string;

/**
 * See {@link isc.TimeItem.setMinuteValues() TimeItem.setMinuteValues()}.
 */
setMinuteValues?: Function;

/**
 * See {@link isc.TimeItem.setHourValues() TimeItem.setHourValues()}.
 */
setHourValues?: Function;

/**
 * See {@link isc.TimeItem.getHourValues() TimeItem.getHourValues()}.
 */
getHourValues?: Function;

/**
 * See {@link isc.TimeItem.use24HourTime TimeItem.use24HourTime}.
 */
use24HourTime?: boolean;

/**
 * See {@link isc.TimeItem.millisecondValues TimeItem.millisecondValues}.
 */
millisecondValues?: number[];

/**
 * See {@link isc.TimeItem.showHourItem TimeItem.showHourItem}.
 */
showHourItem?: boolean;

/**
 * See {@link isc.TimeItem.secondItemTitle TimeItem.secondItemTitle}.
 */
secondItemTitle?: string;

/**
 * See {@link isc.TimeItem.selectValue() TimeItem.selectValue()}.
 */
selectValue?: Function;

/**
 * See {@link isc.TimeItem.showHintInField TimeItem.showHintInField}.
 */
showHintInField?: boolean;

/**
 * See {@link isc.TimeItem.getEnteredValue() TimeItem.getEnteredValue()}.
 */
getEnteredValue?: Function;

/**
 * See {@link isc.TimeItem.secondValues TimeItem.secondValues}.
 */
secondValues?: number[];

/**
 * See {@link isc.TimeItem.setHours() TimeItem.setHours()}.
 */
setHours?: Function;

/**
 * See {@link isc.TimeItem.getSelectionRange() TimeItem.getSelectionRange()}.
 */
getSelectionRange?: Function;

/**
 * See {@link isc.TimeItem.hourIncrement TimeItem.hourIncrement}.
 */
hourIncrement?: number;

/**
 * See {@link isc.TimeItem.millisecondMaxValue TimeItem.millisecondMaxValue}.
 */
millisecondMaxValue?: number;

/**
 * See {@link isc.TimeItem.ampmItemTitle TimeItem.ampmItemTitle}.
 */
ampmItemTitle?: string;

/**
 * See {@link isc.TimeItem.getSecondValues() TimeItem.getSecondValues()}.
 */
getSecondValues?: Function;

/**
 * See {@link isc.TimeItem.minuteIncrement TimeItem.minuteIncrement}.
 */
minuteIncrement?: number;

/**
 * See {@link isc.TimeItem.setSecondValues() TimeItem.setSecondValues()}.
 */
setSecondValues?: Function;

/**
 * See {@link isc.TimeItem.minuteItemPrompt TimeItem.minuteItemPrompt}.
 */
minuteItemPrompt?: string;

/**
 * See {@link isc.TimeItem.minuteMinValue TimeItem.minuteMinValue}.
 */
minuteMinValue?: number;

/**
 * See {@link isc.TimeItem.getMinuteValues() TimeItem.getMinuteValues()}.
 */
getMinuteValues?: Function;

/**
 * See {@link isc.TimeItem.millisecondMinValue TimeItem.millisecondMinValue}.
 */
millisecondMinValue?: number;

/**
 * See {@link isc.TimeItem.millisecondItemProperties TimeItem.millisecondItemProperties}.
 */
millisecondItemProperties?: SelectItem | SelectItem;

/**
 * See {@link isc.TimeItem.showItemTitles TimeItem.showItemTitles}.
 */
showItemTitles?: boolean;

/**
 * See {@link isc.TimeItem.hourMaxValue TimeItem.hourMaxValue}.
 */
hourMaxValue?: number;

/**
 * See {@link isc.TimeItem.invalidTimeStringMessage TimeItem.invalidTimeStringMessage}.
 */
invalidTimeStringMessage?: string;

/**
 * See {@link isc.TimeItem.setMilliseconds() TimeItem.setMilliseconds()}.
 */
setMilliseconds?: Function;

/**
 * See {@link isc.TimeItem.usePlaceholderForHint TimeItem.usePlaceholderForHint}.
 */
usePlaceholderForHint?: boolean;

/**
 * See {@link isc.TimeItem.minuteMaxValue TimeItem.minuteMaxValue}.
 */
minuteMaxValue?: number;

/**
 * See {@link isc.TimeItem.secondItemPrompt TimeItem.secondItemPrompt}.
 */
secondItemPrompt?: string;

/**
 * See {@link isc.TimeItem.browserInputType TimeItem.browserInputType}.
 */
browserInputType?: string;

/**
 * See {@link isc.TimeItem.minuteValues TimeItem.minuteValues}.
 */
minuteValues?: number[];

/**
 * See {@link isc.TimeItem.hourItemTitle TimeItem.hourItemTitle}.
 */
hourItemTitle?: string;

/**
 * See {@link isc.TimeItem.deselectValue() TimeItem.deselectValue()}.
 */
deselectValue?: Function;

/**
 * See {@link isc.TimeItem.setSeconds() TimeItem.setSeconds()}.
 */
setSeconds?: Function;

/**
 * See {@link isc.TimeItem.setMillisecondValues() TimeItem.setMillisecondValues()}.
 */
setMillisecondValues?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * TimeItem wraps the SmartClient widget class
 * {@link isc.TimeItem TimeItem} for React, allowing you to import
 * TimeItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class TimeItem extends FormItem {
    props: AsComponentXML<TimeItemProps>;
}
