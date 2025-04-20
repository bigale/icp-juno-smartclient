import { ILogicalComponent } from './core/ILogicalComponent';

export class CalendarEvent extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"canEdit":"Boolean","canDrag":"Boolean","canEditSublane":"Boolean","startDate":{"className":"Date"},"canEditLane":"Boolean","duration":"Integer","endDate":{"className":"Date"},"canResize":"Boolean"};

}
