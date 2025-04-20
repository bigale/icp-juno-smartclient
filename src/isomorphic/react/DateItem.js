import { FormItem } from './FormItem';

export class DateItem extends FormItem {
    static ISC_CLASS_NAME = 'DateItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"monthSelectorProperties":{"className":"SelectItem","isProperties":true},"autoUseTextField":"Boolean","useTextField":"Boolean","wrapHintText":"Boolean","showHintInField":"Boolean","pickerTimeItemProperties":{"className":"TimeItem","isProperties":true},"textFieldProperties":{"className":"TextItem","isProperties":true},"daySelectorProperties":{"className":"SelectItem","isProperties":true},"startDate":{"className":"Date"},"defaultChooserDate":{"className":"Date"},"use24HourTime":"Boolean","usePlaceholderForHint":"boolean","generateValidator":"Boolean","showChooserFiscalYearPicker":"Boolean","endDate":{"className":"Date"},"yearSelectorProperties":{"className":"SelectItem","isProperties":true},"enforceValueRange":"Boolean","pickerDefaults":{"className":"DateChooser","isProperties":true},"showPickerTimeItem":"Boolean","showChooserWeekPicker":"Boolean","useMask":"boolean","defaultValue":{"className":"Date"},"enforceDate":"Boolean","showItemTitles":"Boolean","centuryThreshold":"number","pickerProperties":{"className":"DateChooser","isProperties":true},"useSharedPicker":"Boolean"};

}
