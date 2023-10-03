'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import * as Y from 'yjs'
import { HocuspocusProvider } from '@hocuspocus/provider'

const ydoc = new Y.Doc();

const provider = new HocuspocusProvider({
    url: "ws://127.0.0.1:1234",
    name: "example-document",
    document: ydoc,
});

export const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Collaboration.configure({
                document: ydoc,
            }),
            CollaborationCursor.configure({
                provider,
                user: { name: "John Doe", color: "#ffcc00" },
            }),
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
