import { ILogicalComponent } from './core/ILogicalComponent';

export class AutoTestLocatorConfiguration extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"searchSegmentsIncludeHidden":"boolean","useMinimalFallbackAttributes":"boolean","useIDsAsLocators":"boolean","useSearchSegments":"boolean","useCompactFallbackSyntax":"boolean"};

}
