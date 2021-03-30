import { JSDOM } from 'jsdom';
import { DOMParser, Schema } from 'prosemirror-model';

import { DEFAULT_SCHEMA } from './schema/schemas';

const html = `<p>Test <b>b1</b> abc <i>i1</i> <b><i>bi1</i></b> Tset</p>`;

export const stringToJson = (html: string, schema: Schema) => {
  const dom = JSDOM.fragment(html);
  const pmDoc = DOMParser.fromSchema(schema).parse(dom.firstChild);

  return pmDoc.toJSON();
};

const json = stringToJson(html, DEFAULT_SCHEMA);
console.log(JSON.stringify(json, null, 2));
