import { MarkSpec } from 'prosemirror-model';
export declare enum MarkName {
    Strong = "strong",
    Em = "em",
    Strikethrough = "strikethrough",
    Underline = "underline",
    Link = "link"
}
export declare const SCHEMA_MARK: Record<MarkName, MarkSpec>;
