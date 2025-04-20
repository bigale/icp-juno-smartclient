import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface RelativeDateItemProps extends CanvasItemProps {

/**
 * See {@link isc.RelativeDateItem.getFiscalCalendar() RelativeDateItem.getFiscalCalendar()}.
 */
getFiscalCalendar?: Function;

/**
 * See {@link isc.RelativeDateItem.setFiscalCalendar() RelativeDateItem.setFiscalCalendar()}.
 */
setFiscalCalendar?: Function;

/**
 * See {@link isc.RelativeDateItem.minQuantity RelativeDateItem.minQuantity}.
 */
minQuantity?: number;

/**
 * See {@link isc.RelativeDateItem.monthsFromNowTitle RelativeDateItem.monthsFromNowTitle}.
 */
monthsFromNowTitle?: string;

/**
 * See {@link isc.RelativeDateItem.pickerIconPrompt RelativeDateItem.pickerIconPrompt}.
 */
pickerIconPrompt?: string;

/**
 * See {@link isc.RelativeDateItem.shouldSaveValue RelativeDateItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.RelativeDateItem.getInputFormat() RelativeDateItem.getInputFormat()}.
 */
getInputFormat?: Function;

/**
 * See {@link isc.RelativeDateItem.yearsFromNowTitle RelativeDateItem.yearsFromNowTitle}.
 */
yearsFromNowTitle?: string;

/**
 * See {@link isc.RelativeDateItem.getEnteredValue() RelativeDateItem.getEnteredValue()}.
 */
getEnteredValue?: Function;

/**
 * See {@link isc.RelativeDateItem.baseDate RelativeDateItem.baseDate}.
 */
baseDate?: Date;

/**
 * See {@link isc.RelativeDateItem.operator RelativeDateItem.operator}.
 */
operator?: string;

/**
 * See {@link isc.RelativeDateItem.rangePosition RelativeDateItem.rangePosition}.
 */
rangePosition?: string;

/**
 * See {@link isc.RelativeDateItem.getRelativeDate() RelativeDateItem.getRelativeDate()}.
 */
getRelativeDate?: Function;

/**
 * See {@link isc.RelativeDateItem.daysFromNowTitle RelativeDateItem.daysFromNowTitle}.
 */
daysFromNowTitle?: string;

/**
 * See {@link isc.RelativeDateItem.dateFormatter RelativeDateItem.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.RelativeDateItem.valueFieldProperties RelativeDateItem.valueFieldProperties}.
 */
valueFieldProperties?: ComboBoxItem;

/**
 * See {@link isc.RelativeDateItem.calculatedDateFieldProperties RelativeDateItem.calculatedDateFieldProperties}.
 */
calculatedDateFieldProperties?: BlurbItem;

/**
 * See {@link isc.RelativeDateItem.pickerIconProperties RelativeDateItem.pickerIconProperties}.
 */
pickerIconProperties?: FormItemIcon;

/**
 * See {@link isc.RelativeDateItem.monthsAgoTitle RelativeDateItem.monthsAgoTitle}.
 */
monthsAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.pickerConstructor RelativeDateItem.pickerConstructor}.
 */
pickerConstructor?: string;

/**
 * See {@link isc.RelativeDateItem.minutesFromNowTitle RelativeDateItem.minutesFromNowTitle}.
 */
minutesFromNowTitle?: string;

/**
 * See {@link isc.RelativeDateItem.showCalculatedDateField RelativeDateItem.showCalculatedDateField}.
 */
showCalculatedDateField?: boolean;

/**
 * See {@link isc.RelativeDateItem.defaultValue RelativeDateItem.defaultValue}.
 */
defaultValue?: Date | string | string;

/**
 * See {@link isc.RelativeDateItem.valueFieldWidth RelativeDateItem.valueFieldWidth}.
 */
valueFieldWidth?: number | string;

/**
 * See {@link isc.RelativeDateItem.useSharedPicker RelativeDateItem.useSharedPicker}.
 */
useSharedPicker?: boolean;

/**
 * See {@link isc.RelativeDateItem.secondsFromNowTitle RelativeDateItem.secondsFromNowTitle}.
 */
secondsFromNowTitle?: string;

/**
 * See {@link isc.RelativeDateItem.quartersFromNowTitle RelativeDateItem.quartersFromNowTitle}.
 */
quartersFromNowTitle?: string;

/**
 * See {@link isc.RelativeDateItem.use24HourTime RelativeDateItem.use24HourTime}.
 */
use24HourTime?: boolean;

/**
 * See {@link isc.RelativeDateItem.secondsAgoTitle RelativeDateItem.secondsAgoTitle}.
 */
secondsAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.showPastOptions RelativeDateItem.showPastOptions}.
 */
showPastOptions?: boolean;

/**
 * See {@link isc.RelativeDateItem.daysAgoTitle RelativeDateItem.daysAgoTitle}.
 */
daysAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.weeksFromNowTitle RelativeDateItem.weeksFromNowTitle}.
 */
weeksFromNowTitle?: string;

/**
 * See {@link isc.RelativeDateItem.centuryThreshold RelativeDateItem.centuryThreshold}.
 */
centuryThreshold?: number;

/**
 * See {@link isc.RelativeDateItem.allowAbsoluteDates RelativeDateItem.allowAbsoluteDates}.
 */
allowAbsoluteDates?: boolean;

/**
 * See {@link isc.RelativeDateItem.yearsAgoTitle RelativeDateItem.yearsAgoTitle}.
 */
yearsAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.quartersAgoTitle RelativeDateItem.quartersAgoTitle}.
 */
quartersAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.endDate RelativeDateItem.endDate}.
 */
endDate?: Date;

/**
 * See {@link isc.RelativeDateItem.minutesAgoTitle RelativeDateItem.minutesAgoTitle}.
 */
minutesAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.rangeRoundingGranularity RelativeDateItem.rangeRoundingGranularity}.
 */
rangeRoundingGranularity?: Object;

/**
 * See {@link isc.RelativeDateItem.showChooserWeekPicker RelativeDateItem.showChooserWeekPicker}.
 */
showChooserWeekPicker?: boolean;

/**
 * See {@link isc.RelativeDateItem.timeUnitOptions RelativeDateItem.timeUnitOptions}.
 */
timeUnitOptions?: string[];

/**
 * See {@link isc.RelativeDateItem.parseEditorValue() RelativeDateItem.parseEditorValue()}.
 */
parseEditorValue?: Function;

/**
 * See {@link isc.RelativeDateItem.maxQuantity RelativeDateItem.maxQuantity}.
 */
maxQuantity?: number;

/**
 * See {@link isc.RelativeDateItem.showFutureOptions RelativeDateItem.showFutureOptions}.
 */
showFutureOptions?: boolean;

/**
 * See {@link isc.RelativeDateItem.millisecondsAgoTitle RelativeDateItem.millisecondsAgoTitle}.
 */
millisecondsAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.generateValidator RelativeDateItem.generateValidator}.
 */
generateValidator?: boolean;

/**
 * See {@link isc.RelativeDateItem.defaultQuantity RelativeDateItem.defaultQuantity}.
 */
defaultQuantity?: number;

/**
 * See {@link isc.RelativeDateItem.pickerTimeItemProperties RelativeDateItem.pickerTimeItemProperties}.
 */
pickerTimeItemProperties?: TimeItem;

/**
 * See {@link isc.RelativeDateItem.startDate RelativeDateItem.startDate}.
 */
startDate?: Date;

/**
 * See {@link isc.RelativeDateItem.showChooserFiscalYearPicker RelativeDateItem.showChooserFiscalYearPicker}.
 */
showChooserFiscalYearPicker?: boolean;

/**
 * See {@link isc.RelativeDateItem.presetOptions RelativeDateItem.presetOptions}.
 */
presetOptions?: Object;

/**
 * See {@link isc.RelativeDateItem.showChooserIcon RelativeDateItem.showChooserIcon}.
 */
showChooserIcon?: boolean;

/**
 * See {@link isc.RelativeDateItem.showPickerTimeItem RelativeDateItem.showPickerTimeItem}.
 */
showPickerTimeItem?: boolean;

/**
 * See {@link isc.RelativeDateItem.hoursAgoTitle RelativeDateItem.hoursAgoTitle}.
 */
hoursAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.weeksAgoTitle RelativeDateItem.weeksAgoTitle}.
 */
weeksAgoTitle?: string;

/**
 * See {@link isc.RelativeDateItem.hoursFromNowTitle RelativeDateItem.hoursFromNowTitle}.
 */
hoursFromNowTitle?: string;

/**
 * See {@link isc.RelativeDateItem.formatEditorValue() RelativeDateItem.formatEditorValue()}.
 */
formatEditorValue?: Function;

/**
 * See {@link isc.RelativeDateItem.inputFormat RelativeDateItem.inputFormat}.
 */
inputFormat?: string;

/**
 * See {@link isc.RelativeDateItem.getCriterion() RelativeDateItem.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.RelativeDateItem.quantityFieldProperties RelativeDateItem.quantityFieldProperties}.
 */
quantityFieldProperties?: SpinnerItem;

/**
 * See {@link isc.RelativeDateItem.millisecondsFromNowTitle RelativeDateItem.millisecondsFromNowTitle}.
 */
millisecondsFromNowTitle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * RelativeDateItem wraps the SmartClient widget class
 * {@link isc.RelativeDateItem RelativeDateItem} for React, allowing you to import
 * RelativeDateItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class RelativeDateItem extends CanvasItem {
    props: AsComponentXML<RelativeDateItemProps>;
}
