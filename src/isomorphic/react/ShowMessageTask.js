import { ProcessElement } from './ProcessElement';

export class ShowMessageTask extends ProcessElement {
    static ISC_CLASS_NAME = 'ShowMessageTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"textFormula":{"className":"UserSummary"}};

}
