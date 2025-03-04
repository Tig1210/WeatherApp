import React, { useCallback, useEffect, useState } from 'react'

import * as styles from './App.module.scss'
import Increase from './components/Increase/Increase'
import { useQuery } from '@tanstack/react-query'

const App = () => {
  const [count, setCount] = useState<number>(0)

  // const getGamesList = async () => {
  //   const res = await fetch(
  //     'https://free-to-play-games-database.p.rapidapi.com/api/games',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key':
  //           'f55c063c32msh976cb9fe35a9e33p1ecebfjsncb5e72197947',
  //         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  //       },
  //     }
  //   )
  //   const result = await res
  //   console.log(result)
  // }

  // useEffect(() => {
  //   getGamesList()
  // }, [])

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'f55c063c32msh976cb9fe35a9e33p1ecebfjsncb5e72197947',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
      }).then((res) => res.json()),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)

  return (
    <>
      <p>{count}</p>
      <h1 className={styles.main}>Hello, TypeScript and Reactfd!</h1>
      <Increase setCount={setCount} />
    </>
  )
}

export default App
