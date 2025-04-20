import { ILogicalComponent } from './core/ILogicalComponent';

export class DateRange extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"end":[{"className":"RelativeDate"},{"className":"Date"}],"start":[{"className":"RelativeDate"},{"className":"Date"}]};

}
