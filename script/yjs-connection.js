import * as Y from 'yjs'
import { FireProvider } from "y-fire";
import { CodemirrorBinding } from 'y-codemirror'
import { firebaseApp } from './firebase';
import { simplemde } from './mde'

const ydoc = new Y.Doc()
const text = ydoc.getText('codemirror') // doc.getText()
const path = '/docs/test' // room 

const provider = new FireProvider({ firebaseApp, ydoc, path });

const cm = simplemde.codemirror
const binding = new CodemirrorBinding(text, cm, provider.awareness)
binding.awareness.setLocalStateField('user', { color: '#008833', name: 'Autre utilisateur' })
