import { NodeName, SCHEMA_NODE } from './nodes';
import { MarkName, SCHEMA_MARK } from './marks';
import { NodeSpec, Schema, SchemaSpec } from 'prosemirror-model';

const buildSchema = <N extends NodeName, M extends MarkName>(
  nodes: NodeName[],
  marks: MarkName[],
) => {
  const config: SchemaSpec<N, M> = {
    nodes: <Record<N, NodeSpec>>Object.fromEntries(nodes.map(name => [name, SCHEMA_NODE[name]])),
    marks: <Record<M, SchemaSpec>>Object.fromEntries(marks.map(name => [name, SCHEMA_MARK[name]])),
  };

  return new Schema(config);
};

const DEFAULT_SCHEMA = buildSchema(
  [
    NodeName.Doc,
    NodeName.Paragraph,
    NodeName.Text,
    NodeName.HardBreak,
    NodeName.OrderedList,
    NodeName.BulletList,
    NodeName.ListItem,
    NodeName.Mention,
  ],
  [MarkName.Strong, MarkName.Em, MarkName.Strikethrough, MarkName.Underline, MarkName.Link],
);

export enum RtSchema {
  Default,
}

export const SchemasMap = {
  [RtSchema.Default]: DEFAULT_SCHEMA,
};
