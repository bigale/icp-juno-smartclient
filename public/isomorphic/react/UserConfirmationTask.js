import { ProcessElement } from './ProcessElement';

export class UserConfirmationTask extends ProcessElement {
    static ISC_CLASS_NAME = 'UserConfirmationTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"textFormula":{"className":"UserSummary"}};

}
