import { ComponentTask } from './ComponentTask';

export class FetchRelatedDataTask extends ComponentTask {
    static ISC_CLASS_NAME = 'FetchRelatedDataTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"dataSource":{"className":"DataSource"}};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
