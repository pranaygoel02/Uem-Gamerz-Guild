import React, { useEffect, useState } from 'react'
import Certificate from '../components/Certificate'
import names from '../assets/data/participation'
import Arrow from '../assets/images/dropdown.svg'
import {useData} from '../context/dataContext'
import { useAuth } from '../context/authContext'
import Button2 from '../components/Button'
import Background from '../assets/images/workshop/bg1.png'
import ureckon from '../assets/images/workshop/ureckon.png'
import Pagination from '../components/Pagination'
import UGG from '../assets/images/logo-white.png'

function Workshop() {
  const [idx, setidx] = useState(0)
  const {list,setList} = useData()
  const [data, setData] = useState(null)
  const [downloadAll,setDownloadAll] = useState(false)

    useEffect(()=>{
        setList(prev=>[])
    },[])

  useEffect(()=>{
    setData(prev=>list[0])
    setidx(prev=>0)
  },[list])

  const handleDownloadAll = () => {
    console.log(idx);
    setDownloadAll(prev=>!prev)
    setidx(prev=>-1)
  }
  
  const {user} = useAuth()

  useEffect(() => {
    console.log('setting idx: ',idx);
    setData(prev=>list[idx])
    setTimeout(() => {
      if(downloadAll) handleNextIdx()
    }, 100);
    
  }, [idx,downloadAll])

  const handleNextIdx = () => {
    if(idx+1 === list.length){
      setidx(prev=>0) 
      setDownloadAll(prev=>false)
    } 
    else setidx(prev=>prev + 1)
  }
  const handlePrevIdx = () => {
    if(idx-1 === -1) setidx(prev=>list.length-1) 
    else setidx(prev=>prev - 1)
  }
  return (
    user && <div className='flex flex-row items-center justify-between w-full bg-black/95 overflow-x-hidden'>
        <div  className='flex items-center justify-center p-5 h-full hover:bg-red-600 w-full' style={{flexBasis:'15%'}}>
        <button  onClick={handlePrevIdx} className='w-full h-1/5 flex items-center justify-center hover:-translate-x-10 transition-transform'>
          <img src={Arrow} className='w-8 rotate-90 '/>
        </button>
        </div>
        <Certificate ugg_variant={UGG} data={data} all={downloadAll} bg2={Background} tournament={'game development workshop in collaboration with ureckon'} date={'7th january, 2023'} icon={ureckon} color='workshop_primary' hex='#e8190f' font='pilot' certificate_size={4} name_size={5}/>
        <div  className='flex items-center justify-center p-5 h-full hover:bg-red-600 w-full' style={{flexBasis:'15%'}}>
        <button  onClick={handleNextIdx} className='w-full h-1/5 flex items-center justify-center hover:translate-x-10 transition-transform'>
          <img src={Arrow} className='w-8 -rotate-90 '/>
        </button>
        </div>
        {list.length>0 && <div className='absolute bottom-24 right-52 z-10 flex flex-col items-center gap-2'>
        <Pagination val={idx+1} max={list.length}/>
        {!downloadAll && <Button2 text={'Download All'} onClick={handleDownloadAll}/>}
        {downloadAll && <Button2 text={'Stop'} onClick={handleDownloadAll}/>}
        </div>}
    </div>
  )
}

export default Workshop