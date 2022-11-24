import NotesForm from './NotesForm/NotesForm'
import NotesList from './NotesList/NotesList'
import TagsList from './TagsList/TagsList'

const Notes: React.FC = () => {
  return (
    <>
      <NotesForm/>
      <TagsList />
      <NotesList/>
    </>
  )
}

export default Notes