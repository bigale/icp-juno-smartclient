import { ComponentTask } from './ComponentTask';

export class GridSelectRecordsTask extends ComponentTask {
    static ISC_CLASS_NAME = 'GridSelectRecordsTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"criteria":{"className":"Criteria"},"scrollIntoView":"Boolean","select":"Boolean","selectMultiple":"Boolean","keepExistingSelection":"Boolean"};

}
