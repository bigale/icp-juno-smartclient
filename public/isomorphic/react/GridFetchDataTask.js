import { ComponentTask } from './ComponentTask';

export class GridFetchDataTask extends ComponentTask {
    static ISC_CLASS_NAME = 'GridFetchDataTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"applyToImplicitCriteria":"Boolean","requestProperties":{"className":"DSRequest","isProperties":true},"groupBy":{"className":"String","isArray":true},"criteria":{"className":"Criteria"}};

}
