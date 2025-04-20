import { ProcessElement } from './ProcessElement';

export class DecisionTask extends ProcessElement {
    static ISC_CLASS_NAME = 'DecisionTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"criteria":{"className":"Criteria"}};

}
