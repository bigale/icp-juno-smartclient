import React from 'react';
import { FormItem, FormItemProps } from './FormItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateItemProps extends FormItemProps {

/**
 * See {@link isc.DateItem.inputFormat DateItem.inputFormat}.
 */
inputFormat?: string;

/**
 * See {@link isc.DateItem.setSelectionRange() DateItem.setSelectionRange()}.
 */
setSelectionRange?: Function;

/**
 * See {@link isc.DateItem.getEnteredValue() DateItem.getEnteredValue()}.
 */
getEnteredValue?: Function;

/**
 * See {@link isc.DateItem.monthSelectorProperties DateItem.monthSelectorProperties}.
 */
monthSelectorProperties?: SelectItem | SelectItem;

/**
 * See {@link isc.DateItem.autoUseTextField DateItem.autoUseTextField}.
 */
autoUseTextField?: boolean;

/**
 * See {@link isc.DateItem.useTextField DateItem.useTextField}.
 */
useTextField?: boolean;

/**
 * See {@link isc.DateItem.dateFormatter DateItem.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.DateItem.getFiscalCalendar() DateItem.getFiscalCalendar()}.
 */
getFiscalCalendar?: Function;

/**
 * See {@link isc.DateItem.wrapHintText DateItem.wrapHintText}.
 */
wrapHintText?: boolean;

/**
 * See {@link isc.DateItem.getInputFormat() DateItem.getInputFormat()}.
 */
getInputFormat?: Function;

/**
 * See {@link isc.DateItem.getDefaultChooserDate() DateItem.getDefaultChooserDate()}.
 */
getDefaultChooserDate?: Function;

/**
 * See {@link isc.DateItem.setFiscalCalendar() DateItem.setFiscalCalendar()}.
 */
setFiscalCalendar?: Function;

/**
 * See {@link isc.DateItem.showHintInField DateItem.showHintInField}.
 */
showHintInField?: boolean;

/**
 * See {@link isc.DateItem.pickerTimeItemProperties DateItem.pickerTimeItemProperties}.
 */
pickerTimeItemProperties?: TimeItem;

/**
 * See {@link isc.DateItem.textFieldProperties DateItem.textFieldProperties}.
 */
textFieldProperties?: TextItem | TextItem;

/**
 * See {@link isc.DateItem.browserInputType DateItem.browserInputType}.
 */
browserInputType?: string;

/**
 * See {@link isc.DateItem.invalidDateStringMessage DateItem.invalidDateStringMessage}.
 */
invalidDateStringMessage?: string;

/**
 * See {@link isc.DateItem.daySelectorProperties DateItem.daySelectorProperties}.
 */
daySelectorProperties?: SelectItem | SelectItem;

/**
 * See {@link isc.DateItem.startDate DateItem.startDate}.
 */
startDate?: Date;

/**
 * See {@link isc.DateItem.defaultChooserDate DateItem.defaultChooserDate}.
 */
defaultChooserDate?: Date;

/**
 * See {@link isc.DateItem.use24HourTime DateItem.use24HourTime}.
 */
use24HourTime?: boolean;

/**
 * See {@link isc.DateItem.usePlaceholderForHint DateItem.usePlaceholderForHint}.
 */
usePlaceholderForHint?: boolean;

/**
 * See {@link isc.DateItem.setEndDate() DateItem.setEndDate()}.
 */
setEndDate?: Function;

/**
 * See {@link isc.DateItem.textAlign DateItem.textAlign}.
 */
textAlign?: string;

/**
 * See {@link isc.DateItem.generateValidator DateItem.generateValidator}.
 */
generateValidator?: boolean;

/**
 * See {@link isc.DateItem.showChooserFiscalYearPicker DateItem.showChooserFiscalYearPicker}.
 */
showChooserFiscalYearPicker?: boolean;

/**
 * See {@link isc.DateItem.itemTitleOrientation DateItem.itemTitleOrientation}.
 */
