import { JSDOM } from 'jsdom';
import { DOMParser } from 'prosemirror-model';

import { RtSchema, SchemasMap } from './schema/schemas';

export const stringToJson = (html: string, rtSchema: RtSchema) => {
  const dom = JSDOM.fragment(html);
  const schema = SchemasMap[rtSchema];
  const pmDoc = DOMParser.fromSchema(schema).parse(dom.firstChild);

  return pmDoc.toJSON();
};

module.exports = {
  stringToJson,
};
