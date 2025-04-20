import { ProcessElement } from './ProcessElement';

export class Task extends ProcessElement {
    static ISC_CLASS_NAME = 'Task';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"inputFieldList":{"className":"String","isArray":true},"outputFieldList":{"className":"String","isArray":true}};

}
