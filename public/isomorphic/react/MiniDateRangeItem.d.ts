import React from 'react';
import { StaticTextItem, StaticTextItemProps } from './StaticTextItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface MiniDateRangeItemProps extends StaticTextItemProps {

/**
 * See {@link isc.MiniDateRangeItem.textBoxStyle MiniDateRangeItem.textBoxStyle}.
 */
textBoxStyle?: string;

/**
 * See {@link isc.MiniDateRangeItem.pickerIconPrompt MiniDateRangeItem.pickerIconPrompt}.
 */
pickerIconPrompt?: string;

/**
 * See {@link isc.MiniDateRangeItem.dateDisplayFormat MiniDateRangeItem.dateDisplayFormat}.
 */
dateDisplayFormat?: string;

/**
 * See {@link isc.MiniDateRangeItem.canTabToIcons MiniDateRangeItem.canTabToIcons}.
 */
canTabToIcons?: boolean;

/**
 * See {@link isc.MiniDateRangeItem.setCriterion() MiniDateRangeItem.setCriterion()}.
 */
setCriterion?: Function;

/**
 * See {@link isc.MiniDateRangeItem.getCriterion() MiniDateRangeItem.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.MiniDateRangeItem.allowRelativeDates MiniDateRangeItem.allowRelativeDates}.
 */
allowRelativeDates?: boolean;

/**
 * See {@link isc.MiniDateRangeItem.hasAdvancedCriteria() MiniDateRangeItem.hasAdvancedCriteria()}.
 */
hasAdvancedCriteria?: Function;

/**
 * See {@link isc.MiniDateRangeItem.fromDate MiniDateRangeItem.fromDate}.
 */
fromDate?: Date | string | string;

/**
 * See {@link isc.MiniDateRangeItem.shouldSaveValue MiniDateRangeItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.MiniDateRangeItem.setAutoValidate() MiniDateRangeItem.setAutoValidate()}.
 */
setAutoValidate?: Function;

/**
 * See {@link isc.MiniDateRangeItem.rangeDialogProperties MiniDateRangeItem.rangeDialogProperties}.
 */
rangeDialogProperties?: DateRangeDialog;

/**
 * See {@link isc.MiniDateRangeItem.fromDateOnlyPrefix MiniDateRangeItem.fromDateOnlyPrefix}.
 */
fromDateOnlyPrefix?: string;

/**
 * See {@link isc.MiniDateRangeItem.autoValidate MiniDateRangeItem.autoValidate}.
 */
autoValidate?: boolean;

/**
 * See {@link isc.MiniDateRangeItem.toDateOnlyPrefix MiniDateRangeItem.toDateOnlyPrefix}.
 */
toDateOnlyPrefix?: string;

/**
 * See {@link isc.MiniDateRangeItem.getValue() MiniDateRangeItem.getValue()}.
 */
getValue?: Function;

/**
 * See {@link isc.MiniDateRangeItem.canEditCriterion() MiniDateRangeItem.canEditCriterion()}.
 */
canEditCriterion?: Function;

/**
 * See {@link isc.MiniDateRangeItem.canFocus MiniDateRangeItem.canFocus}.
 */
canFocus?: boolean;

/**
 * See {@link isc.MiniDateRangeItem.pickerIcon MiniDateRangeItem.pickerIcon}.
 */
pickerIcon?: FormItemIcon;

/**
 * See {@link isc.MiniDateRangeItem.setValue() MiniDateRangeItem.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.MiniDateRangeItem.toDate MiniDateRangeItem.toDate}.
 */
toDate?: Date | string | string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * MiniDateRangeItem wraps the SmartClient widget class
 * {@link isc.MiniDateRangeItem MiniDateRangeItem} for React, allowing you to import
 * MiniDateRangeItem for use in React JS and JSX.
 * @class
 * @extends StaticTextItem
 */
declare class MiniDateRangeItem extends StaticTextItem {
    props: AsComponentXML<MiniDateRangeItemProps>;
}
