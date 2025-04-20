import React from 'react';
import { CanvasItem, CanvasItemProps } from './CanvasItem';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateRangeItemProps extends CanvasItemProps {

/**
 * See {@link isc.DateRangeItem.fromTitle DateRangeItem.fromTitle}.
 */
fromTitle?: string;

/**
 * See {@link isc.DateRangeItem.toDate DateRangeItem.toDate}.
 */
toDate?: Date | string | string;

/**
 * See {@link isc.DateRangeItem.canEditCriterion() DateRangeItem.canEditCriterion()}.
 */
canEditCriterion?: Function;

/**
 * See {@link isc.DateRangeItem.validateRange() DateRangeItem.validateRange()}.
 */
validateRange?: Function;

/**
 * See {@link isc.DateRangeItem.setFromDate() DateRangeItem.setFromDate()}.
 */
setFromDate?: Function;

/**
 * See {@link isc.DateRangeItem.setValue() DateRangeItem.setValue()}.
 */
setValue?: Function;

/**
 * See {@link isc.DateRangeItem.setCriterion() DateRangeItem.setCriterion()}.
 */
setCriterion?: Function;

/**
 * See {@link isc.DateRangeItem.fromFieldProperties DateRangeItem.fromFieldProperties}.
 */
fromFieldProperties?: FormItem;

/**
 * See {@link isc.DateRangeItem.relativeItemConstructor DateRangeItem.relativeItemConstructor}.
 */
relativeItemConstructor?: string;

/**
 * See {@link isc.DateRangeItem.setToDate() DateRangeItem.setToDate()}.
 */
setToDate?: Function;

/**
 * See {@link isc.DateRangeItem.absoluteDateTimeItemConstructor DateRangeItem.absoluteDateTimeItemConstructor}.
 */
absoluteDateTimeItemConstructor?: string;

/**
 * See {@link isc.DateRangeItem.allowRelativeDates DateRangeItem.allowRelativeDates}.
 */
allowRelativeDates?: boolean;

/**
 * See {@link isc.DateRangeItem.toTitle DateRangeItem.toTitle}.
 */
toTitle?: string;

/**
 * See {@link isc.DateRangeItem.fieldLayout DateRangeItem.fieldLayout}.
 */
fieldLayout?: string;

/**
 * See {@link isc.DateRangeItem.absoluteItemConstructor DateRangeItem.absoluteItemConstructor}.
 */
absoluteItemConstructor?: string;

/**
 * See {@link isc.DateRangeItem.fromDate DateRangeItem.fromDate}.
 */
fromDate?: Date | string | string;

/**
 * See {@link isc.DateRangeItem.validateCriteria DateRangeItem.validateCriteria}.
 */
validateCriteria?: boolean;

/**
 * See {@link isc.DateRangeItem.textFormula DateRangeItem.textFormula}.
 */
textFormula?: UserSummary;

/**
 * See {@link isc.DateRangeItem.shouldSaveValue DateRangeItem.shouldSaveValue}.
 */
shouldSaveValue?: boolean;

/**
 * See {@link isc.DateRangeItem.inputFormat DateRangeItem.inputFormat}.
 */
inputFormat?: string;

/**
 * See {@link isc.DateRangeItem.toFieldProperties DateRangeItem.toFieldProperties}.
 */
toFieldProperties?: FormItem;

/**
 * See {@link isc.DateRangeItem.invalidRangeErrorMessage DateRangeItem.invalidRangeErrorMessage}.
 */
invalidRangeErrorMessage?: string;

/**
 * See {@link isc.DateRangeItem.formula DateRangeItem.formula}.
 */
formula?: UserFormula;

/**
 * See {@link isc.DateRangeItem.getCriterion() DateRangeItem.getCriterion()}.
 */
getCriterion?: Function;

/**
 * See {@link isc.DateRangeItem.dateRangeFormProperties DateRangeItem.dateRangeFormProperties}.
 */
dateRangeFormProperties?: DynamicForm;

/**
 * See {@link isc.DateRangeItem.getValue() DateRangeItem.getValue()}.
 */
getValue?: Function;

/**
 * See {@link isc.DateRangeItem.hasAdvancedCriteria() DateRangeItem.hasAdvancedCriteria()}.
 */
hasAdvancedCriteria?: Function;

/**
 * See {@link isc.DateRangeItem.innerTitleOrientation DateRangeItem.innerTitleOrientation}.
 */
innerTitleOrientation?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateRangeItem wraps the SmartClient widget class
 * {@link isc.DateRangeItem DateRangeItem} for React, allowing you to import
 * DateRangeItem for use in React JS and JSX.
 * @class
 * @extends CanvasItem
 */
declare class DateRangeItem extends CanvasItem {
    props: AsComponentXML<DateRangeItemProps>;
}
