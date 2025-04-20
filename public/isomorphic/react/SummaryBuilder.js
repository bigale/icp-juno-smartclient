import { FormulaBuilder } from './FormulaBuilder';

export class SummaryBuilder extends FormulaBuilder {
    static ISC_CLASS_NAME = 'SummaryBuilder';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"showHelpIcon":"boolean","fields":{"className":"Field","isArray":true},"formulaFieldProperties":{"className":"TextItem","isProperties":true},"helpIconProperties":{"className":"FormItemIcon","isProperties":true},"editMode":"boolean","dataSource":{"className":"DataSource"},"field":{"className":"Field"},"showAutoHideCheckBox":"boolean","autoHideCheckBoxProperties":{"className":"TextItem","isProperties":true},"titleFieldProperties":{"className":"TextItem","isProperties":true},"testRecord":{"className":"Record"}};
static CHILD_TYPE_MAPPING = {"Field":"fields","DataSource":"dataSource"};

}
