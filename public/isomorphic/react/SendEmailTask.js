import { ProcessElement } from './ProcessElement';

export class SendEmailTask extends ProcessElement {
    static ISC_CLASS_NAME = 'SendEmailTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"subjectFormula":{"className":"UserSummary"},"requestProperties":{"className":"DSRequest","isProperties":true}};

}