itemTitleOrientation?: string;

/**
 * See {@link isc.DateItem.parseEditorValue() DateItem.parseEditorValue()}.
 */
parseEditorValue?: Function;

/**
 * See {@link isc.DateItem.endDate DateItem.endDate}.
 */
endDate?: Date;

/**
 * See {@link isc.DateItem.getSelectionRange() DateItem.getSelectionRange()}.
 */
getSelectionRange?: Function;

/**
 * See {@link isc.DateItem.setStartDate() DateItem.setStartDate()}.
 */
setStartDate?: Function;

/**
 * See {@link isc.DateItem.yearSelectorProperties DateItem.yearSelectorProperties}.
 */
yearSelectorProperties?: SelectItem | SelectItem;

/**
 * See {@link isc.DateItem.enforceValueRange DateItem.enforceValueRange}.
 */
enforceValueRange?: boolean;

/**
 * See {@link isc.DateItem.pickerDefaults DateItem.pickerDefaults}.
 */
pickerDefaults?: DateChooser;

/**
 * See {@link isc.DateItem.maskDateSeparator DateItem.maskDateSeparator}.
 */
maskDateSeparator?: string;

/**
 * See {@link isc.DateItem.showPickerTimeItem DateItem.showPickerTimeItem}.
 */
showPickerTimeItem?: boolean;

/**
 * See {@link isc.DateItem.pickerIconPrompt DateItem.pickerIconPrompt}.
 */
pickerIconPrompt?: string;

/**
 * See {@link isc.DateItem.showChooserWeekPicker DateItem.showChooserWeekPicker}.
 */
showChooserWeekPicker?: boolean;

/**
 * See {@link isc.DateItem.pendingStatusChanged() DateItem.pendingStatusChanged()}.
 */
pendingStatusChanged?: Function;

/**
 * See {@link isc.DateItem.useMask DateItem.useMask}.
 */
useMask?: boolean;

/**
 * See {@link isc.DateItem.editProxyConstructor DateItem.editProxyConstructor}.
 */
editProxyConstructor?: string;

/**
 * See {@link isc.DateItem.pickerConstructor DateItem.pickerConstructor}.
 */
pickerConstructor?: string;

/**
 * See {@link isc.DateItem.defaultValue DateItem.defaultValue}.
 */
defaultValue?: Date;

/**
 * See {@link isc.DateItem.deselectValue() DateItem.deselectValue()}.
 */
deselectValue?: Function;

/**
 * See {@link isc.DateItem.enforceDate DateItem.enforceDate}.
 */
enforceDate?: boolean;

/**
 * See {@link isc.DateItem.selectValue() DateItem.selectValue()}.
 */
selectValue?: Function;

/**
 * See {@link isc.DateItem.showItemTitles DateItem.showItemTitles}.
 */
showItemTitles?: boolean;

/**
 * See {@link isc.DateItem.selectorFormat DateItem.selectorFormat}.
 */
selectorFormat?: string;

/**
 * See {@link isc.DateItem.itemTitleAlign DateItem.itemTitleAlign}.
 */
itemTitleAlign?: string;

/**
 * See {@link isc.DateItem.centuryThreshold DateItem.centuryThreshold}.
 */
centuryThreshold?: number;

/**
 * See {@link isc.DateItem.pickerProperties DateItem.pickerProperties}.
 */
pickerProperties?: DateChooser;

/**
 * See {@link isc.DateItem.useSharedPicker DateItem.useSharedPicker}.
 */
useSharedPicker?: boolean;

/**
 * See {@link isc.DateItem.formatEditorValue() DateItem.formatEditorValue()}.
 */
formatEditorValue?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateItem wraps the SmartClient widget class
 * {@link isc.DateItem DateItem} for React, allowing you to import
 * DateItem for use in React JS and JSX.
 * @class
 * @extends FormItem
 */
declare class DateItem extends FormItem {
    props: AsComponentXML<DateItemProps>;
}
