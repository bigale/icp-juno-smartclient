import { Canvas } from './Canvas';

export class DetailViewer extends Canvas {
    static ISC_CLASS_NAME = 'DetailViewer';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"hiliteIconRightPadding":"number","fieldPickerFieldProperties":{"className":"String","isArray":true},"fetchRequestProperties":{"className":"DSRequest","isProperties":true},"showDetailFields":"Boolean","hiliteIconSize":"number","showEmptyField":"Boolean","dataSource":{"className":"DataSource"},"hiliteIcons":{"className":"String","isArray":true},"wrapLabel":"Boolean","recordsPerBlock":"number","hiliteIconLeftPadding":"number","rowHeight":"int","fields":{"className":"DetailViewerField","isArray":true},"hiliteIconHeight":"number","implicitCriteria":{"className":"Criteria"},"fieldPickerWindowProperties":{"className":"FieldPickerWindow","isProperties":true},"showEmptyMessage":"Boolean","wrapValues":"Boolean","canPickFields":"Boolean","data":[{"className":"DetailViewerRecord","isArray":true},{"className":"Record","isArray":true}],"initialCriteria":{"className":"Criteria"},"hiliteIconWidth":"number","autoFetchData":"boolean"};
static CHILD_TYPE_MAPPING = {"DetailViewerField":"fields","DataSource":"dataSource"};

}
