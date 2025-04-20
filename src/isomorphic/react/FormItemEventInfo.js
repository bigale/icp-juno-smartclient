import { ILogicalComponent } from './core/ILogicalComponent';

export class FormItemEventInfo extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"overInlineError":"Boolean","item":{"className":"FormItem"},"overTitle":"Boolean","overTextBox":"Boolean","overElement":"Boolean","overItem":"Boolean"};

}
