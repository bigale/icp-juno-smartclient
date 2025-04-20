import { VLayout } from './VLayout';

export class FormulaBuilder extends VLayout {
    static ISC_CLASS_NAME = 'FormulaBuilder';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"titleFieldProperties":{"className":"TextItem","isProperties":true},"helpIconProperties":{"className":"FormItemIcon","isProperties":true},"fieldKeyProperties":{"className":"ListGrid","isProperties":true},"autoHideCheckBoxProperties":{"className":"TextItem","isProperties":true},"field":{"className":"Field"},"testButtonProperties":{"className":"Button","isProperties":true},"cancelled":"Boolean","instructionsProperties":{"className":"DynamicForm","isProperties":true},"dataSource":[{"className":"DataSource"},"String"],"testRecord":{"className":"Record"},"showHelpIcon":"boolean","fields":{"className":"Field","isArray":true},"cancelButtonProperties":{"className":"Button","isProperties":true},"mathFunctions":{"className":"String","isArray":true},"editMode":"boolean","saveAddAnotherButtonProperties":{"className":"Button","isProperties":true},"autoTestDelay":"Integer","autoTest":"boolean","showAutoHideCheckBox":"boolean","targetRuleScope":["String",{"className":"Canvas"}],"useSingleLetterKey":"boolean","formulaFieldProperties":{"className":"TextItem","isProperties":true},"messageLabelProperties":{"className":"Label","isProperties":true},"saveButtonProperties":{"className":"Button","isProperties":true}};
static CHILD_TYPE_MAPPING = {"Field":"fields","DataSource":"dataSource"};

}
