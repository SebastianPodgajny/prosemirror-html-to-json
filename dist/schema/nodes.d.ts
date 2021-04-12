import { NodeSpec } from 'prosemirror-model';
export declare enum NodeName {
    Doc = "doc",
    Paragraph = "paragraph",
    Text = "text",
    HardBreak = "hard_break",
    OrderedList = "ordered_list",
    BulletList = "bullet_list",
    ListItem = "list_item",
    Mention = "mention"
}
export declare const SCHEMA_NODE: Readonly<Record<NodeName, NodeSpec>>;
