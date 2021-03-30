import { MarkSpec } from 'prosemirror-model';

export enum MarkName {
  Strong = 'strong',
  Em = 'em',
  Strikethrough = 'strikethrough',
  Underline = 'underline',
  Link = 'link',
}

export const SCHEMA_MARK: Record<MarkName, MarkSpec> = {
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
