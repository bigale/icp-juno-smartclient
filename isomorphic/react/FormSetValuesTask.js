import { ComponentTask } from './ComponentTask';

export class FormSetValuesTask extends ComponentTask {
    static ISC_CLASS_NAME = 'FormSetValuesTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"values":{"className":"Record"},"fixedValues":{"className":"Record"}};

}
