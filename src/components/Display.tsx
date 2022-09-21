import React, {useEffect, useState} from 'react'
import DiaryCard from './DiaryCard'
import {Diary} from '../typing'
import {fetchDiary} from '../util/fetchDiary'

type Props = {}

function Display({}: Props) {
  const [diaries,setDiaries] = useState<Diary[]>();

  const getDiaries = async () => {
    fetchDiary().then(
      response => {
        setDiaries(response)
        console.log(response)
      }
    );
  }

  useEffect(()=>{
    getDiaries();
    console.log(diaries)
  },[])

  return (
    <div className='w-full h-fit min-h-screen flex flex-wrap justify-evenly'>
      {
        diaries? diaries.map((diary) =>(<DiaryCard Diary={diary}/>) ) : false
      }
    </div>
  )
}

export default Display
