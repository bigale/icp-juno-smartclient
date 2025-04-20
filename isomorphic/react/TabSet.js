import { IBaseComponent } from './core/IBaseComponent';

export class TabSet extends IBaseComponent {
    static ISC_CLASS_NAME = 'TabSet';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"moreTabPaneProperties":[{"className":"VLayout","isProperties":true},{"className":"Canvas","isProperties":true}],"bottomEdgeSizes":{"className":"EdgeSizes"},"symmetricEdges":"Boolean","titleEditorProperties":{"className":"TextItem","isProperties":true},"tabBarProperties":{"className":"TabBar","isProperties":true},"showTabBar":"Boolean","canAddTabs":"Boolean","scrollerButtonSize":"number","showTabScroller":"Boolean","tabBarControlLayoutProperties":{"className":"Layout","isProperties":true},"moreTabPaneNavBarProperties":{"className":"NavigationBar","isProperties":true},"destroyPanes":"boolean","canReorderTabs":"boolean","defaultTabWidth":"number","titleEditorTopOffset":"Integer","selectedTab":[{"className":"Tab"},"int"],"tabProperties":{"className":"Tab","isProperties":true},"tabs":{"className":"Tab","isArray":true,"deepCopy":true},"canEditTabTitles":"Boolean","rightEdgeOffsets":{"className":"EdgeSizes"},"moreTabPaneTableProperties":{"className":"TableView","isProperties":true},"paneMargin":"int","defaultTabHeight":"number","symmetricScroller":"Boolean","tabBarAlign":["Side","Alignment"],"topEdgeOffsets":{"className":"EdgeSizes"},"paneContainerProperties":{"className":"VLayout","isProperties":true},"tabPickerProperties":{"className":"ImgButton","isProperties":true},"titleEditorRightOffset":"Integer","moreTabCount":"number","moreTabProperties":{"className":"Tab","isProperties":true},"touchPickerButtonSize":"int","symmetricPickerButton":"Boolean","topEdgeSizes":{"className":"EdgeSizes"},"showMoreTab":"boolean","useIOSTabs":"Boolean","animateTabScrolling":"Boolean","bottomEdgeOffsets":{"className":"EdgeSizes"},"showTabPicker":"Boolean","leftEdgeSizes":{"className":"EdgeSizes"},"tabBarControls":{"className":"String","isArray":true},"showPartialEdges":"Boolean","scrollerProperties":{"className":"StretchImgButton","isProperties":true},"tabBarThickness":"number","rightEdgeSizes":{"className":"EdgeSizes"},"pickerButtonSize":"int","leftEdgeOffsets":{"className":"EdgeSizes"},"titleEditorLeftOffset":"Integer","addTabButtonProperties":{"className":"ImgButton","isProperties":true},"useSimpleTabs":"Boolean","closeTabIconSize":"int","canCloseTabs":"boolean","moreTabPaneDefaults":{"className":"Canvas","isProperties":true},"showPaneContainerEdges":"boolean"};
static CHILD_TYPE_MAPPING = {"Tab":"tabs"};

    afterCreate(propName, item, childConfig) {
        if (propName != "tabs") return childConfig;
        return {title: item.props.title, pane: childConfig};
    }

    // override default "guessing" to assign canvii to "tabs" property
    _getPropertyNameForContainedClass(className) {
        if (this.isClassASubclassOf(className, "Canvas")) return "tabs";
        return super.__getPropertyNameForContainedClass(className);
    }

}
