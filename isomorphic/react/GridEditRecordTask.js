import { ComponentTask } from './ComponentTask';

export class GridEditRecordTask extends ComponentTask {
    static ISC_CLASS_NAME = 'GridEditRecordTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"initialValues":{"className":"Record"},"editFirstRecord":"Boolean","criteria":{"className":"Criteria"}};

}
