import { CanvasItem } from './CanvasItem';

export class MultiComboBoxItem extends CanvasItem {
    static ISC_CLASS_NAME = 'MultiComboBoxItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"valueMap":[{"className":"String","isArray":true},{"className":"Object"}],"addUnknownValues":"Boolean","optionDataSource":[{"className":"DataSource"},"String"],"buttonProperties":{"className":"IButton","isProperties":true},"shouldSaveValue":"Boolean","autoFitButtons":"boolean","autoFetchData":"Boolean","comboFormProperties":{"className":"DynamicForm","isProperties":true},"rootNodeId":["String","Number"],"comboBoxWidth":"number","alwaysExitOnTab":"Boolean","useInsertionOrder":"Boolean","comboBoxProperties":{"className":"ComboBoxItem","isProperties":true},"valueLayoutProperties":{"className":"Layout","isProperties":true}};

}
