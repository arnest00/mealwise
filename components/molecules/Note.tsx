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

  const handleStartEditing = () => {
    setEditing(true);
  };

  const handleEditPlannerNote = (noteId: string, editedValue: string, dayOfNote: number) => {
    editPlannerNote(noteId, editedValue, dayOfNote);
    setEditing(false);
  };

  const handleDeletePlannerNote = (dayOfNote: number, noteId: string) => {
    deletePlannerNote(dayOfNote, noteId);
  };

  return (
    <div key={id} className="grid-end-two-buttons">
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
      <IconButton
        pencil
        onClick={handleStartEditing}
      />
      <IconButton
        minus
        onClick={() => handleDeletePlannerNote(dayId, id)}
      />
    </div>
  );
};

export default Note;
