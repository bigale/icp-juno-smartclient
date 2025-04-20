import { TextItem } from './TextItem';

export class UploadItem extends TextItem {
    static ISC_CLASS_NAME = 'UploadItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"height":"number","width":"number","multiple":"Boolean"};

}
