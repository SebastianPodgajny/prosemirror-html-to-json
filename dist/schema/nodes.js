"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCHEMA_NODE = exports.NodeName = void 0;
var NodeName;
(function (NodeName) {
    NodeName["Doc"] = "doc";
    NodeName["Paragraph"] = "paragraph";
    NodeName["Text"] = "text";
    NodeName["HardBreak"] = "hard_break";
    NodeName["OrderedList"] = "ordered_list";
    NodeName["BulletList"] = "bullet_list";
    NodeName["ListItem"] = "list_item";
    NodeName["Mention"] = "mention";
})(NodeName = exports.NodeName || (exports.NodeName = {}));
exports.SCHEMA_NODE = {
    [NodeName.Doc]: { content: 'block+' },
    [NodeName.Text]: { group: 'inline' },
    [NodeName.Paragraph]: { content: 'inline*', group: 'block', parseDOM: [{ tag: 'p' }] },
    [NodeName.HardBreak]: {
        inline: true,
        group: 'inline',
        selectable: false,
        parseDOM: [{ tag: 'br' }],
    },
    [NodeName.OrderedList]: {
        content: 'list_item+',
        group: 'block',
        attrs: { order: { default: 1 } },
        parseDOM: [{ tag: 'ol' }],
    },
    [NodeName.BulletList]: {
        content: 'list_item+',
        group: 'block',
        parseDOM: [{ tag: 'ul' }],
    },
    [NodeName.ListItem]: {
        defining: true,
        content: 'paragraph block*',
        parseDOM: [{ tag: 'li' }],
    },
    [NodeName.Mention]: {
        attrs: { 'data-id': {}, 'data-type': {} },
        inline: true,
        atom: true,
        content: 'inline+',
        group: 'inline',
        selectable: false,
        parseDOM: [{ tag: 'pm-mention' }],
    },
};
//# sourceMappingURL=nodes.js.map