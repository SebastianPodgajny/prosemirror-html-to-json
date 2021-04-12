"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCHEMA_MARK = exports.MarkName = void 0;
var MarkName;
(function (MarkName) {
    MarkName["Strong"] = "strong";
    MarkName["Em"] = "em";
    MarkName["Strikethrough"] = "strikethrough";
    MarkName["Underline"] = "underline";
    MarkName["Link"] = "link";
})(MarkName = exports.MarkName || (exports.MarkName = {}));
exports.SCHEMA_MARK = {
    [MarkName.Strong]: {
        parseDOM: [{ tag: 'strong' }, { tag: 'b' }, { style: 'font-weight' }],
    },
    [MarkName.Em]: {
        parseDOM: [{ tag: 'i' }, { tag: 'em' }, { style: 'font-style=italic' }],
    },
    [MarkName.Strikethrough]: {
        parseDOM: [{ tag: 's' }, { tag: 'strikethrough' }, { style: 'text-decoration=line-through' }],
    },
    [MarkName.Underline]: {
        parseDOM: [{ tag: 'u' }, { tag: 'underline' }, { style: 'text-decoration=underline' }],
    },
    [MarkName.Link]: {
        attrs: {
            href: {},
            title: { default: null },
            target: { default: null },
        },
        inclusive: false,
        parseDOM: [{ tag: 'a[href]' }],
    },
};
//# sourceMappingURL=marks.js.map