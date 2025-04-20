import { ILogicalComponent } from './core/ILogicalComponent';

export class FiscalCalendar extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"defaultMonth":"Integer","fiscalYears":{"className":"FiscalYear","isArray":true},"defaultDate":"Integer"};

}
