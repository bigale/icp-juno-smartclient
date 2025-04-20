import { FormItem } from './FormItem';

export class RadioGroupItem extends FormItem {
    static ISC_CLASS_NAME = 'RadioGroupItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"wrap":"boolean","fillHorizontalSpace":"boolean","allowEmptyValue":"Boolean","itemProperties":{"className":"RadioItem","isProperties":true},"checkboxItemProperties":{"className":"CheckboxItem","isProperties":true},"disabledValues":{"className":"String","isArray":true},"useNativeRadioItems":"boolean","vertical":"Boolean"};

}
