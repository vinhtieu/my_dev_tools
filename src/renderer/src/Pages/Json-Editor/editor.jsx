import React, { useEffect, useRef } from 'react'

import { JSONEditor } from 'vanilla-jsoneditor'

export default function Editor(props) {
  const container = useRef(null)
  const theme = {
    '--jse-theme-color': '#eff1f2',
    '--jse-theme-color-highlight': '#e2e2e2',
    '--jse-menu-color': 'black',
    '--jse-panel-background': '#eff1f2'
    // '--jse-background-color': '#e2e2e2'
  }
  useEffect(() => {
    let content = {
      text: undefined, // can be used to pass a stringified JSON document instead
      json: {
        greeting: 'Hello World'
      }
    }

    const jsonEditor = new JSONEditor({
      target: container.current,
      props: {
        content,
        onChange: (updatedContent, previousContent, { contentErrors, patchResult }) => {
          // content is an object { json: JSONValue } | { text: string }
          console.log('onChange', { updatedContent, previousContent, contentErrors, patchResult })
          content = updatedContent
        },
        mode: 'text'
      }
    })
    return () => {
      jsonEditor.destroy()
    }
  }, [props.json])

  //
  return <div className="h-full w-full overflow-auto" ref={container} style={theme}></div>
}
