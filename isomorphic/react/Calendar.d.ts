import React from 'react';
import { Canvas, CanvasProps } from './Canvas';
import { AsComponentXML } from './core/ReactComponent';


declare interface CalendarProps extends CanvasProps {

/**
 * See {@link isc.Calendar.timelineEventMoved() Calendar.timelineEventMoved()}.
 */
timelineEventMoved?: Function;

/**
 * See {@link isc.Calendar.baseStyle Calendar.baseStyle}.
 */
baseStyle?: string;

/**
 * See {@link isc.Calendar.eventRepositionStart() Calendar.eventRepositionStart()}.
 */
eventRepositionStart?: Function;

/**
 * See {@link isc.Calendar.eventHeaderHeight Calendar.eventHeaderHeight}.
 */
eventHeaderHeight?: number;

/**
 * See {@link isc.Calendar.getWorkdayEnd() Calendar.getWorkdayEnd()}.
 */
getWorkdayEnd?: Function;

/**
 * See {@link isc.Calendar.cancelButtonProperties Calendar.cancelButtonProperties}.
 */
cancelButtonProperties?: IButton;

/**
 * See {@link isc.Calendar.setZones() Calendar.setZones()}.
 */
setZones?: Function;

/**
 * See {@link isc.Calendar.dateEditingStyle Calendar.dateEditingStyle}.
 */
dateEditingStyle?: string;

/**
 * See {@link isc.Calendar.getMonthViewHoverHTML() Calendar.getMonthViewHoverHTML()}.
 */
getMonthViewHoverHTML?: Function;

/**
 * See {@link isc.Calendar.zoneTitleOrientation Calendar.zoneTitleOrientation}.
 */
zoneTitleOrientation?: string;

/**
 * See {@link isc.Calendar.otherDayBodyBaseStyle Calendar.otherDayBodyBaseStyle}.
 */
otherDayBodyBaseStyle?: string;

/**
 * See {@link isc.Calendar.showDateChooser Calendar.showDateChooser}.
 */
showDateChooser?: boolean;

/**
 * See {@link isc.Calendar.indicatorCanvasProperties Calendar.indicatorCanvasProperties}.
 */
indicatorCanvasProperties?: IndicatorCanvas;

/**
 * See {@link isc.Calendar.implicitCriteria Calendar.implicitCriteria}.
 */
implicitCriteria?: Criteria;

/**
 * See {@link isc.Calendar.dataSource Calendar.dataSource}.
 */
dataSource?: DataSource;

/**
 * See {@link isc.Calendar.laneEventPadding Calendar.laneEventPadding}.
 */
laneEventPadding?: number;

/**
 * See {@link isc.Calendar.canSelectEvents Calendar.canSelectEvents}.
 */
canSelectEvents?: boolean;

/**
 * See {@link isc.Calendar.eventEditorProperties Calendar.eventEditorProperties}.
 */
eventEditorProperties?: DynamicForm;

/**
 * See {@link isc.Calendar.showEventHeaders Calendar.showEventHeaders}.
 */
showEventHeaders?: boolean;

/**
 * See {@link isc.Calendar.updateEventCanvasComponent() Calendar.updateEventCanvasComponent()}.
 */
updateEventCanvasComponent?: Function;

/**
 * See {@link isc.Calendar.selectedCellStyle Calendar.selectedCellStyle}.
 */
selectedCellStyle?: string;

/**
 * See {@link isc.Calendar.bringEventsToFront Calendar.bringEventsToFront}.
 */
bringEventsToFront?: boolean;

/**
 * See {@link isc.Calendar.zoneCanvasProperties Calendar.zoneCanvasProperties}.
 */
zoneCanvasProperties?: ZoneCanvas;

/**
 * See {@link isc.Calendar.eventDragGap Calendar.eventDragGap}.
 */
eventDragGap?: number;

/**
 * See {@link isc.Calendar.startDate Calendar.startDate}.
 */
startDate?: Date;

/**
 * See {@link isc.Calendar.getSublaneEvents() Calendar.getSublaneEvents()}.
 */
getSublaneEvents?: Function;

/**
 * See {@link isc.Calendar.dateChanged() Calendar.dateChanged()}.
 */
dateChanged?: Function;

/**
 * See {@link isc.Calendar.alternateLaneStyles Calendar.alternateLaneStyles}.
 */
alternateLaneStyles?: boolean;

/**
 * See {@link isc.Calendar.hideUnusedLanes Calendar.hideUnusedLanes}.
 */
hideUnusedLanes?: boolean;

/**
 * See {@link isc.Calendar.canEditSublane Calendar.canEditSublane}.
 */
canEditSublane?: boolean;

/**
 * See {@link isc.Calendar.lanes Calendar.lanes}.
 */
lanes?: Lane[];

/**
 * See {@link isc.Calendar.getSublane() Calendar.getSublane()}.
 */
getSublane?: Function;

/**
 * See {@link isc.Calendar.showMonthButton Calendar.showMonthButton}.
 */
showMonthButton?: boolean;

/**
 * See {@link isc.Calendar.previousButtonHoverText Calendar.previousButtonHoverText}.
 */
previousButtonHoverText?: string;

/**
 * See {@link isc.Calendar.selectionManager Calendar.selectionManager}.
 */
selectionManager?: Selection;

/**
 * See {@link isc.Calendar.eventDialogFields Calendar.eventDialogFields}.
 */
eventDialogFields?: FormItem[];

/**
 * See {@link isc.Calendar.eventEndDateFieldTitle Calendar.eventEndDateFieldTitle}.
 */
eventEndDateFieldTitle?: string;

/**
 * See {@link isc.Calendar.minimalUI Calendar.minimalUI}.
 */
minimalUI?: boolean;

/**
 * See {@link isc.Calendar.fixedEventHeight Calendar.fixedEventHeight}.
 */
fixedEventHeight?: number;

/**
 * See {@link isc.Calendar.otherDayBlankStyle Calendar.otherDayBlankStyle}.
 */
otherDayBlankStyle?: string;

/**
 * See {@link isc.Calendar.weekendDays Calendar.weekendDays}.
 */
weekendDays?: number[];

/**
 * See {@link isc.Calendar.saveButtonTitle Calendar.saveButtonTitle}.
 */
saveButtonTitle?: string;

/**
 * See {@link isc.Calendar.timelineGranularity Calendar.timelineGranularity}.
 */
timelineGranularity?: string;

/**
 * See {@link isc.Calendar.laneFields Calendar.laneFields}.
 */
laneFields?: ListGridField[];

/**
 * See {@link isc.Calendar.durationUnitField Calendar.durationUnitField}.
 */
durationUnitField?: string;

/**
 * See {@link isc.Calendar.setHideUnusedLanes() Calendar.setHideUnusedLanes()}.
 */
setHideUnusedLanes?: Function;

/**
 * See {@link isc.Calendar.showCellHovers Calendar.showCellHovers}.
 */
showCellHovers?: boolean;

/**
 * See {@link isc.Calendar.nextButtonProperties Calendar.nextButtonProperties}.
 */
nextButtonProperties?: ImgButton;

/**
 * See {@link isc.Calendar.selectSingleEvent() Calendar.selectSingleEvent()}.
 */
selectSingleEvent?: Function;

/**
 * See {@link isc.Calendar.data Calendar.data}.
 */
data?: CalendarEvent[];

/**
 * See {@link isc.Calendar.saveButtonProperties Calendar.saveButtonProperties}.
 */
saveButtonProperties?: IButton;

/**
 * See {@link isc.Calendar.getEventLength() Calendar.getEventLength()}.
 */
getEventLength?: Function;

/**
 * See {@link isc.Calendar.eventCanvasButtonLayoutProperties Calendar.eventCanvasButtonLayoutProperties}.
 */
eventCanvasButtonLayoutProperties?: HLayout;

/**
 * See {@link isc.Calendar.leadingDateField Calendar.leadingDateField}.
 */
leadingDateField?: string;

/**
 * See {@link isc.Calendar.eventCanvasCloseButtonSize Calendar.eventCanvasCloseButtonSize}.
 */
eventCanvasCloseButtonSize?: number;

/**
 * See {@link isc.Calendar.removeZone() Calendar.removeZone()}.
 */
removeZone?: Function;

/**
 * See {@link isc.Calendar.setResolution() Calendar.setResolution()}.
 */
setResolution?: Function;

/**
 * See {@link isc.Calendar.calMonthEventLinkStyle Calendar.calMonthEventLinkStyle}.
 */
calMonthEventLinkStyle?: string;

/**
 * See {@link isc.Calendar.canEditLane Calendar.canEditLane}.
 */
canEditLane?: boolean;

/**
 * See {@link isc.Calendar.dayViewProperties Calendar.dayViewProperties}.
 */
dayViewProperties?: CalendarView;

/**
 * See {@link isc.Calendar.getPeriodStartDate() Calendar.getPeriodStartDate()}.
 */
getPeriodStartDate?: Function;

/**
 * See {@link isc.Calendar.eventStartDateFieldTitle Calendar.eventStartDateFieldTitle}.
 */
eventStartDateFieldTitle?: string;

/**
 * See {@link isc.Calendar.showNewEventDialog() Calendar.showNewEventDialog()}.
 */
showNewEventDialog?: Function;

/**
 * See {@link isc.Calendar.deselectEvents() Calendar.deselectEvents()}.
 */
deselectEvents?: Function;

/**
 * See {@link isc.Calendar.showNextButton Calendar.showNextButton}.
 */
showNextButton?: boolean;

/**
 * See {@link isc.Calendar.removeButtonProperties Calendar.removeButtonProperties}.
 */
removeButtonProperties?: IButton;

/**
 * See {@link isc.Calendar.eventRemoveClick() Calendar.eventRemoveClick()}.
 */
eventRemoveClick?: Function;

/**
 * See {@link isc.Calendar.eventResizeMove() Calendar.eventResizeMove()}.
 */
eventResizeMove?: Function;

/**
 * See {@link isc.Calendar.eventCanvasGripperProperties Calendar.eventCanvasGripperProperties}.
 */
eventCanvasGripperProperties?: Img;

/**
 * See {@link isc.Calendar.minimumDayHeight Calendar.minimumDayHeight}.
 */
minimumDayHeight?: number;

/**
 * See {@link isc.Calendar.eventCanvasContextMenuProperties Calendar.eventCanvasContextMenuProperties}.
 */
eventCanvasContextMenuProperties?: Menu;

/**
 * See {@link isc.Calendar.showAddEventButton Calendar.showAddEventButton}.
 */
showAddEventButton?: boolean;

/**
 * See {@link isc.Calendar.getEventCanvasMenuItems() Calendar.getEventCanvasMenuItems()}.
 */
getEventCanvasMenuItems?: Function;

/**
 * See {@link isc.Calendar.addEventButtonProperties Calendar.addEventButtonProperties}.
 */
addEventButtonProperties?: ImgButton;

/**
 * See {@link isc.Calendar.rowHeight Calendar.rowHeight}.
 */
rowHeight?: number;

/**
 * See {@link isc.Calendar.dayBodyBaseStyle Calendar.dayBodyBaseStyle}.
 */
dayBodyBaseStyle?: string;

/**
 * See {@link isc.Calendar.todayBackgroundColor Calendar.todayBackgroundColor}.
 */
todayBackgroundColor?: string;

/**
 * See {@link isc.Calendar.showEventCanvasComponent() Calendar.showEventCanvasComponent()}.
 */
showEventCanvasComponent?: Function;

/**
 * See {@link isc.Calendar.eventChanged() Calendar.eventChanged()}.
 */
eventChanged?: Function;

/**
 * See {@link isc.Calendar.selectEvents() Calendar.selectEvents()}.
 */
selectEvents?: Function;

/**
 * See {@link isc.Calendar.eventMoved() Calendar.eventMoved()}.
 */
eventMoved?: Function;

/**
 * See {@link isc.Calendar.showDayHeaders Calendar.showDayHeaders}.
 */
showDayHeaders?: boolean;

/**
 * See {@link isc.Calendar.getDateCellAlign() Calendar.getDateCellAlign()}.
 */
getDateCellAlign?: Function;

/**
 * See {@link isc.Calendar.indicators Calendar.indicators}.
 */
indicators?: CalendarEvent[];

/**
 * See {@link isc.Calendar.eventStyleNameField Calendar.eventStyleNameField}.
 */
eventStyleNameField?: string;

/**
 * See {@link isc.Calendar.getLane() Calendar.getLane()}.
 */
getLane?: Function;

/**
 * See {@link isc.Calendar.timelineViewProperties Calendar.timelineViewProperties}.
 */
timelineViewProperties?: CalendarView;

/**
 * See {@link isc.Calendar.getLaneFromPoint() Calendar.getLaneFromPoint()}.
 */
getLaneFromPoint?: Function;

/**
 * See {@link isc.Calendar.dayBodyClick() Calendar.dayBodyClick()}.
 */
dayBodyClick?: Function;

/**
 * See {@link isc.Calendar.getDayBodyHTML() Calendar.getDayBodyHTML()}.
 */
getDayBodyHTML?: Function;

/**
 * See {@link isc.Calendar.setLaneTitle() Calendar.setLaneTitle()}.
 */
setLaneTitle?: Function;

/**
 * See {@link isc.Calendar.detailsButtonTitle Calendar.detailsButtonTitle}.
 */
detailsButtonTitle?: string;

/**
 * See {@link isc.Calendar.addZone() Calendar.addZone()}.
 */
addZone?: Function;

/**
 * See {@link isc.Calendar.deselectEvent() Calendar.deselectEvent()}.
 */
deselectEvent?: Function;

/**
 * See {@link isc.Calendar.overlapSortSpecifiers Calendar.overlapSortSpecifiers}.
 */
overlapSortSpecifiers?: SortSpecifier[];

/**
 * See {@link isc.Calendar.setHeaderLevels() Calendar.setHeaderLevels()}.
 */
setHeaderLevels?: Function;

/**
 * See {@link isc.Calendar.useEventCanvasRolloverControls Calendar.useEventCanvasRolloverControls}.
 */
useEventCanvasRolloverControls?: boolean;

/**
 * See {@link isc.Calendar.groupLanesBy() Calendar.groupLanesBy()}.
 */
groupLanesBy?: Function;

/**
 * See {@link isc.Calendar.currentViewName Calendar.currentViewName}.
 */
currentViewName?: string;

/**
 * See {@link isc.Calendar.shouldDisableDate() Calendar.shouldDisableDate()}.
 */
shouldDisableDate?: Function;

/**
 * See {@link isc.Calendar.canRemoveField Calendar.canRemoveField}.
 */
canRemoveField?: string;

/**
 * See {@link isc.Calendar.mainViewProperties Calendar.mainViewProperties}.
 */
mainViewProperties?: TabSet;

/**
 * See {@link isc.Calendar.workdayBaseStyle Calendar.workdayBaseStyle}.
 */
workdayBaseStyle?: string;

/**
 * See {@link isc.Calendar.backgroundClick() Calendar.backgroundClick()}.
 */
backgroundClick?: Function;

/**
 * See {@link isc.Calendar.canDragEvents Calendar.canDragEvents}.
 */
canDragEvents?: boolean;

/**
 * See {@link isc.Calendar.eventEditorLayoutProperties Calendar.eventEditorLayoutProperties}.
 */
eventEditorLayoutProperties?: Window;

/**
 * See {@link isc.Calendar.setIndicators() Calendar.setIndicators()}.
 */
setIndicators?: Function;

/**
 * See {@link isc.Calendar.eventOverlap Calendar.eventOverlap}.
 */
eventOverlap?: boolean;

/**
 * See {@link isc.Calendar.getEventEndDate() Calendar.getEventEndDate()}.
 */
getEventEndDate?: Function;

/**
 * See {@link isc.Calendar.datePickerButtonProperties Calendar.datePickerButtonProperties}.
 */
datePickerButtonProperties?: ImgButton;

/**
 * See {@link isc.Calendar.canResizeEvents Calendar.canResizeEvents}.
 */
canResizeEvents?: boolean;

/**
 * See {@link isc.Calendar.showWorkday Calendar.showWorkday}.
 */
showWorkday?: boolean;

/**
 * See {@link isc.Calendar.setShowViewHovers() Calendar.setShowViewHovers()}.
 */
setShowViewHovers?: Function;

/**
 * See {@link isc.Calendar.laneGroupStartOpen Calendar.laneGroupStartOpen}.
 */
laneGroupStartOpen?: string | string[];

/**
 * See {@link isc.Calendar.previousButtonProperties Calendar.previousButtonProperties}.
 */
previousButtonProperties?: ImgButton;

/**
 * See {@link isc.Calendar.dayHeaderClick() Calendar.dayHeaderClick()}.
 */
dayHeaderClick?: Function;

/**
 * See {@link isc.Calendar.controlsBarHeight Calendar.controlsBarHeight}.
 */
controlsBarHeight?: number;

/**
 * See {@link isc.Calendar.eventCanvasLabelProperties Calendar.eventCanvasLabelProperties}.
 */
eventCanvasLabelProperties?: Label;

/**
 * See {@link isc.Calendar.monthButtonProperties Calendar.monthButtonProperties}.
 */
monthButtonProperties?: NavigationButton;

/**
 * See {@link isc.Calendar.eventCanvasProperties Calendar.eventCanvasProperties}.
 */
eventCanvasProperties?: EventCanvas;

/**
 * See {@link isc.Calendar.otherDayHeaderBaseStyle Calendar.otherDayHeaderBaseStyle}.
 */
otherDayHeaderBaseStyle?: string;

/**
 * See {@link isc.Calendar.monthButtonTitle Calendar.monthButtonTitle}.
 */
monthButtonTitle?: string;

/**
 * See {@link isc.Calendar.eventWindowStyle Calendar.eventWindowStyle}.
 */
eventWindowStyle?: string;

/**
 * See {@link isc.Calendar.getView() Calendar.getView()}.
 */
getView?: Function;

/**
 * See {@link isc.Calendar.eventDialogProperties Calendar.eventDialogProperties}.
 */
eventDialogProperties?: Window;

/**
 * See {@link isc.Calendar.getDragHoverHTML() Calendar.getDragHoverHTML()}.
 */
getDragHoverHTML?: Function;

/**
 * See {@link isc.Calendar.timelineEventResized() Calendar.timelineEventResized()}.
 */
timelineEventResized?: Function;

/**
 * See {@link isc.Calendar.weekViewProperties Calendar.weekViewProperties}.
 */
weekViewProperties?: CalendarView;

/**
 * See {@link isc.Calendar.createEventCanvasComponent() Calendar.createEventCanvasComponent()}.
 */
createEventCanvasComponent?: Function;

/**
 * See {@link isc.Calendar.alwaysShowEventHovers Calendar.alwaysShowEventHovers}.
 */
alwaysShowEventHovers?: boolean;

/**
 * See {@link isc.Calendar.eventOverlapPercent Calendar.eventOverlapPercent}.
 */
eventOverlapPercent?: number;

/**
 * See {@link isc.Calendar.eventNameFieldTitle Calendar.eventNameFieldTitle}.
 */
eventNameFieldTitle?: string;

/**
 * See {@link isc.Calendar.getSelectedEvent() Calendar.getSelectedEvent()}.
 */
getSelectedEvent?: Function;

/**
 * See {@link isc.Calendar.showEventHovers Calendar.showEventHovers}.
 */
showEventHovers?: boolean;

/**
 * See {@link isc.Calendar.headerLevels Calendar.headerLevels}.
 */
headerLevels?: HeaderLevel[];

/**
 * See {@link isc.Calendar.styleWorkday Calendar.styleWorkday}.
 */
styleWorkday?: boolean;

/**
 * See {@link isc.Calendar.getIndicatorCanvasStyle() Calendar.getIndicatorCanvasStyle()}.
 */
getIndicatorCanvasStyle?: Function;

/**
 * See {@link isc.Calendar.canEditField Calendar.canEditField}.
 */
canEditField?: string;

/**
 * See {@link isc.Calendar.getEventLane() Calendar.getEventLane()}.
 */
getEventLane?: Function;

/**
 * See {@link isc.Calendar.setLanes() Calendar.setLanes()}.
 */
setLanes?: Function;

/**
 * See {@link isc.Calendar.rowTitleFrequency Calendar.rowTitleFrequency}.
 */
rowTitleFrequency?: number;

/**
 * See {@link isc.Calendar.controlBarIconBaseStyle Calendar.controlBarIconBaseStyle}.
 */
controlBarIconBaseStyle?: string;

/**
 * See {@link isc.Calendar.getLaneEvents() Calendar.getLaneEvents()}.
 */
getLaneEvents?: Function;

/**
 * See {@link isc.Calendar.autoFetchData Calendar.autoFetchData}.
 */
autoFetchData?: boolean;

/**
 * See {@link isc.Calendar.showZoneHovers Calendar.showZoneHovers}.
 */
showZoneHovers?: boolean;

/**
 * See {@link isc.Calendar.dateIsWorkday() Calendar.dateIsWorkday()}.
 */
dateIsWorkday?: Function;

/**
 * See {@link isc.Calendar.getEventStartDate() Calendar.getEventStartDate()}.
 */
getEventStartDate?: Function;

/**
 * See {@link isc.Calendar.getDateCSSText() Calendar.getDateCSSText()}.
 */
getDateCSSText?: Function;

/**
 * See {@link isc.Calendar.addCalendarEvent() Calendar.addCalendarEvent()}.
 */
addCalendarEvent?: Function;

/**
 * See {@link isc.Calendar.eventCanvasComponentProperties Calendar.eventCanvasComponentProperties}.
 */
eventCanvasComponentProperties?: Canvas;

/**
 * See {@link isc.Calendar.getVisibleStartDate() Calendar.getVisibleStartDate()}.
 */
getVisibleStartDate?: Function;

/**
 * See {@link isc.Calendar.laneGroupByField Calendar.laneGroupByField}.
 */
laneGroupByField?: string | string[];

/**
 * See {@link isc.Calendar.eventDescriptionFieldTitle Calendar.eventDescriptionFieldTitle}.
 */
eventDescriptionFieldTitle?: string;

/**
 * See {@link isc.Calendar.setData() Calendar.setData()}.
 */
setData?: Function;

/**
 * See {@link isc.Calendar.canResizeEventField Calendar.canResizeEventField}.
 */
canResizeEventField?: string;

/**
 * See {@link isc.Calendar.eventOverlapIdenticalStartTimes Calendar.eventOverlapIdenticalStartTimes}.
 */
eventOverlapIdenticalStartTimes?: boolean;

/**
 * See {@link isc.Calendar.getActiveDay() Calendar.getActiveDay()}.
 */
getActiveDay?: Function;

/**
 * See {@link isc.Calendar.dateChooserProperties Calendar.dateChooserProperties}.
 */
dateChooserProperties?: DateChooser;

/**
 * See {@link isc.Calendar.columnsPerPage Calendar.columnsPerPage}.
 */
columnsPerPage?: number;

/**
 * See {@link isc.Calendar.canGroupLanes Calendar.canGroupLanes}.
 */
canGroupLanes?: boolean;

/**
 * See {@link isc.Calendar.getEventHeaderHTML() Calendar.getEventHeaderHTML()}.
 */
getEventHeaderHTML?: Function;

/**
 * See {@link isc.Calendar.eventClick() Calendar.eventClick()}.
 */
eventClick?: Function;

/**
 * See {@link isc.Calendar.showEventDialog() Calendar.showEventDialog()}.
 */
showEventDialog?: Function;

/**
 * See {@link isc.Calendar.eventRepositionMove() Calendar.eventRepositionMove()}.
 */
eventRepositionMove?: Function;

/**
 * See {@link isc.Calendar.eventEditorFields Calendar.eventEditorFields}.
 */
eventEditorFields?: FormItem[];

/**
 * See {@link isc.Calendar.scrollToTime() Calendar.scrollToTime()}.
 */
scrollToTime?: Function;

/**
 * See {@link isc.Calendar.backgroundMouseDown() Calendar.backgroundMouseDown()}.
 */
backgroundMouseDown?: Function;

/**
 * See {@link isc.Calendar.removeButtonTitle Calendar.removeButtonTitle}.
 */
removeButtonTitle?: string;

/**
 * See {@link isc.Calendar.indicatorClick() Calendar.indicatorClick()}.
 */
indicatorClick?: Function;

/**
 * See {@link isc.Calendar.firstDayOfWeek Calendar.firstDayOfWeek}.
 */
firstDayOfWeek?: number;

/**
 * See {@link isc.Calendar.showColumnLayouts Calendar.showColumnLayouts}.
 */
showColumnLayouts?: boolean;

/**
 * See {@link isc.Calendar.currentViewChanged() Calendar.currentViewChanged()}.
 */
currentViewChanged?: Function;

/**
 * See {@link isc.Calendar.selectTab() Calendar.selectTab()}.
 */
selectTab?: Function;

/**
 * See {@link isc.Calendar.minLaneHeight Calendar.minLaneHeight}.
 */
minLaneHeight?: number;

/**
 * See {@link isc.Calendar.setShowDayLanes() Calendar.setShowDayLanes()}.
 */
setShowDayLanes?: Function;

/**
 * See {@link isc.Calendar.getDateStyle() Calendar.getDateStyle()}.
 */
getDateStyle?: Function;

/**
 * See {@link isc.Calendar.refreshEvent() Calendar.refreshEvent()}.
 */
refreshEvent?: Function;

/**
 * See {@link isc.Calendar.addEvent() Calendar.addEvent()}.
 */
addEvent?: Function;

/**
 * See {@link isc.Calendar.getCellHoverHTML() Calendar.getCellHoverHTML()}.
 */
getCellHoverHTML?: Function;

/**
 * See {@link isc.Calendar.eventEditorButtonLayoutProperties Calendar.eventEditorButtonLayoutProperties}.
 */
eventEditorButtonLayoutProperties?: HLayout;

/**
 * See {@link isc.Calendar.renderEventsOnDemand Calendar.renderEventsOnDemand}.
 */
renderEventsOnDemand?: boolean;

/**
 * See {@link isc.Calendar.shouldShowEvent() Calendar.shouldShowEvent()}.
 */
shouldShowEvent?: Function;

/**
 * See {@link isc.Calendar.weekPrefix Calendar.weekPrefix}.
 */
weekPrefix?: string;

/**
 * See {@link isc.Calendar.showNewEventEditor() Calendar.showNewEventEditor()}.
 */
showNewEventEditor?: Function;

/**
 * See {@link isc.Calendar.sizeToWorkday Calendar.sizeToWorkday}.
 */
sizeToWorkday?: boolean;

/**
 * See {@link isc.Calendar.sublaneNameField Calendar.sublaneNameField}.
 */
sublaneNameField?: string;

/**
 * See {@link isc.Calendar.chosenDate Calendar.chosenDate}.
 */
chosenDate?: Date;

/**
 * See {@link isc.Calendar.monthMoreEventsMenuProperties Calendar.monthMoreEventsMenuProperties}.
 */
monthMoreEventsMenuProperties?: Menu;

/**
 * See {@link isc.Calendar.getVisibleEndDate() Calendar.getVisibleEndDate()}.
 */
getVisibleEndDate?: Function;

/**
 * See {@link isc.Calendar.timeFormatter Calendar.timeFormatter}.
 */
timeFormatter?: string;

/**
 * See {@link isc.Calendar.monthViewProperties Calendar.monthViewProperties}.
 */
monthViewProperties?: CalendarView;

/**
 * See {@link isc.Calendar.setShowWeekends() Calendar.setShowWeekends()}.
 */
setShowWeekends?: Function;

/**
 * See {@link isc.Calendar.eventSaveError() Calendar.eventSaveError()}.
 */
eventSaveError?: Function;

/**
 * See {@link isc.Calendar.cancelEditing() Calendar.cancelEditing()}.
 */
cancelEditing?: Function;

/**
 * See {@link isc.Calendar.getIndicatorHoverHTML() Calendar.getIndicatorHoverHTML()}.
 */
getIndicatorHoverHTML?: Function;

/**
 * See {@link isc.Calendar.showHeaderHovers Calendar.showHeaderHovers}.
 */
showHeaderHovers?: boolean;

/**
 * See {@link isc.Calendar.setCurrentViewName() Calendar.setCurrentViewName()}.
 */
setCurrentViewName?: Function;

/**
 * See {@link isc.Calendar.eventSnapGap Calendar.eventSnapGap}.
 */
eventSnapGap?: number;

/**
 * See {@link isc.Calendar.backgroundMouseUp() Calendar.backgroundMouseUp()}.
 */
backgroundMouseUp?: Function;

/**
 * See {@link isc.Calendar.newEventWindowTitle Calendar.newEventWindowTitle}.
 */
newEventWindowTitle?: string;

/**
 * See {@link isc.Calendar.next() Calendar.next()}.
 */
next?: Function;

/**
 * See {@link isc.Calendar.getEventCanvasStyle() Calendar.getEventCanvasStyle()}.
 */
getEventCanvasStyle?: Function;

/**
 * See {@link isc.Calendar.getZoneCanvasStyle() Calendar.getZoneCanvasStyle()}.
 */
getZoneCanvasStyle?: Function;

/**
 * See {@link isc.Calendar.addEventButtonHoverText Calendar.addEventButtonHoverText}.
 */
addEventButtonHoverText?: string;

/**
 * See {@link isc.Calendar.getPeriodEndDate() Calendar.getPeriodEndDate()}.
 */
getPeriodEndDate?: Function;

/**
 * See {@link isc.Calendar.nameField Calendar.nameField}.
 */
nameField?: string;

/**
 * See {@link isc.Calendar.monthViewTitle Calendar.monthViewTitle}.
 */
monthViewTitle?: string;

/**
 * See {@link isc.Calendar.useSublanes Calendar.useSublanes}.
 */
useSublanes?: boolean;

/**
 * See {@link isc.Calendar.removeLane() Calendar.removeLane()}.
 */
removeLane?: Function;

/**
 * See {@link isc.Calendar.eventSublaneFieldTitle Calendar.eventSublaneFieldTitle}.
 */
eventSublaneFieldTitle?: string;

/**
 * See {@link isc.Calendar.showLaneRollOver Calendar.showLaneRollOver}.
 */
showLaneRollOver?: boolean;

/**
 * See {@link isc.Calendar.showEventDescriptions Calendar.showEventDescriptions}.
 */
showEventDescriptions?: boolean;

/**
 * See {@link isc.Calendar.weekViewTitle Calendar.weekViewTitle}.
 */
weekViewTitle?: string;

/**
 * See {@link isc.Calendar.setTimelineRange() Calendar.setTimelineRange()}.
 */
setTimelineRange?: Function;

/**
 * See {@link isc.Calendar.showLaneFieldHovers Calendar.showLaneFieldHovers}.
 */
showLaneFieldHovers?: boolean;

/**
 * See {@link isc.Calendar.canDragEventField Calendar.canDragEventField}.
 */
canDragEventField?: string;

/**
 * See {@link isc.Calendar.getCellDate() Calendar.getCellDate()}.
 */
getCellDate?: Function;

/**
 * See {@link isc.Calendar.weekEventBorderOverlap Calendar.weekEventBorderOverlap}.
 */
weekEventBorderOverlap?: boolean;

/**
 * See {@link isc.Calendar.getDateHeaderTitle() Calendar.getDateHeaderTitle()}.
 */
getDateHeaderTitle?: Function;

/**
 * See {@link isc.Calendar.includeRangeCriteria Calendar.includeRangeCriteria}.
 */
includeRangeCriteria?: boolean;

/**
 * See {@link isc.Calendar.defaultTimelineColumnSpan Calendar.defaultTimelineColumnSpan}.
 */
defaultTimelineColumnSpan?: number;

/**
 * See {@link isc.Calendar.eventCanvasContextButtonProperties Calendar.eventCanvasContextButtonProperties}.
 */
eventCanvasContextButtonProperties?: ImgButton;

/**
 * See {@link isc.Calendar.eventEditorDateFieldTitle Calendar.eventEditorDateFieldTitle}.
 */
eventEditorDateFieldTitle?: string;

/**
 * See {@link isc.Calendar.setEventStyle() Calendar.setEventStyle()}.
 */
setEventStyle?: Function;

/**
 * See {@link isc.Calendar.startDateField Calendar.startDateField}.
 */
startDateField?: string;

/**
 * See {@link isc.Calendar.removeEvent() Calendar.removeEvent()}.
 */
removeEvent?: Function;

/**
 * See {@link isc.Calendar.durationField Calendar.durationField}.
 */
durationField?: string;

/**
 * See {@link isc.Calendar.getEventCanvasGripperIcon() Calendar.getEventCanvasGripperIcon()}.
 */
getEventCanvasGripperIcon?: Function;

/**
 * See {@link isc.Calendar.workdayEnd Calendar.workdayEnd}.
 */
workdayEnd?: Time;

/**
 * See {@link isc.Calendar.eventScreen Calendar.eventScreen}.
 */
eventScreen?: string;

/**
 * See {@link isc.Calendar.canResizeTimelineEvents Calendar.canResizeTimelineEvents}.
 */
canResizeTimelineEvents?: boolean;

/**
 * See {@link isc.Calendar.scrollToWorkday Calendar.scrollToWorkday}.
 */
scrollToWorkday?: boolean;

/**
 * See {@link isc.Calendar.shouldShowLane() Calendar.shouldShowLane()}.
 */
shouldShowLane?: Function;

/**
 * See {@link isc.Calendar.getSublaneFromPoint() Calendar.getSublaneFromPoint()}.
 */
getSublaneFromPoint?: Function;

/**
 * See {@link isc.Calendar.canEditSublaneField Calendar.canEditSublaneField}.
 */
canEditSublaneField?: string;

/**
 * See {@link isc.Calendar.minLaneWidth Calendar.minLaneWidth}.
 */
minLaneWidth?: number;

/**
 * See {@link isc.Calendar.selectChosenDate Calendar.selectChosenDate}.
 */
selectChosenDate?: boolean;

/**
 * See {@link isc.Calendar.workdays Calendar.workdays}.
 */
workdays?: string[];

/**
 * See {@link isc.Calendar.getZoneHoverHTML() Calendar.getZoneHoverHTML()}.
 */
getZoneHoverHTML?: Function;

/**
 * See {@link isc.Calendar.cancelButtonTitle Calendar.cancelButtonTitle}.
 */
cancelButtonTitle?: string;

/**
 * See {@link isc.Calendar.indicatorStyleName Calendar.indicatorStyleName}.
 */
indicatorStyleName?: string;

/**
 * See {@link isc.Calendar.eventLaneFieldTitle Calendar.eventLaneFieldTitle}.
 */
eventLaneFieldTitle?: string;

/**
 * See {@link isc.Calendar.showIndicatorsInFront Calendar.showIndicatorsInFront}.
 */
showIndicatorsInFront?: boolean;

/**
 * See {@link isc.Calendar.backButtonIconSrc Calendar.backButtonIconSrc}.
 */
backButtonIconSrc?: string;

/**
 * See {@link isc.Calendar.showViewHovers Calendar.showViewHovers}.
 */
showViewHovers?: boolean;

/**
 * See {@link isc.Calendar.getDateCellVAlign() Calendar.getDateCellVAlign()}.
 */
getDateCellVAlign?: Function;

/**
 * See {@link isc.Calendar.monthMoreEventsLinkTitle Calendar.monthMoreEventsLinkTitle}.
 */
monthMoreEventsLinkTitle?: string;

/**
 * See {@link isc.Calendar.showWeekView Calendar.showWeekView}.
 */
showWeekView?: boolean;

/**
 * See {@link isc.Calendar.previous() Calendar.previous()}.
 */
previous?: Function;

/**
 * See {@link isc.Calendar.addIndicator() Calendar.addIndicator()}.
 */
addIndicator?: Function;

/**
 * See {@link isc.Calendar.backButtonTitle Calendar.backButtonTitle}.
 */
backButtonTitle?: string;

/**
 * See {@link isc.Calendar.controlBarIconSize Calendar.controlBarIconSize}.
 */
controlBarIconSize?: number;

/**
 * See {@link isc.Calendar.zoneClick() Calendar.zoneClick()}.
 */
zoneClick?: Function;

/**
 * See {@link isc.Calendar.getSelectedEvents() Calendar.getSelectedEvents()}.
 */
getSelectedEvents?: Function;

/**
 * See {@link isc.Calendar.canRemoveEvents Calendar.canRemoveEvents}.
 */
canRemoveEvents?: boolean;

/**
 * See {@link isc.Calendar.eventDurationUnitFieldTitle Calendar.eventDurationUnitFieldTitle}.
 */
eventDurationUnitFieldTitle?: string;

/**
 * See {@link isc.Calendar.canCreateOtherDayEvents Calendar.canCreateOtherDayEvents}.
 */
canCreateOtherDayEvents?: boolean;

/**
 * See {@link isc.Calendar.showZones Calendar.showZones}.
 */
showZones?: boolean;

/**
 * See {@link isc.Calendar.scrollToStart() Calendar.scrollToStart()}.
 */
scrollToStart?: Function;

/**
 * See {@link isc.Calendar.showEventEditor() Calendar.showEventEditor()}.
 */
showEventEditor?: Function;

/**
 * See {@link isc.Calendar.getDateFromPoint() Calendar.getDateFromPoint()}.
 */
getDateFromPoint?: Function;

/**
 * See {@link isc.Calendar.showIndicators Calendar.showIndicators}.
 */
showIndicators?: boolean;

/**
 * See {@link isc.Calendar.showOtherDays Calendar.showOtherDays}.
 */
showOtherDays?: boolean;

/**
 * See {@link isc.Calendar.eventCanvasVResizerProperties Calendar.eventCanvasVResizerProperties}.
 */
eventCanvasVResizerProperties?: Img;

/**
 * See {@link isc.Calendar.minutesPerRow Calendar.minutesPerRow}.
 */
minutesPerRow?: number;

/**
 * See {@link isc.Calendar.sizeEventsToGrid Calendar.sizeEventsToGrid}.
 */
sizeEventsToGrid?: boolean;

/**
 * See {@link isc.Calendar.updateEvent() Calendar.updateEvent()}.
 */
updateEvent?: Function;

/**
 * See {@link isc.Calendar.showLabelColumn Calendar.showLabelColumn}.
 */
showLabelColumn?: boolean;

/**
 * See {@link isc.Calendar.showDayView Calendar.showDayView}.
 */
showDayView?: boolean;

/**
 * See {@link isc.Calendar.minRowHeight Calendar.minRowHeight}.
 */
minRowHeight?: number;

/**
 * See {@link isc.Calendar.canDeleteEvents Calendar.canDeleteEvents}.
 */
canDeleteEvents?: boolean;

/**
 * See {@link isc.Calendar.eventRepositionStop() Calendar.eventRepositionStop()}.
 */
eventRepositionStop?: Function;

/**
 * See {@link isc.Calendar.dayHeaderBaseStyle Calendar.dayHeaderBaseStyle}.
 */
dayHeaderBaseStyle?: string;

/**
 * See {@link isc.Calendar.columnLayoutProperties Calendar.columnLayoutProperties}.
 */
columnLayoutProperties?: VLayout;

/**
 * See {@link isc.Calendar.monthButtonIconSrc Calendar.monthButtonIconSrc}.
 */
monthButtonIconSrc?: string;

/**
 * See {@link isc.Calendar.fetchData() Calendar.fetchData()}.
 */
fetchData?: Function;

/**
 * See {@link isc.Calendar.scrollToEvent() Calendar.scrollToEvent()}.
 */
scrollToEvent?: Function;

/**
 * See {@link isc.Calendar.showEventCanvasComponents Calendar.showEventCanvasComponents}.
 */
showEventCanvasComponents?: boolean;

/**
 * See {@link isc.Calendar.zoneStyleName Calendar.zoneStyleName}.
 */
zoneStyleName?: string;

/**
 * See {@link isc.Calendar.invalidDateMessage Calendar.invalidDateMessage}.
 */
invalidDateMessage?: string;

/**
 * See {@link isc.Calendar.nextButtonHoverText Calendar.nextButtonHoverText}.
 */
nextButtonHoverText?: string;

/**
 * See {@link isc.Calendar.eventDurationFieldTitle Calendar.eventDurationFieldTitle}.
 */
eventDurationFieldTitle?: string;

/**
 * See {@link isc.Calendar.eventWindowStyleField Calendar.eventWindowStyleField}.
 */
eventWindowStyleField?: string;

/**
 * See {@link isc.Calendar.moveToEvent() Calendar.moveToEvent()}.
 */
moveToEvent?: Function;

/**
 * See {@link isc.Calendar.showDatePickerButton Calendar.showDatePickerButton}.
 */
showDatePickerButton?: boolean;

/**
 * See {@link isc.Calendar.getEventSublane() Calendar.getEventSublane()}.
 */
getEventSublane?: Function;

/**
 * See {@link isc.Calendar.canEditLaneField Calendar.canEditLaneField}.
 */
canEditLaneField?: string;

/**
 * See {@link isc.Calendar.getDateHTML() Calendar.getDateHTML()}.
 */
getDateHTML?: Function;

/**
 * See {@link isc.Calendar.setChosenDate() Calendar.setChosenDate()}.
 */
setChosenDate?: Function;

/**
 * See {@link isc.Calendar.canReorderLanes Calendar.canReorderLanes}.
 */
canReorderLanes?: boolean;

/**
 * See {@link isc.Calendar.laneNameField Calendar.laneNameField}.
 */
laneNameField?: string;

/**
 * See {@link isc.Calendar.eventResized() Calendar.eventResized()}.
 */
eventResized?: Function;

/**
 * See {@link isc.Calendar.eventResizeStop() Calendar.eventResizeStop()}.
 */
eventResizeStop?: Function;

/**
 * See {@link isc.Calendar.eventCanvasGripperIcon Calendar.eventCanvasGripperIcon}.
 */
eventCanvasGripperIcon?: string;

/**
 * See {@link isc.Calendar.canEditEvents Calendar.canEditEvents}.
 */
canEditEvents?: boolean;

/**
 * See {@link isc.Calendar.trailingDateField Calendar.trailingDateField}.
 */
trailingDateField?: string;

/**
 * See {@link isc.Calendar.showDayLanes Calendar.showDayLanes}.
 */
showDayLanes?: boolean;

/**
 * See {@link isc.Calendar.allowDurationEvents Calendar.allowDurationEvents}.
 */
allowDurationEvents?: boolean;

/**
 * See {@link isc.Calendar.getDateLabelText() Calendar.getDateLabelText()}.
 */
getDateLabelText?: Function;

/**
 * See {@link isc.Calendar.eventCanvasCloseButtonProperties Calendar.eventCanvasCloseButtonProperties}.
 */
eventCanvasCloseButtonProperties?: ImgButton;

/**
 * See {@link isc.Calendar.eventStyleName Calendar.eventStyleName}.
 */
eventStyleName?: string;

/**
 * See {@link isc.Calendar.eventCanvasCloseIconSize Calendar.eventCanvasCloseIconSize}.
 */
eventCanvasCloseIconSize?: number;

/**
 * See {@link isc.Calendar.eventAdded() Calendar.eventAdded()}.
 */
eventAdded?: Function;

/**
 * See {@link isc.Calendar.workdayStart Calendar.workdayStart}.
 */
workdayStart?: Time;

/**
 * See {@link isc.Calendar.getWorkdayStart() Calendar.getWorkdayStart()}.
 */
getWorkdayStart?: Function;

/**
 * See {@link isc.Calendar.canCreateEvents Calendar.canCreateEvents}.
 */
canCreateEvents?: boolean;

/**
 * See {@link isc.Calendar.canDragCreateEvents Calendar.canDragCreateEvents}.
 */
canDragCreateEvents?: boolean;

/**
 * See {@link isc.Calendar.showDragHovers Calendar.showDragHovers}.
 */
showDragHovers?: boolean;

/**
 * See {@link isc.Calendar.getEventHoverHTML() Calendar.getEventHoverHTML()}.
 */
getEventHoverHTML?: Function;

/**
 * See {@link isc.Calendar.zones Calendar.zones}.
 */
zones?: CalendarEvent[];

/**
 * See {@link isc.Calendar.selectEvent() Calendar.selectEvent()}.
 */
selectEvent?: Function;

/**
 * See {@link isc.Calendar.getActiveTime() Calendar.getActiveTime()}.
 */
getActiveTime?: Function;

/**
 * See {@link isc.Calendar.dateFormatter Calendar.dateFormatter}.
 */
dateFormatter?: string;

/**
 * See {@link isc.Calendar.showWeekends Calendar.showWeekends}.
 */
showWeekends?: boolean;

/**
 * See {@link isc.Calendar.timelineUnitsPerColumn Calendar.timelineUnitsPerColumn}.
 */
timelineUnitsPerColumn?: number;

/**
 * See {@link isc.Calendar.getHeaderHoverHTML() Calendar.getHeaderHoverHTML()}.
 */
getHeaderHoverHTML?: Function;

/**
 * See {@link isc.Calendar.otherDayClickNavigation Calendar.otherDayClickNavigation}.
 */
otherDayClickNavigation?: boolean;

/**
 * See {@link isc.Calendar.dateLabelProperties Calendar.dateLabelProperties}.
 */
dateLabelProperties?: Label;

/**
 * See {@link isc.Calendar.getCurrentViewName() Calendar.getCurrentViewName()}.
 */
getCurrentViewName?: Function;

/**
 * See {@link isc.Calendar.eventsRendered() Calendar.eventsRendered()}.
 */
eventsRendered?: Function;

/**
 * See {@link isc.Calendar.dataFetchMode Calendar.dataFetchMode}.
 */
dataFetchMode?: string;

/**
 * See {@link isc.Calendar.showPreviousButton Calendar.showPreviousButton}.
 */
showPreviousButton?: boolean;

/**
 * See {@link isc.Calendar.dayViewTitle Calendar.dayViewTitle}.
 */
dayViewTitle?: string;

/**
 * See {@link isc.Calendar.descriptionField Calendar.descriptionField}.
 */
descriptionField?: string;

/**
 * See {@link isc.Calendar.showMonthView Calendar.showMonthView}.
 */
showMonthView?: boolean;

/**
 * See {@link isc.Calendar.updateCalendarEvent() Calendar.updateCalendarEvent()}.
 */
updateCalendarEvent?: Function;

/**
 * See {@link isc.Calendar.timelineViewTitle Calendar.timelineViewTitle}.
 */
timelineViewTitle?: string;

/**
 * See {@link isc.Calendar.showQuickEventDialog Calendar.showQuickEventDialog}.
 */
showQuickEventDialog?: boolean;

/**
 * See {@link isc.Calendar.eventHeaderWrap Calendar.eventHeaderWrap}.
 */
eventHeaderWrap?: boolean;

/**
 * See {@link isc.Calendar.controlsBarProperties Calendar.controlsBarProperties}.
 */
controlsBarProperties?: HLayout;

/**
 * See {@link isc.Calendar.twentyFourHourTime Calendar.twentyFourHourTime}.
 */
twentyFourHourTime?: boolean;

/**
 * See {@link isc.Calendar.showDetailFields Calendar.showDetailFields}.
 */
showDetailFields?: boolean;

/**
 * See {@link isc.Calendar.autoFetchTextMatchStyle Calendar.autoFetchTextMatchStyle}.
 */
autoFetchTextMatchStyle?: string;

/**
 * See {@link isc.Calendar.removeIndicator() Calendar.removeIndicator()}.
 */
removeIndicator?: Function;

/**
 * See {@link isc.Calendar.addLane() Calendar.addLane()}.
 */
addLane?: Function;

/**
 * See {@link isc.Calendar.datePickerHoverText Calendar.datePickerHoverText}.
 */
datePickerHoverText?: string;

/**
 * See {@link isc.Calendar.scrollToEnd() Calendar.scrollToEnd()}.
 */
scrollToEnd?: Function;

/**
 * See {@link isc.Calendar.eventRemoved() Calendar.eventRemoved()}.
 */
eventRemoved?: Function;

/**
 * See {@link isc.Calendar.shouldShowDate() Calendar.shouldShowDate()}.
 */
shouldShowDate?: Function;

/**
 * See {@link isc.Calendar.filterData() Calendar.filterData()}.
 */
filterData?: Function;

/**
 * See {@link isc.Calendar.getSelectedView() Calendar.getSelectedView()}.
 */
getSelectedView?: Function;

/**
 * See {@link isc.Calendar.initialCriteria Calendar.initialCriteria}.
 */
initialCriteria?: Criteria;

/**
 * See {@link isc.Calendar.addLaneEvent() Calendar.addLaneEvent()}.
 */
addLaneEvent?: Function;

/**
 * See {@link isc.Calendar.showControlsBar Calendar.showControlsBar}.
 */
showControlsBar?: boolean;

/**
 * See {@link isc.Calendar.getEventBodyHTML() Calendar.getEventBodyHTML()}.
 */
getEventBodyHTML?: Function;

/**
 * See {@link isc.Calendar.showTimelineView Calendar.showTimelineView}.
 */
showTimelineView?: boolean;

/**
 * See {@link isc.Calendar.endDate Calendar.endDate}.
 */
endDate?: Date;

/**
 * See {@link isc.Calendar.eventAutoArrange Calendar.eventAutoArrange}.
 */
eventAutoArrange?: boolean;

/**
 * See {@link isc.Calendar.eventCanvasHResizerProperties Calendar.eventCanvasHResizerProperties}.
 */
eventCanvasHResizerProperties?: Img;

/**
 * See {@link isc.Calendar.endDateField Calendar.endDateField}.
 */
endDateField?: string;

/**
 * See {@link isc.Calendar.limitToWorkday Calendar.limitToWorkday}.
 */
limitToWorkday?: boolean;

/**
 * See {@link isc.Calendar.disableWeekends Calendar.disableWeekends}.
 */
disableWeekends?: boolean;

/**
 * See {@link isc.Calendar.getLanePadding() Calendar.getLanePadding()}.
 */
getLanePadding?: Function;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * Calendar wraps the SmartClient widget class
 * {@link isc.Calendar Calendar} for React, allowing you to import
 * Calendar for use in React JS and JSX.
 * @class
 * @extends Canvas
 */
declare class Calendar extends Canvas {
    props: AsComponentXML<CalendarProps>;
}
