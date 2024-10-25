import { Position } from '@xyflow/react'

export interface Node {
	id: string
	position: { x: number; y: number }
	data: { category: string; name: string }
	type: string
	targetPosition: Position
	sourcePosition: Position
}

export interface Edge {
	id: string
	source: string
	target: string
	type: string
	animated?: boolean
	style: object
}
