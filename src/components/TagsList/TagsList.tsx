import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import TagItem from '../TagItem/TagItem'

import styles from './list.module.scss'

const TagsList: React.FC = () => {

  const tags = useAppSelector(state => state.tags.list) 

  return (
    <div className={styles.tags}>
        {tags.length ? 
            tags.map((item) => (
                <TagItem idTag={item.idTag} tag={item.tag} key={item.idTag}/>
            ))
        : null}
    </div>
  )
}

export default TagsList