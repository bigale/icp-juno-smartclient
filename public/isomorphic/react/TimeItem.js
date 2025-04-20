import { FormItem } from './FormItem';

export class TimeItem extends FormItem {
    static ISC_CLASS_NAME = 'TimeItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"millisecondIncrement":"Number","hourMinValue":"Number","secondIncrement":"Number","ampmItemProperties":{"className":"SelectItem","isProperties":true},"showMillisecondItem":"Boolean","minuteItemProperties":{"className":"SelectItem","isProperties":true},"hourValues":{"className":"Number","isArray":true},"secondMaxValue":"Number","showSecondItem":"Boolean","textFieldProperties":{"className":"TextItem","isProperties":true},"showMinuteItem":"Boolean","secondMinValue":"Number","useTextField":"Boolean","secondItemProperties":{"className":"SelectItem","isProperties":true},"hourItemProperties":{"className":"SelectItem","isProperties":true},"wrapHintText":"Boolean","useMask":"Boolean","use24HourTime":"Boolean","millisecondValues":{"className":"Number","isArray":true},"showHourItem":"Boolean","showHintInField":"Boolean","secondValues":{"className":"Number","isArray":true},"hourIncrement":"Number","millisecondMaxValue":"Number","minuteIncrement":"Number","minuteMinValue":"Number","millisecondMinValue":"Number","millisecondItemProperties":{"className":"SelectItem","isProperties":true},"showItemTitles":"Boolean","hourMaxValue":"Number","usePlaceholderForHint":"boolean","minuteMaxValue":"Number","minuteValues":{"className":"Number","isArray":true}};

}
