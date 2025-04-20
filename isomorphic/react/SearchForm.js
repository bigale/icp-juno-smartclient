import { DynamicForm } from './DynamicForm';

export class SearchForm extends DynamicForm {
    static ISC_CLASS_NAME = 'SearchForm';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"useMultiSelectForValueMaps":"boolean","showFilterFieldsOnly":"Boolean","searchOnEnter":"Boolean","criteriaChangedDelay":"Integer","storeDisplayValues":"Boolean"};

}
