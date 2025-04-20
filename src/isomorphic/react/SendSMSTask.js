import { ProcessElement } from './ProcessElement';

export class SendSMSTask extends ProcessElement {
    static ISC_CLASS_NAME = 'SendSMSTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"requestProperties":{"className":"DSRequest","isProperties":true}};

}
