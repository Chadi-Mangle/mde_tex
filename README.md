# Collaborative Markdown Text Editor

This project is a web-based collaborative Markdown editor that allows multiple users to write and edit the same document in real time. It combines the power of **Yjs** for conflict-free collaborative editing, **WebRTC** for peer-to-peer communication, and **Firebase** for authentication and persistent storage.

The goal is to provide a smooth and modern writing experience for teams, students, or individuals who want to co-author notes, articles, or any kind of Markdown content without relying on centralized editors like Google Docs or Notion.

## Key Features

- **Live Collaboration**: Users can write together in real time, with changes appearing instantly across all connected clients.
- **Markdown Support**: The editor supports standard Markdown syntax, allowing rich text formatting using a lightweight markup language.
- **Peer-to-Peer Syncing**: Thanks to WebRTC and Yjs, updates are shared directly between clients, reducing latency and server load.
- **Firebase Integration**: Firebase is used for user authentication and storing documents in Firestore when persistence is needed.
- **Presence Awareness**: The app can show who is currently online and collaborating in the same document.
- **Link-Based Sharing**: Each document has a unique URL that can be shared with collaborators for easy access.

## How It Works

The app initializes a Yjs document for each session. Clients connect using WebRTC to exchange updates directly, and optionally sync to Firebase for backup and long-term access. A Markdown parser renders a live preview of the content as it's being written. Firebase Auth secures document access and links sessions to user accounts.

No server-side logic is required beyond Firebase, making deployment and scaling easier. All collaboration happens in the browser.

## Use Cases

- Writing technical documentation as a team
- Taking shared notes during meetings or classes
- Real-time interview or assessment environments
- Lightweight alternative to Google Docs for Markdown content

## Technologies Used

- **Yjs**: For CRDT-based collaborative editing
- **WebRTC**: Enables direct peer-to-peer communication
- **Firebase Auth & Firestore**: For login and persistence
- **JavaScript**: Core application logic
- **Markdown-it** or similar parser: To render live previews

## Getting Started

To use or contribute to the project, clone the repository, install dependencies, and launch the dev server. A Firebase project is required if you want persistence and auth, but the app can also run in a purely peer-to-peer mode.

## License

This project is open-source and available under the MIT license. Feel free to fork, modify, and use it in your own projects.
