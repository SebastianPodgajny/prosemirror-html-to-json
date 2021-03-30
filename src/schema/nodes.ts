import { NodeSpec } from 'prosemirror-model';

export enum NodeName {
  Doc = 'doc',
  Paragraph = 'paragraph',
  Text = 'text',
  HardBreak = 'hard_break',
  OrderedList = 'ordered_list',
  BulletList = 'bullet_list',
  ListItem = 'list_item',
  Mention = 'mention',
}

export const SCHEMA_NODE: Readonly<Record<NodeName, NodeSpec>> = {
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
