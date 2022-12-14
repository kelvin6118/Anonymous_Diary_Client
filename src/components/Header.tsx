import React, { useState } from 'react'
import {PlusIcon} from '@heroicons/react/24/solid';
import CreateForm from './CreateForm';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from '../redux/store';
import { switchForm } from '../redux/createFormSlice';

type Props = {}

export default function Header({}: Props) {
  const open:boolean = useSelector((state: RootState)=>state.form.FormSwitch);
  const dispatch = useDispatch();

  return (
    <header className='bg-zinc-900 flex flex-row justify-between sticky top-0'>
        <div className='align-center p-5'>
          <p className='text-slate-400 text-2xl'>
             Anonymous Diary
          </p>
        </div>
        <div className='align-center p-5 relative'>
          <div
          className='h-10 w-10 cursor-pointer hover:scale-125 transition duration-200'
          onClick={() => dispatch(switchForm(true))}
          >
          <PlusIcon 
            className='h-10 w-10 text-slate-400 '
            pointerEvents="none"/>
          </div>
           
          <CreateForm visible={open}/>
        </div>
        
    </header>
  )
}

