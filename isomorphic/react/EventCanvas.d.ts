import React from 'react';
import { VLayout, VLayoutProps } from './VLayout';
import { AsComponentXML } from './core/ReactComponent';


declare interface EventCanvasProps extends VLayoutProps {

/**
 * See {@link isc.EventCanvas.headerStyle EventCanvas.headerStyle}.
 */
headerStyle?: string;

/**
 * See {@link isc.EventCanvas.showContextButton EventCanvas.showContextButton}.
 */
showContextButton?: boolean;

/**
 * See {@link isc.EventCanvas.showBody EventCanvas.showBody}.
 */
showBody?: boolean;

/**
 * See {@link isc.EventCanvas.bodyStyle EventCanvas.bodyStyle}.
 */
bodyStyle?: string;

/**
 * See {@link isc.EventCanvas.showLabel EventCanvas.showLabel}.
 */
showLabel?: boolean;

/**
 * See {@link isc.EventCanvas.calendar EventCanvas.calendar}.
 */
calendar?: Calendar;

/**
 * See {@link isc.EventCanvas.gripperProperties EventCanvas.gripperProperties}.
 */
gripperProperties?: Img;

/**
 * See {@link isc.EventCanvas.getBodyHTML() EventCanvas.getBodyHTML()}.
 */
getBodyHTML?: Function;

/**
 * See {@link isc.EventCanvas.showHeader EventCanvas.showHeader}.
 */
showHeader?: boolean;

/**
 * See {@link isc.EventCanvas.calendarView EventCanvas.calendarView}.
 */
calendarView?: CalendarView;

/**
 * See {@link isc.EventCanvas.verticalResize EventCanvas.verticalResize}.
 */
verticalResize?: boolean;

/**
 * See {@link isc.EventCanvas.escapeHTML EventCanvas.escapeHTML}.
 */
escapeHTML?: boolean;

/**
 * See {@link isc.EventCanvas.gripperIcon EventCanvas.gripperIcon}.
 */
gripperIcon?: string;

/**
 * See {@link isc.EventCanvas.showGripper EventCanvas.showGripper}.
 */
showGripper?: boolean;

/**
 * See {@link isc.EventCanvas.labelProperties EventCanvas.labelProperties}.
 */
labelProperties?: Label;

/**
 * See {@link isc.EventCanvas.setEvent() EventCanvas.setEvent()}.
 */
setEvent?: Function;

/**
 * See {@link isc.EventCanvas.isZoneCanvas EventCanvas.isZoneCanvas}.
 */
isZoneCanvas?: boolean;

/**
 * See {@link isc.EventCanvas.getHeaderHTML() EventCanvas.getHeaderHTML()}.
 */
getHeaderHTML?: Function;

/**
 * See {@link isc.EventCanvas.headerHeight EventCanvas.headerHeight}.
 */
headerHeight?: number;

/**
 * See {@link isc.EventCanvas.showRolloverControls EventCanvas.showRolloverControls}.
 */
showRolloverControls?: boolean;

/**
 * See {@link isc.EventCanvas.headerWrap EventCanvas.headerWrap}.
 */
headerWrap?: boolean;

/**
 * See {@link isc.EventCanvas.isIndicatorCanvas EventCanvas.isIndicatorCanvas}.
 */
isIndicatorCanvas?: boolean;

/**
 * See {@link isc.EventCanvas.styleName EventCanvas.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.EventCanvas.event EventCanvas.event}.
 */
event?: CalendarEvent;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * EventCanvas wraps the SmartClient widget class
 * {@link isc.EventCanvas EventCanvas} for React, allowing you to import
 * EventCanvas for use in React JS and JSX.
 * @class
 * @extends VLayout
 */
declare class EventCanvas extends VLayout {
    props: AsComponentXML<EventCanvasProps>;
}
