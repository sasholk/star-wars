import CustomNode from './CustomNode'
import styles from '@/styles/gradient.module.scss'
import { Edge, Node } from '@/types/Flow'
import { Controls, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/base.css'
import React from 'react'

interface Props {
  nodes: Node[]
  edges: Edge[]
}

const nodeTypes = {
  custom: CustomNode
}

/**
 * A component that renders a graph with nodes and edges.
 *
 * The graph is rendered with @xyflow/react, a React library for rendering
 * flow-based graphs. The graph is styled with a gradient background and
 * rounded corners.
 *
 * The component takes two props:
 *
 * - `nodes`: An array of objects, each representing a node in the graph.
 *   Each object should contain at least the following properties:
 *   - `id`: A string or number to uniquely identify the node.
 *   - `type`: A string indicating the type of the node.
 *   - `position`: An object with `x` and `y` properties, indicating the
 *     position of the node in the graph.
 *   - `data`: An optional object containing additional data for the node.
 *
 * - `edges`: An array of objects, each representing an edge in the graph.
 *   Each object should contain at least the following properties:
 *   - `id`: A string or number to uniquely identify the edge.
 *   - `source`: A string or number indicating the ID of the source node.
 *   - `target`: A string or number indicating the ID of the target node.
 *   - `type`: A string indicating the type of the edge.
 *   - `animated`: A boolean indicating whether the edge should be animated
 *     when rendered.
 *
 * The component will automatically position the nodes and edges in the
 * graph based on the `position` property of each node and the `source` and
 * `target` properties of each edge.
 *
 * @param {{ nodes: Node[], edges: Edge[] }} props - The props for the component.
 * @returns {React.ReactElement} The rendered graph component.
 */
export const Flow: React.FC<Props> = ({ nodes, edges }) => {
  return (
    <div className={`${styles.gradient} mb-14`}>
      <ReactFlow
        defaultNodes={nodes}
        defaultEdges={edges}
        nodeTypes={nodeTypes}
        fitView
        className={`!h-[80vh] rounded-lg`}
      >
        <Controls />
      </ReactFlow>
    </div>
  )
}
