import React from 'react';
import { ILogicalComponent } from './core/ILogicalComponent';
import { AsComponentXML } from './core/ReactComponent';


declare interface CalendarEventProps {

/**
 * See {@link isc.CalendarEvent.styleName CalendarEvent.styleName}.
 */
styleName?: string;

/**
 * See {@link isc.CalendarEvent.headerBackgroundColor CalendarEvent.headerBackgroundColor}.
 */
headerBackgroundColor?: string;

/**
 * See {@link isc.CalendarEvent.headerBorderColor CalendarEvent.headerBorderColor}.
 */
headerBorderColor?: string;

/**
 * See {@link isc.CalendarEvent.canEdit CalendarEvent.canEdit}.
 */
canEdit?: boolean;

/**
 * See {@link isc.CalendarEvent.canDrag CalendarEvent.canDrag}.
 */
canDrag?: boolean;

/**
 * See {@link isc.CalendarEvent.canEditSublane CalendarEvent.canEditSublane}.
 */
canEditSublane?: boolean;

/**
 * See {@link isc.CalendarEvent.backgroundColor CalendarEvent.backgroundColor}.
 */
backgroundColor?: string;

/**
 * See {@link isc.CalendarEvent.lane CalendarEvent.lane}.
 */
lane?: string;

/**
 * See {@link isc.CalendarEvent.startDate CalendarEvent.startDate}.
 */
startDate?: Date;

/**
 * See {@link isc.CalendarEvent.canEditLane CalendarEvent.canEditLane}.
 */
canEditLane?: boolean;

/**
 * See {@link isc.CalendarEvent.textColor CalendarEvent.textColor}.
 */
textColor?: string;

/**
 * See {@link isc.CalendarEvent.borderColor CalendarEvent.borderColor}.
 */
borderColor?: string;

/**
 * See {@link isc.CalendarEvent.name CalendarEvent.name}.
 */
name?: string;

/**
 * See {@link isc.CalendarEvent.durationUnit CalendarEvent.durationUnit}.
 */
durationUnit?: string;

/**
 * See {@link isc.CalendarEvent.description CalendarEvent.description}.
 */
description?: string;

/**
 * See {@link isc.CalendarEvent.sublane CalendarEvent.sublane}.
 */
sublane?: string;

/**
 * See {@link isc.CalendarEvent.headerTextColor CalendarEvent.headerTextColor}.
 */
headerTextColor?: string;

/**
 * See {@link isc.CalendarEvent.eventWindowStyle CalendarEvent.eventWindowStyle}.
 */
eventWindowStyle?: string;

/**
 * See {@link isc.CalendarEvent.duration CalendarEvent.duration}.
 */
duration?: number;

/**
 * See {@link isc.CalendarEvent.endDate CalendarEvent.endDate}.
 */
endDate?: Date;

/**
 * See {@link isc.CalendarEvent.canResize CalendarEvent.canResize}.
 */
canResize?: boolean;


children?: React.ReactElement<JSX.IntrinsicElements> |
           React.ReactElement<JSX.IntrinsicElements>[];

}


/**
 * CalendarEvent wraps the SmartClient object
 * {@link isc.CalendarEvent CalendarEvent} for React, allowing you to import
 * CalendarEvent for use in React JS and JSX.
 * @class
 */
declare class CalendarEvent extends ILogicalComponent {
    props: AsComponentXML<CalendarEventProps>;
}
