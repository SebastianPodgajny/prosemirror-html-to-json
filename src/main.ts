import { JSDOM } from 'jsdom';
import { DOMParser } from 'prosemirror-model';

import { RtSchema, SchemasMap } from './schema/schemas';

const html = `<p>Test <b>b1</b> abc <i>i1</i> <b><i>bi1</i></b> Tset</p>`;

export const stringToJson = (html: string, rtSchema: RtSchema) => {
  const dom = JSDOM.fragment(html);
  const schema = SchemasMap[rtSchema];
  const pmDoc = DOMParser.fromSchema(schema).parse(dom.firstChild);

  return pmDoc.toJSON();
};

const json = stringToJson(html, RtSchema.Default);
console.log(JSON.stringify(json, null, 2));
