import { ResultSet } from './ResultSet';

export class FilteredList extends ResultSet {
    static ISC_CLASS_NAME = 'FilteredList';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"dataSource":{"className":"DataSource"},"allRows":{"className":"Record","isArray":true},"modifiable":"boolean"};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
