import React from 'react'
import { IoCloseCircle } from 'react-icons/io5';
import { useAppDispatch } from '../../hooks/hooks';
import { filterNote } from '../../store/features/notesSlice';
import { removeTag } from '../../store/features/tagsSlice';
import { ITag } from '../../utils/interface/interface';

import styles from './item.module.scss'

const TagItem: React.FC<ITag> = ({ idTag, tag }) => {

  const dispatch = useAppDispatch() 

  return (
    <>
      <div className={styles.tag} id={idTag}>
        <div className={styles.tag__title} onClick={() => dispatch(filterNote(tag))}>{tag}</div>        
        <IoCloseCircle onClick={() => dispatch(removeTag(idTag))}/>
      </div> 
    </>
  )
}

export default TagItem