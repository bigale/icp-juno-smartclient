import { Layout } from './Layout';

export class MultiSortPanel extends Layout {
    static ISC_CLASS_NAME = 'MultiSortPanel';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"iconSize":"Integer","addLevelButtonProperties":{"className":"IButton","isProperties":true},"levelDownButtonProperties":{"className":"ImgButton","isProperties":true},"maxLevels":"number","fields":{"className":"DataSourceField","isArray":true},"deleteLevelButtonProperties":{"className":"IButton","isProperties":true},"optionsGridProperties":{"className":"ListGrid","isProperties":true},"copyLevelButtonProperties":{"className":"IButton","isProperties":true},"levelUpButtonProperties":{"className":"ImgButton","isProperties":true},"initialSort":{"className":"SortSpecifier","isArray":true}};
static CHILD_TYPE_MAPPING = {"DataSourceField":"fields"};

}
