import { ILogicalComponent } from './core/ILogicalComponent';

export class Validator extends ILogicalComponent {
    static ISC_CLASS_NAME = 'Validator';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"caseSensitive":"boolean","validateOnChange":"boolean","stopOnError":"boolean","applyWhen":{"className":"AdvancedCriteria"},"stopIfFalse":"Boolean","exclusive":"Boolean","type":["ValidatorType","String"],"serverOnly":"boolean","clientOnly":"Boolean","min":"Any","serverObject":{"className":"ServerObject"},"max":"Any","resultingValue":{"className":"Object"},"precision":"Number"};

}
