import { ProcessElement } from './ProcessElement';

export class ShowNotificationTask extends ProcessElement {
    static ISC_CLASS_NAME = 'ShowNotificationTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"textFormula":{"className":"UserSummary"},"autoDismiss":"Boolean"};

}
