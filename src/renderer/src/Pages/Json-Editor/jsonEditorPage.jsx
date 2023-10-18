import React from 'react'
// import Editor from './editor'
import customersData from '../../data/customers'
import Editor from './editor'
import { clr_botticelli } from '../../constants'

export default function JsonEditorPage() {
  return (
    <div className={`border-[${clr_botticelli}] border-r border-t flex flex-col w-full h-full p-4`}>
      <h1 className="mb-6 text-3xl font-bold">Json Editor</h1>
      <div className=" flex-1 ">
        <Editor></Editor>
      </div>
    </div>
  )
}
