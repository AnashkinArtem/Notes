import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import NotesItem from '../NotesItem/NotesItem';
import styles from './list.module.scss';

const NotesList: React.FC = () => {

  const notes = useAppSelector(state => state.notes.list)

  return (    
    <div className={styles.notes__list}>
      {notes.length ? notes.map((note) => (
        <NotesItem key={new Date().toISOString() + `${Math.random()}`} id={note.id} title={note.title}/>
      )) : null}
    </div>    
  )
}

export default NotesList