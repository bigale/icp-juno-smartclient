import { DataSource } from './DataSource';

export class FacadeDataSource extends DataSource {
    static ISC_CLASS_NAME = 'FacadeDataSource';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"queuedRequests":{"className":"DSRequest","isArray":true},"queueRequests":"boolean"};

}
