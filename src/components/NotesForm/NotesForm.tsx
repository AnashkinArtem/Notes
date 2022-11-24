import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addNote } from '../../store/features/notesSlice';
import { addTag } from '../../store/features/tagsSlice';
import styles from './form.module.scss'


const NotesForm: React.FC = () => {

   const dispatch = useAppDispatch();
   const [title, setTitle] = useState('')   
   
   const handleAddNoteAndTag = () => {
      if (title) {
          dispatch(addNote(title));
          setTitle('')
      }
      if(title.includes('#')){
        title.split(' ').forEach(item => {
          item[0] === '#' ? dispatch(addTag(item)) : null
        })
      }  
    }

   return (
    <>
      <div className={styles.note__form}>
        <input 
          type="text"
          placeholder='ADD A NOTE'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddNoteAndTag}>add</button>       
      </div>
    </>
  )
}

export default NotesForm