import { ComponentTask } from './ComponentTask';

export class GridRemoveSelectedDataTask extends ComponentTask {
    static ISC_CLASS_NAME = 'GridRemoveSelectedDataTask';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"showConfirmation":"Boolean","allowMultiRecordRemove":"Boolean","requestProperties":{"className":"DSRequest","isProperties":true}};

}
