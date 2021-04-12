"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemasMap = exports.RtSchema = void 0;
const nodes_1 = require("./nodes");
const marks_1 = require("./marks");
const prosemirror_model_1 = require("prosemirror-model");
const buildSchema = (nodes, marks) => {
    const config = {
        nodes: Object.fromEntries(nodes.map(name => [name, nodes_1.SCHEMA_NODE[name]])),
        marks: Object.fromEntries(marks.map(name => [name, marks_1.SCHEMA_MARK[name]])),
    };
    return new prosemirror_model_1.Schema(config);
};
const DEFAULT_SCHEMA = buildSchema([
    nodes_1.NodeName.Doc,
    nodes_1.NodeName.Paragraph,
    nodes_1.NodeName.Text,
    nodes_1.NodeName.HardBreak,
    nodes_1.NodeName.OrderedList,
    nodes_1.NodeName.BulletList,
    nodes_1.NodeName.ListItem,
    nodes_1.NodeName.Mention,
], [marks_1.MarkName.Strong, marks_1.MarkName.Em, marks_1.MarkName.Strikethrough, marks_1.MarkName.Underline, marks_1.MarkName.Link]);
var RtSchema;
(function (RtSchema) {
    RtSchema[RtSchema["Default"] = 0] = "Default";
})(RtSchema = exports.RtSchema || (exports.RtSchema = {}));
exports.SchemasMap = {
    [RtSchema.Default]: DEFAULT_SCHEMA,
};
//# sourceMappingURL=schemas.js.map