import { ComponentTask } from './ComponentTask';

export class FormSaveDataTask extends ComponentTask {
    static ISC_CLASS_NAME = 'FormSaveDataTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"clearAfterSave":"Boolean","passThruOutput":"Boolean","requestProperties":{"className":"DSRequest","isProperties":true},"showNotification":"Boolean"};

}
