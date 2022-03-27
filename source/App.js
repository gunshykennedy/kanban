import React from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1, 
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the book samples",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own Experiments",
        done: false
      }
    ]
  },
];

React.render(<KanbanBoard cards={cardList} />, document.getElementById('root'));