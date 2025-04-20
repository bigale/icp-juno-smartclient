import { VLayout } from './VLayout';

export class EventCanvas extends VLayout {
    static ISC_CLASS_NAME = 'EventCanvas';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"showContextButton":"Boolean","showBody":"Boolean","showLabel":"Boolean","calendar":{"className":"Calendar"},"gripperProperties":{"className":"Img","isProperties":true},"showHeader":"Boolean","calendarView":{"className":"CalendarView"},"verticalResize":"Boolean","escapeHTML":"Boolean","showGripper":"Boolean","labelProperties":{"className":"Label","isProperties":true},"isZoneCanvas":"boolean","headerHeight":"Integer","showRolloverControls":"Boolean","headerWrap":"Boolean","isIndicatorCanvas":"boolean","event":{"className":"CalendarEvent"}};

}
