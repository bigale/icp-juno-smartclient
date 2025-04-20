import { Window } from './Window';

export class MultiSortDialog extends Window {
    static ISC_CLASS_NAME = 'MultiSortDialog';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"deleteLevelButtonProperties":{"className":"IButton","isProperties":true},"fields":{"className":"DataSourceField","isArray":true},"levelDownButtonProperties":{"className":"ImgButton","isProperties":true},"applyButtonProperties":{"className":"IButton","isProperties":true},"levelUpButtonProperties":{"className":"ImgButton","isProperties":true},"optionsGridProperties":{"className":"ListGrid","isProperties":true},"initialSort":{"className":"SortSpecifier","isArray":true},"maxLevels":"number","copyLevelButtonProperties":{"className":"IButton","isProperties":true},"multiSortPanelProperties":{"className":"MultiSortPanel","isProperties":true},"cancelButtonProperties":{"className":"IButton","isProperties":true},"addLevelButtonProperties":{"className":"IButton","isProperties":true}};
static CHILD_TYPE_MAPPING = {"DataSourceField":"fields"};

}
