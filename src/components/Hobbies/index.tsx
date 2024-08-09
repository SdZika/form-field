import React, { FC, useState } from 'react'

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

  return (
    <div>
        {
            hobbies.map(hobby=>(
                <p key={hobby.id}>{hobby.title}</p>
            ))
        }
        
    </div>
  )
}
