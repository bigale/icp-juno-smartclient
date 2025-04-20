import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface DateChooserProps extends VLayoutProps {

/**
 * See {@link isc.DateChooser.navigationButtonHeight DateChooser.navigationButtonHeight}.
 */
navigationButtonHeight?: number;

/**
 * See {@link isc.DateChooser.baseWeekdayStyle DateChooser.baseWeekdayStyle}.
 */
baseWeekdayStyle?: string;

/**
 * See {@link isc.DateChooser.previousYearButtonProperties DateChooser.previousYearButtonProperties}.
 */
previousYearButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.yearMenuStyle DateChooser.yearMenuStyle}.
 */
yearMenuStyle?: string;

/**
 * See {@link isc.DateChooser.headerStyle DateChooser.headerStyle}.
 */
headerStyle?: string;

/**
 * See {@link isc.DateChooser.baseWeekStyle DateChooser.baseWeekStyle}.
 */
baseWeekStyle?: string;

/**
 * See {@link isc.DateChooser.showDoubleYearIcon DateChooser.showDoubleYearIcon}.
 */
showDoubleYearIcon?: boolean;

/**
 * See {@link isc.DateChooser.prevMonthIcon DateChooser.prevMonthIcon}.
 */
prevMonthIcon?: string;

/**
 * See {@link isc.DateChooser.timeItemProperties DateChooser.timeItemProperties}.
 */
timeItemProperties?: TimeItem | TimeItem;

/**
 * See {@link isc.DateChooser.getData() DateChooser.getData()}.
 */
getData?: Function;

/**
 * See {@link isc.DateChooser.weekHeaderStyle DateChooser.weekHeaderStyle}.
 */
weekHeaderStyle?: string;

/**
 * See {@link isc.DateChooser.previousMonthButtonProperties DateChooser.previousMonthButtonProperties}.
 */
previousMonthButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.getHeaderYearTitle() DateChooser.getHeaderYearTitle()}.
 */
getHeaderYearTitle?: Function;

/**
 * See {@link isc.DateChooser.headerHeight DateChooser.headerHeight}.
 */
headerHeight?: number;

/**
 * See {@link isc.DateChooser.baseNavButtonStyle DateChooser.baseNavButtonStyle}.
 */
baseNavButtonStyle?: string;

/**
 * See {@link isc.DateChooser.endDate DateChooser.endDate}.
 */
endDate?: Date;

/**
 * See {@link isc.DateChooser.setFiscalCalendar() DateChooser.setFiscalCalendar()}.
 */
setFiscalCalendar?: Function;

/**
 * See {@link isc.DateChooser.showTodayButton DateChooser.showTodayButton}.
 */
showTodayButton?: boolean;

/**
 * See {@link isc.DateChooser.alternateWeekStyles DateChooser.alternateWeekStyles}.
 */
alternateWeekStyles?: boolean;

/**
 * See {@link isc.DateChooser.nextMonthIconRTL DateChooser.nextMonthIconRTL}.
 */
nextMonthIconRTL?: string;

/**
 * See {@link isc.DateChooser.weekFieldTitle DateChooser.weekFieldTitle}.
 */
weekFieldTitle?: string;

/**
 * See {@link isc.DateChooser.fiscalYearChooserButtonProperties DateChooser.fiscalYearChooserButtonProperties}.
 */
fiscalYearChooserButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.baseWeekendStyle DateChooser.baseWeekendStyle}.
 */
baseWeekendStyle?: string;

/**
 * See {@link isc.DateChooser.baseButtonStyle DateChooser.baseButtonStyle}.
 */
baseButtonStyle?: string;

/**
 * See {@link isc.DateChooser.getFiscalCalendar() DateChooser.getFiscalCalendar()}.
 */
getFiscalCalendar?: Function;

/**
 * See {@link isc.DateChooser.nextMonthIconHeight DateChooser.nextMonthIconHeight}.
 */
nextMonthIconHeight?: number;

/**
 * See {@link isc.DateChooser.weekendDays DateChooser.weekendDays}.
 */
weekendDays?: number[];

/**
 * See {@link isc.DateChooser.prevYearIconRTL DateChooser.prevYearIconRTL}.
 */
prevYearIconRTL?: string;

/**
 * See {@link isc.DateChooser.dayNameLength DateChooser.dayNameLength}.
 */
dayNameLength?: number;

/**
 * See {@link isc.DateChooser.nextYearIconWidth DateChooser.nextYearIconWidth}.
 */
nextYearIconWidth?: number;

/**
 * See {@link isc.DateChooser.disabledWeekdayStyle DateChooser.disabledWeekdayStyle}.
 */
disabledWeekdayStyle?: string;

/**
 * See {@link isc.DateChooser.todayButtonTitle DateChooser.todayButtonTitle}.
 */
todayButtonTitle?: string;

/**
 * See {@link isc.DateChooser.buttonLayoutProperties DateChooser.buttonLayoutProperties}.
 */
buttonLayoutProperties?: HLayout;

