import { ComponentTask } from './ComponentTask';

export class SetPropertiesTask extends ComponentTask {
    static ISC_CLASS_NAME = 'SetPropertiesTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"properties":{"className":"PropertyValue","isArray":true}};

}
