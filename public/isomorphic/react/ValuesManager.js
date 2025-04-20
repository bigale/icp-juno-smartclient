import { ILogicalComponent } from './core/ILogicalComponent';

export class ValuesManager extends ILogicalComponent {
    static ISC_CLASS_NAME = 'ValuesManager';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"deepCloneNonFieldValuesOnEdit":"Boolean","autoSynchronize":"boolean","dataSource":[{"className":"DataSource"},"GlobalId"],"suppressValidationErrorCallback":"Boolean","disableValidation":"boolean","deepCloneOnEdit":"Boolean","members":{"className":"DynamicForm","isArray":true}};
static CHILD_TYPE_MAPPING = {"DynamicForm":"members","DataSource":"dataSource"};

}
