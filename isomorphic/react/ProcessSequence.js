import { ProcessElement } from './ProcessElement';

export class ProcessSequence extends ProcessElement {
    static ISC_CLASS_NAME = 'ProcessSequence';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"elements":{"className":"ProcessElement","isArray":true}};

}
