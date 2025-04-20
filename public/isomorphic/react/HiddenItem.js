import { FormItem } from './FormItem';

export class HiddenItem extends FormItem {
    static ISC_CLASS_NAME = 'HiddenItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"colSpan":["int","String"],"showTitle":"Boolean","alwaysFetchMissingValues":"Boolean","rowSpan":"number","fetchMissingValues":"Boolean"};

}
