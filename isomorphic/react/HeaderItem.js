import { FormItem } from './FormItem';

export class HeaderItem extends FormItem {
    static ISC_CLASS_NAME = 'HeaderItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"endRow":"Boolean","applyAlignToText":"boolean","colSpan":["int","String"],"showTitle":"Boolean","defaultValue":"String","startRow":"Boolean","canSelectText":"boolean"};

}
