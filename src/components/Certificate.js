import React,{useEffect, useRef} from 'react'
import {exportComponentAsPNG } from 'react-component-export-image';
import Button from './Button2';
import UGG from '../assets/images/logo.png'
import Cross from '../assets/images/cross.svg'
import '../index.css'
import Box from './Box';
import Box2 from './Box2';
import Signature from './Signature';
import {useData} from '../context/dataContext'

function Certificate({data,all,bg1,bg2,tournament,date,icon}) {
  // const {downloadAll,setDownloadAll} = useData()

  const certiRef = useRef()
  const Name = data?.Name ? data?.Name.slice(0,data?.Name.indexOf(" ")) : 'Name';
  const Surname = data?.Name ? data?.Name.substr(data?.Name.indexOf(" ")+1) : 'Surname';
  const download = () => {
    console.log('====================================');
    console.log('downloading: ',data?.Name);
    console.log('====================================');
    exportComponentAsPNG(certiRef,{fileName:`${data?.Name}.png`})
  }

  useEffect(() => {
    if(all && data) download()
  }, [data])

  return (
    <div className='relative flex items-center justify-center w-full h-full px-2'>
    <div ref={certiRef} className='flex items-center justify-center relative'>
        <img draggable='false' src={data?.Position ? bg1 : bg2} className='h-screen'></img>
        <div className='flex flex-col items-center justify-evenly h-full w-full absolute'>
        <div className='flex flex-row items-center gap-5'>
          <img className='w-32' src={UGG}/>
          <img className='w-7' src={Cross}/>
          <img className='h-16 ml-3' src={icon}/>
        </div>
        <div className='flex flex-col items-center -mt-6'>
          <h2 className='font-evil400 text-white text-7xl uppercase'>Certificate of</h2>
          <Box text = {data?.Position  ? 'Achievement' : 'Participation'}/>
        </div>
        <div className='uppercase text-white flex font-poppins flex-col items-center max-w-2xl text-lg text-center gap-8' style={{letterSpacing:'auto'}}>
          <p>This certificate has been awarded to</p>
          <h2 className='font-evil400 text-7xl'><span className='text-orange'>{Name}</span> {Surname}</h2>
          <p className='max-w-lg'>for <span>{data?.Position ? 'securing' : 'participating'}</span> {data?.Position && <span className='text-orange font-bold'>{data?.Position} position</span>} in UEM gamerz guild {tournament} on {date}.</p>
        </div>
        <div className='flex w-full items-center justify-between max-w-xl mt-16'>
          <Signature name={'Signatory 1'} designation={'Position 1'}/>
          <Signature name={'Signatory 2'} designation={'Position 2'}/>
        </div>
        </div>
    </div>
    {data && <div className='absolute bottom-10 right-10 text-white'>
      <Button onClick={download} text={'Download PNG'}/>
    </div>}
    </div>
  )
}

export default Certificate