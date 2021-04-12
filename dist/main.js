"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToJson = void 0;
const jsdom_1 = require("jsdom");
const prosemirror_model_1 = require("prosemirror-model");
const schemas_1 = require("./schema/schemas");
const stringToJson = (html, rtSchema) => {
    const dom = jsdom_1.JSDOM.fragment(html);
    const schema = schemas_1.SchemasMap[rtSchema];
    const pmDoc = prosemirror_model_1.DOMParser.fromSchema(schema).parse(dom.firstChild);
    return pmDoc.toJSON();
};
exports.stringToJson = stringToJson;
module.exports = {
    stringToJson: exports.stringToJson,
};
//# sourceMappingURL=main.js.map