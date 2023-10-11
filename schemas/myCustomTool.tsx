// myCustomTool.tsx
import type {ComponentType} from 'react'
import {type Tool} from 'sanity'
import {Card, Text, Stack} from '@sanity/ui'

export interface myCustomToolOptions {
   customString?: string
}

export interface myCustomToolProps<Options = any> {
		component: ComponentType<{
      tool: Tool<myCustomToolOptions>
	  }>
}

export const myCustomTool<myCustomToolConfig | void>(options) => {
  return {
    title: 'My Custom Tool',
    name: 'my-custom-tool', // localhost:3333/my-custom-tool
    icon: DashboardIcon,
    component: () => (
      <Card padding={4}>
				<Stack>
	        <Text>My custom tool!</Text>
					<Text>{options.customString}</Text>
				</Stack>
      </Card>
    ),
  }
}