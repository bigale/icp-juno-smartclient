import { Layout } from './Layout';

export class MultiGroupPanel extends Layout {
    static ISC_CLASS_NAME = 'MultiGroupPanel';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"deleteLevelButtonProperties":{"className":"IButton","isProperties":true},"initialGrouping":{"className":"String","isArray":true},"iconSize":"Integer","fields":{"className":"DataSourceField","isArray":true},"copyLevelButtonProperties":{"className":"IButton","isProperties":true},"levelDownButtonProperties":{"className":"ImgButton","isProperties":true},"maxLevels":"number","addLevelButtonProperties":{"className":"IButton","isProperties":true},"optionsGridProperties":{"className":"ListGrid","isProperties":true},"levelUpButtonProperties":{"className":"ImgButton","isProperties":true}};
static CHILD_TYPE_MAPPING = {"DataSourceField":"fields"};

}
