import { useState } from 'react';

import { editPlannerNote, deletePlannerNote } from '../../services/dbService';

import EditableText from '../atoms/EditableText';
import IconButton from '../atoms/IconButton';

type NoteProps = {
  dayId: number,
  id: string,
  content: string,
};

const Note = ({ dayId, id, content }: NoteProps) => {
  const [editing, setEditing] = useState(false);
  const [isDeletingNote, setIsDeletingNote] = useState(false);

  const handleStartEditing = () => {
    setEditing(true);
  };

  const handleEditPlannerNote = (noteId: string, editedValue: string, dayOfNote: number) => {
    editPlannerNote(noteId, editedValue, dayOfNote);
    setEditing(false);
  };

  const handleDeletePlannerNote = (dayOfNote: number, noteId: string) => {
    setIsDeletingNote(true);
    setTimeout(() => {
      deletePlannerNote(dayOfNote, noteId);
    }, 250);
  };

  return (
    <div key={id} className={`obj-grid-end-two-buttons ${isDeletingNote && 'fadeout'}`}>
      {!editing && (
        <span>{content}</span>
      )}
      {editing && (
        <EditableText
          text={content}
          textId={id}
          setText={handleEditPlannerNote}
          dayId={dayId}
        />
      )}
      {!editing && (
        <IconButton
          pencil
          onClick={handleStartEditing}
        />
      )}
      <IconButton
        minus
        onClick={() => handleDeletePlannerNote(dayId, id)}
      />
    </div>
  );
};

export default Note;
