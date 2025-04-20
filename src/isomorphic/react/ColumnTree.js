import { Layout } from './Layout';

export class ColumnTree extends Layout {
    static ISC_CLASS_NAME = 'ColumnTree';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"fields":{"className":"ListGridField","isArray":true},"showOpenIcons":"Boolean","showDetailFields":"Boolean","autoFetchData":"boolean","loadDataOnDemand":"boolean","implicitCriteria":{"className":"Criteria"},"columnWidths":{"className":"String","isArray":true},"backButtonProperties":{"className":"IButton","isProperties":true},"showMultipleColumns":"boolean","columnProperties":{"className":"ListGrid","isProperties":true},"columnTitles":{"className":"String","isArray":true},"data":{"className":"Tree"},"dataProperties":{"className":"Tree","isProperties":true},"emptyColumnMessages":{"className":"String","isArray":true},"showHeaders":"Boolean","canDragRecordsOut":"Boolean","showCustomIconOpen":"Boolean","dataSource":{"className":"DataSource"},"initialCriteria":{"className":"Criteria"},"fixedColumns":"int","showNodeCount":"Boolean"};
static CHILD_TYPE_MAPPING = {"ListGridField":"fields","DataSource":"dataSource"};

}
