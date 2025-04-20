import { DataSource } from './DataSource';

export class MockDataSource extends DataSource {
    static ISC_CLASS_NAME = 'MockDataSource';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"mockData":["String",{"className":"Record","isArray":true}]};

}
