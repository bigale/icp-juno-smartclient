import { FormItem } from './FormItem';

export class StaticTextItem extends FormItem {
    static ISC_CLASS_NAME = 'StaticTextItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"applyAlignToText":"boolean","canSelectText":"boolean","wrap":"Boolean","applyHeightToTextBox":"Boolean","defaultValue":"String","clipValue":"Boolean","escapeHTML":"Boolean","outputAsHTML":"boolean"};

}
