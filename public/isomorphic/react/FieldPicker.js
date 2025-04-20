import { VLayout } from './VLayout';

export class FieldPicker extends VLayout {
    static ISC_CLASS_NAME = 'FieldPicker';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"instructionLabelProperties":{"className":"Label","isProperties":true},"availableFieldsHeaderControls":{"className":"Canvas","isArray":true},"availableFieldsGridProperties":{"className":"ListGrid","isProperties":true},"showHilitesButton":"boolean","buttonLayoutProperties":{"className":"HLayout","isProperties":true},"dataBoundComponent":{"className":"Canvas"},"cancelChangesButtonProperties":{"className":"IButton","isProperties":true},"showFieldOrderButtons":"boolean","currentFieldsGridProperties":{"className":"ListGrid","isProperties":true},"saveAndExitButtonProperties":{"className":"IButton","isProperties":true},"dataSource":{"className":"DataSource"},"canFilterSampleValue":"Boolean","sampleRecord":[{"className":"Record"},"DefaultSampleRecord"]};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