/**
 * See {@link isc.DateChooser.showApplyButton DateChooser.showApplyButton}.
 */
showApplyButton?: boolean;

/**
 * See {@link isc.DateChooser.skinImgDir DateChooser.skinImgDir}.
 */
skinImgDir?: string;

/**
 * See {@link isc.DateChooser.dateGridProperties DateChooser.dateGridProperties}.
 */
dateGridProperties?: DateGrid;

/**
 * See {@link isc.DateChooser.menuItemStyle DateChooser.menuItemStyle}.
 */
menuItemStyle?: string;

/**
 * See {@link isc.DateChooser.showCancelButton DateChooser.showCancelButton}.
 */
showCancelButton?: boolean;

/**
 * See {@link isc.DateChooser.showTimeItem DateChooser.showTimeItem}.
 */
showTimeItem?: boolean;

/**
 * See {@link isc.DateChooser.navigationLayoutHeight DateChooser.navigationLayoutHeight}.
 */
navigationLayoutHeight?: number;

/**
 * See {@link isc.DateChooser.previousMonthButtonAriaLabel DateChooser.previousMonthButtonAriaLabel}.
 */
previousMonthButtonAriaLabel?: string;

/**
 * See {@link isc.DateChooser.prevMonthIconRTL DateChooser.prevMonthIconRTL}.
 */
prevMonthIconRTL?: string;

/**
 * See {@link isc.DateChooser.nextYearIconHeight DateChooser.nextYearIconHeight}.
 */
nextYearIconHeight?: number;

/**
 * See {@link isc.DateChooser.endYear DateChooser.endYear}.
 */
endYear?: number;

/**
 * See {@link isc.DateChooser.nextYearIconRTL DateChooser.nextYearIconRTL}.
 */
nextYearIconRTL?: string;

/**
 * See {@link isc.DateChooser.showFiscalYearChooser DateChooser.showFiscalYearChooser}.
 */
showFiscalYearChooser?: boolean;

/**
 * See {@link isc.DateChooser.showWeekChooser DateChooser.showWeekChooser}.
 */
showWeekChooser?: boolean;

/**
 * See {@link isc.DateChooser.baseBottomButtonStyle DateChooser.baseBottomButtonStyle}.
 */
baseBottomButtonStyle?: string;

/**
 * See {@link isc.DateChooser.prevYearIcon DateChooser.prevYearIcon}.
 */
prevYearIcon?: string;

/**
 * See {@link isc.DateChooser.applyButtonProperties DateChooser.applyButtonProperties}.
 */
applyButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.startDate DateChooser.startDate}.
 */
startDate?: Date;

/**
 * See {@link isc.DateChooser.cancelButtonProperties DateChooser.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.cancelButtonTitle DateChooser.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.DateChooser.fiscalYearFieldTitle DateChooser.fiscalYearFieldTitle}.
 */
fiscalYearFieldTitle?: string;

/**
 * See {@link isc.DateChooser.prevMonthIconHeight DateChooser.prevMonthIconHeight}.
 */
prevMonthIconHeight?: number;

/**
 * See {@link isc.DateChooser.navigationLayoutProperties DateChooser.navigationLayoutProperties}.
 */
navigationLayoutProperties?: HLayout;

/**
 * See {@link isc.DateChooser.dataChanged() DateChooser.dataChanged()}.
 */
dataChanged?: Function;

/**
 * See {@link isc.DateChooser.startYear DateChooser.startYear}.
 */
startYear?: number;

/**
 * See {@link isc.DateChooser.previousYearButtonAriaLabel DateChooser.previousYearButtonAriaLabel}.
 */
previousYearButtonAriaLabel?: string;

/**
 * See {@link isc.DateChooser.startYearRange DateChooser.startYearRange}.
 */
startYearRange?: number;

/**
 * See {@link isc.DateChooser.disabledWeekendStyle DateChooser.disabledWeekendStyle}.
 */
disabledWeekendStyle?: string;

/**
 * See {@link isc.DateChooser.weekChooserButtonProperties DateChooser.weekChooserButtonProperties}.
 */
weekChooserButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.disabledDates DateChooser.disabledDates}.
 */
disabledDates?: Date[];

/**
 * See {@link isc.DateChooser.yearChooserButtonProperties DateChooser.yearChooserButtonProperties}.
 */
yearChooserButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.nextMonthButtonAriaLabel DateChooser.nextMonthButtonAriaLabel}.
 */
nextMonthButtonAriaLabel?: string;

/**
 * See {@link isc.DateChooser.endYearRange DateChooser.endYearRange}.
 */
endYearRange?: number;

/**
 * See {@link isc.DateChooser.nextMonthButtonProperties DateChooser.nextMonthButtonProperties}.
 */
nextMonthButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.styleWeekends DateChooser.styleWeekends}.
 */
styleWeekends?: boolean;

/**
 * See {@link isc.DateChooser.selectedWeekStyle DateChooser.selectedWeekStyle}.
 */
selectedWeekStyle?: string;

/**
 * See {@link isc.DateChooser.closeOnDateClick DateChooser.closeOnDateClick}.
 */
