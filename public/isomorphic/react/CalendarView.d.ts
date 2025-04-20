import React from 'react';
import { ListGrid, ListGridProps } from './ListGrid';
import { AsComponentXML } from './core/ReactComponent';


declare interface CalendarViewProps extends ListGridProps {

/**
 * See {@link isc.CalendarView.rebuild() CalendarView.rebuild()}.
 */
rebuild?: Function;

/**
 * See {@link isc.CalendarView.refreshEvents() CalendarView.refreshEvents()}.
 */
refreshEvents?: Function;

/**
 * See {@link isc.CalendarView.isWeekView() CalendarView.isWeekView()}.
 */
isWeekView?: Function;

/**
 * See {@link isc.CalendarView.eventDragCanvasStyleName CalendarView.eventDragCanvasStyleName}.
 */
eventDragCanvasStyleName?: string;

/**
 * See {@link isc.CalendarView.viewName CalendarView.viewName}.
 */
viewName?: string;

/**
 * See {@link isc.CalendarView.calendar CalendarView.calendar}.
 */
calendar?: Calendar;

/**
 * See {@link isc.CalendarView.isTimelineView() CalendarView.isTimelineView()}.
 */
isTimelineView?: Function;

/**
 * See {@link isc.CalendarView.isDayView() CalendarView.isDayView()}.
 */
isDayView?: Function;

/**
 * See {@link isc.CalendarView.isMonthView() CalendarView.isMonthView()}.
 */
isMonthView?: Function;

/**
 * See {@link isc.CalendarView.scrollToStart() CalendarView.scrollToStart()}.
 */
scrollToStart?: Function;

/**
 * See {@link isc.CalendarView.useEventCanvasPool CalendarView.useEventCanvasPool}.
 */
useEventCanvasPool?: boolean;

/**
 * See {@link isc.CalendarView.isSelectedView() CalendarView.isSelectedView()}.
 */
isSelectedView?: Function;

/**
 * See {@link isc.CalendarView.scrollToEnd() CalendarView.scrollToEnd()}.
 */
scrollToEnd?: Function;

/**
 * See {@link isc.CalendarView.eventStyleName CalendarView.eventStyleName}.
 */
eventStyleName?: string;

/**
 * See {@link isc.CalendarView.eventDragCanvasProperties CalendarView.eventDragCanvasProperties}.
 */
eventDragCanvasProperties?: Canvas;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CalendarView wraps the SmartClient widget class
 * {@link isc.CalendarView CalendarView} for React, allowing you to import
 * CalendarView for use in React JS and JSX.
 * @class
 * @extends ListGrid
 */
declare class CalendarView extends ListGrid {
    props: AsComponentXML<CalendarViewProps>;
}
