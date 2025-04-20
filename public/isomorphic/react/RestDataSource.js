import { DataSource } from './DataSource';

export class RestDataSource extends DataSource {
    static ISC_CLASS_NAME = 'RestDataSource';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"sendMetaData":"Boolean","operationBindings":{"className":"OperationBinding","isArray":true},"prettyPrintJSON":"Boolean","disableQueuing":"Boolean","xmlNamespaces":{"className":"Object"}};

}
