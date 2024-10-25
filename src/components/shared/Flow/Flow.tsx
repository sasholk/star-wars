import { Controls, ReactFlow } from '@xyflow/react'
import React from 'react'

import '@xyflow/react/dist/base.css'

import { Edge, Node } from '@/types/Flow'
import CustomNode from './CustomNode'

const nodeTypes = {
	custom: CustomNode
}

interface Props {
	nodes: Node[]
	edges: Edge[]
}

export const Flow: React.FC<Props> = ({ nodes, edges }) => {
	return (
		<div className='mb-14 h-[80vh]'>
			<ReactFlow
				defaultNodes={nodes}
				defaultEdges={edges}
				nodeTypes={nodeTypes}
				fitView
				className='rounded-lg !bg-slate-400/20'
			>
				<Controls />
			</ReactFlow>
		</div>
	)
}
