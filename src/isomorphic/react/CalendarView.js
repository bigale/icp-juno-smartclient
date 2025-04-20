import { ListGrid } from './ListGrid';

export class CalendarView extends ListGrid {
    static ISC_CLASS_NAME = 'CalendarView';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"calendar":{"className":"Calendar"},"useEventCanvasPool":"Boolean","eventDragCanvasProperties":{"className":"Canvas","isProperties":true}};

}
