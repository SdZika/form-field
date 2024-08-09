import React, { ChangeEvent, FC, useState } from 'react'

interface PropsHobbies {
    id?: number;
    title: string;
    
}

export const Hobbies:FC = () => {

    
    const [hobbies, setHobbies] = useState<PropsHobbies[]>([
        { id: 1, title: 'Reading' },
        { id: 2, title: 'Gaming' },
        { id: 3, title: 'Cooking' }
    ])

    const [title, setTitle] = useState<string>('')

    const addTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }



  const updateHobbies = () => {
    setHobbies(previousHobbies => ([...previousHobbies, {id: previousHobbies.length + 1, title: title}]))}

   

  return (
    <div>
        {
            hobbies.map(hobby=>(
                <p key={hobby.id}>{hobby.title}</p>
            ))
        }

        <input type='text' value={title} placeholder='Add Hobby' onChange={addTitle}></input>
        <button onClick={updateHobbies}>Add Hobby</button>
        
    </div>
  )
}
