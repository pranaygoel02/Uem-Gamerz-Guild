import React,{useEffect,useRef,useState} from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import links from '../assets/data/Links'
import * as XLSX from 'xlsx'
import {useData} from '../context/dataContext'
import Button from './Button'
import Button2 from './Button2'
import {useLocation} from 'react-router-dom'
import '../index.css'

function Sidebar() {
  const [excelFile,setExcelFile] = useState(null)
  const [excelData,setExcelData] = useState([])
  const {list,setList} = useData()
  const [uploaded, setUploaded] = useState(false)
  const [newFile, setNewFile] = useState(false)

  const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.ms-excel']
  const fileRef = useRef()
  
  const handleFile = (e) => {
    let file = e.target.files[0]
    if(file && fileType.includes(file.type)){
      console.log(file.type);
      let reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload=(e)=>{
        setExcelFile(prev=>e.target.result)
      }
    }
    else{
      alert('please select excel file only')
      setExcelFile(prev=>null)
    }
}

const location = useLocation()

const handleSubmit = (e) => {
  e.preventDefault();
  if(excelFile!== null){
      const workbook = XLSX.read(excelFile,{type:'buffer'})
      const worksheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[worksheetName]
      const worksheetData = XLSX.utils.sheet_to_json(worksheet)
      setExcelData(prev=>worksheetData)
  }else{
    setExcelData(prev=>null)
  }
  setNewFile(prev=>false)
}

useEffect(()=>{
  if(excelFile !== null) setNewFile(prev=>true)
},[excelFile])

useEffect(()=>{
  if(excelData!==null) {
    console.log('excelData: ',excelData);
    if(excelData.length > 0) setList(prev=>excelData)
    setUploaded(prev=>true)
  }
},[excelData])

  return (
    <div className='py-2 px-4 sticky top-0 bg-black w-max h-screen flex flex-col justify-between'>
        <Navbar/>
        <div>
        <div className=' flex flex-col items-center gap-2'>
        <div className=' relative overflow-hidden flex items-center justify-center'>
        {location.pathname !== '/' && <Button text={'Choose File'}/>}
        <input className='absolute opacity-0 cursor-pointer p-10' ref={fileRef} type={'file'} onChange={handleFile}></input>
        </div>
        {((excelFile!==null && list.length===0) || newFile) && <Button text={'Upload'} onClick={handleSubmit}/>}
        </div>
        </div>
    </div>
  )
}

export default Sidebar