import { ComponentTask } from './ComponentTask';

export class GetPropertiesTask extends ComponentTask {
    static ISC_CLASS_NAME = 'GetPropertiesTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"properties":{"className":"String","isArray":true}};

}
