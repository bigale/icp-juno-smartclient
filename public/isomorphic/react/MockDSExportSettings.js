import { ILogicalComponent } from './core/ILogicalComponent';

export class MockDSExportSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"includeCustomSimpleTypes":"boolean","requestProperties":[{"className":"DSRequest","isArray":true},{"className":"DSRequest","isProperties":true}],"numLevels":"int","includeImageFields":"boolean","criteria":{"className":"Criteria"},"rootCriteriaOnly":"boolean","omitRelations":{"className":"String","isArray":true},"numRows":"int","includeFKs":"boolean"};

}
