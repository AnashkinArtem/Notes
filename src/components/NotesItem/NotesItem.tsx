import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { removeNote, updateNote } from '../../store/features/notesSlice';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io'
import { ImCheckmark } from 'react-icons/im'
import { INote } from '../../utils/interface/interface';
import styles from './item.module.scss'
import { addTag } from '../../store/features/tagsSlice';



const NotesItem: React.FC<INote> = ({ id, title }) => {
  
  const dispatch = useAppDispatch()
  const tags = useAppSelector(state => state.tags.list)
  const arrTags = tags.map(({tag}) => tag)

  const [showModal, setShowModal] = useState(false)
  const [edit, setEdit] = useState(false)
  const [updateTitle, setUpdateTitle] = useState('')

  const handleUpdate = () => {
    if(updateTitle){
      dispatch(updateNote({
        id: id,
        title: updateTitle,
      }))
    }
    if(updateTitle.includes('#')){
      updateTitle.split(' ').forEach(item => {
        item[0] === '#' 
        ? dispatch(addTag(item)) 
        : null
      })
    } 
    setEdit(!edit)
  }  

  return (  
    <> 
      <div className={styles.note__item}> 
        <FaEye onClick={() => setShowModal(!showModal)}/>
        <div className={styles.note__title}> 
          {title.split(' ').map(item => arrTags.includes(item) ? <span key={id}> {item} </span> : ` ${item} `)}
        </div>  
        <FaTrash onClick={() => dispatch(removeNote(id))}/>     
      </div> 

      {showModal ?
        <div className={styles.modal}>
          {edit 
            ? 
          <textarea required defaultValue={title} onChange={(e) => setUpdateTitle(e.target.value)}/> 
            : 
          <div>{title.split(' ').map(item => arrTags.includes(item) ? <span key={id}> {item} </span> : ` ${item} `)}</div>
          }

          <div className={styles.close__modal}>
            <IoMdCloseCircle onClick={() => setShowModal(!showModal)}/>
          </div>

          <div className={styles.edit__save}>
            {edit ? <ImCheckmark onClick={handleUpdate}/> : <FaPencilAlt onClick={() => {setEdit(!edit)}}/>}
          </div> 

        </div>
      : null} 
    </>   
  )
}

export default NotesItem