closeOnDateClick?: boolean;

/**
 * See {@link isc.DateChooser.buttonLayoutControls DateChooser.buttonLayoutControls}.
 */
buttonLayoutControls?: string[];

/**
 * See {@link isc.DateChooser.alternateStyleSuffix DateChooser.alternateStyleSuffix}.
 */
alternateStyleSuffix?: string;

/**
 * See {@link isc.DateChooser.todayButtonProperties DateChooser.todayButtonProperties}.
 */
todayButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.cancelClick() DateChooser.cancelClick()}.
 */
cancelClick?: Function;

/**
 * See {@link isc.DateChooser.setData() DateChooser.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.DateChooser.monthChooserButtonProperties DateChooser.monthChooserButtonProperties}.
 */
monthChooserButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.todayButtonHeight DateChooser.todayButtonHeight}.
 */
todayButtonHeight?: number;

/**
 * See {@link isc.DateChooser.nextYearButtonProperties DateChooser.nextYearButtonProperties}.
 */
nextYearButtonProperties?: IButton;

/**
 * See {@link isc.DateChooser.weekendHeaderStyle DateChooser.weekendHeaderStyle}.
 */
weekendHeaderStyle?: string;

/**
 * See {@link isc.DateChooser.prevYearIconHeight DateChooser.prevYearIconHeight}.
 */
prevYearIconHeight?: number;

/**
 * See {@link isc.DateChooser.todayClick() DateChooser.todayClick()}.
 */
todayClick?: Function;

/**
 * See {@link isc.DateChooser.monthMenuStyle DateChooser.monthMenuStyle}.
 */
monthMenuStyle?: string;

/**
 * See {@link isc.DateChooser.nextYearButtonAriaLabel DateChooser.nextYearButtonAriaLabel}.
 */
nextYearButtonAriaLabel?: string;

/**
 * See {@link isc.DateChooser.showWeekends DateChooser.showWeekends}.
 */
showWeekends?: boolean;

/**
 * See {@link isc.DateChooser.prevMonthIconWidth DateChooser.prevMonthIconWidth}.
 */
prevMonthIconWidth?: number;

/**
 * See {@link isc.DateChooser.fiscalYearHeaderStyle DateChooser.fiscalYearHeaderStyle}.
 */
fiscalYearHeaderStyle?: string;

/**
 * See {@link isc.DateChooser.use24HourTime DateChooser.use24HourTime}.
 */
use24HourTime?: boolean;

/**
 * See {@link isc.DateChooser.nextMonthIconWidth DateChooser.nextMonthIconWidth}.
 */
nextMonthIconWidth?: number;

/**
 * See {@link isc.DateChooser.getYearTitle() DateChooser.getYearTitle()}.
 */
getYearTitle?: Function;

/**
 * See {@link isc.DateChooser.showSecondItem DateChooser.showSecondItem}.
 */
showSecondItem?: boolean;

/**
 * See {@link isc.DateChooser.nextYearIcon DateChooser.nextYearIcon}.
 */
nextYearIcon?: string;

/**
 * See {@link isc.DateChooser.closeOnEscapeKeypress DateChooser.closeOnEscapeKeypress}.
 */
closeOnEscapeKeypress?: boolean;

/**
 * See {@link isc.DateChooser.weekMenuStyle DateChooser.weekMenuStyle}.
 */
weekMenuStyle?: string;

/**
 * See {@link isc.DateChooser.disableWeekends DateChooser.disableWeekends}.
 */
disableWeekends?: boolean;

/**
 * See {@link isc.DateChooser.navButtonConstructor DateChooser.navButtonConstructor}.
 */
navButtonConstructor?: string;

/**
 * See {@link isc.DateChooser.useFirstDayOfFiscalWeek DateChooser.useFirstDayOfFiscalWeek}.
 */
useFirstDayOfFiscalWeek?: boolean;

/**
 * See {@link isc.DateChooser.applyButtonTitle DateChooser.applyButtonTitle}.
 */
applyButtonTitle?: string;

/**
 * See {@link isc.DateChooser.firstDayOfWeek DateChooser.firstDayOfWeek}.
 */
firstDayOfWeek?: number;

/**
 * See {@link isc.DateChooser.timeItemTitle DateChooser.timeItemTitle}.
 */
timeItemTitle?: string;

/**
 * See {@link isc.DateChooser.prevYearIconWidth DateChooser.prevYearIconWidth}.
 */
prevYearIconWidth?: number;

/**
 * See {@link isc.DateChooser.nextMonthIcon DateChooser.nextMonthIcon}.
 */
nextMonthIcon?: string;

/**
 * See {@link isc.DateChooser.baseFiscalYearStyle DateChooser.baseFiscalYearStyle}.
 */
baseFiscalYearStyle?: string;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * DateChooser wraps the SmartClient widget class
 * {@link isc.DateChooser DateChooser} for React, allowing you to import
 * DateChooser for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class DateChooser extends VLayout {
    props: AsComponentXML<DateChooserProps>;
}
