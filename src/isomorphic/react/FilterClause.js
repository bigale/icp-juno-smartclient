import { Layout } from './Layout';

export class FilterClause extends Layout {
    static ISC_CLASS_NAME = 'FilterClause';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"fieldPickerProperties":{"className":"FormItem","isProperties":true},"operatorPickerProperties":[{"className":"FormItem","isProperties":true},{"className":"SelectItem","isProperties":true}],"validateOnChange":"Boolean","showFieldTitles":"Boolean","removeButtonProperties":{"className":"ImgButton","isProperties":true},"clauseProperties":{"className":"SearchForm","isProperties":true},"showRemoveButton":"Boolean","criterion":{"className":"Criteria"}};

}
