'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: '<p>Hello World! 🌎️</p>',
        onUpdate:(v) =>{
            console.log('x', v)
        }
    })


    return (
        <EditorContent editor={editor} />
    )
}
