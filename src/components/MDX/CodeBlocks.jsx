import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'

const CodeBlock = ({ children, className }) => {
	const language = className.replace(/language-/, '')

	return (
		<Highlight
			{...defaultProps}
			theme={vsDark}
			code={children.trim()}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{ ...style, padding: '20px', overflowX: 'scroll' }}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default CodeBlock
