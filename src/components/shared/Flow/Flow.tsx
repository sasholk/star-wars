import { Controls, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/base.css'
import React from 'react'

import { Edge, Node } from '@/types/Flow'

import styles from '@/styles/gradient.module.scss'
import CustomNode from './CustomNode'

interface Props {
	nodes: Node[]
	edges: Edge[]
}

const nodeTypes = {
	custom: CustomNode
}

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
