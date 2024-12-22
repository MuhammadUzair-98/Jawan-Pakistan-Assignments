import React from 'react'
import styles from './Student.module.css'
import user from '../../assets/user1.jpg'
import PropTypes from 'prop-types'

const Student = ({name="Ahsan", age=55, profession="student", imgSrc=user, id=0}) => {
  // console.log(styles)
  return (
    <div className={styles.card}>
      <img className={styles.img} src={imgSrc} alt="" />
        <h3>{name}</h3>
        <h3>{id}</h3>
        <p>{age}</p>
        <p>{profession}</p>
    </div>  
    
  )                                
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  profession: PropTypes.string,
  imgSrc: PropTypes.string,
  id: PropTypes.number
}

export default Student      