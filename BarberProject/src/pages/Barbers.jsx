import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Barbers = () => {
    const {speciality} = useParams([])
    const[filterBarb, setFilterBarb] = useState([])
    const navigate = useNavigate()
    const {barbers } = useContext(AppContext)
    const applyFilter = () => {
        if(speciality){
            setFilterBarb(barbers.filter(Barb => Barb.speciality === speciality))
        } else {
            setFilterBarb(barbers)
        }
    }
    useEffect(() =>{
        applyFilter()
    },[barbers, speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse through our best barbers</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> speciality === 'Men' ? navigate('/barbers') : navigate('/barbers/men')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Men</p>
            <p onClick={()=> speciality === 'Women' ? navigate('/barbers') : navigate('/barbers/women')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Women</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
                filterBarb.map((item,index) => (
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50 ' src={item.image} alt=''/>
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Barbers
