import { Task } from './Task';

export class ServiceTask extends Task {
    static ISC_CLASS_NAME = 'ServiceTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"outputFieldList":{"className":"String","isArray":true},"values":{"className":"Record"},"criteria":{"className":"Criteria"},"fixedValues":{"className":"Record"},"sort":{"className":"SortSpecifier","isArray":true},"passThruOutput":"Boolean","groupBy":{"className":"String","isArray":true},"fixedCriteria":{"className":"Criteria"},"dataSource":[{"className":"DataSource"},"GlobalId"]};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
