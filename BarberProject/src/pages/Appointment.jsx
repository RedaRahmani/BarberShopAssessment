import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { barbers } from '../assets/assets_frontend/assets'
import { AppContext } from '../context/AppContext';

const Appointment = () => {
    const {BarbId} = useParams()
    console.log(11)
    console.log(BarbId) // Get the barber ID from the URL
    const { barbers } = useContext(AppContext);
    const [BarbInfo, setBarbInfo] = useState(null);

    useEffect(() => {
        if (barbers && BarbId) {
            // Find the barber with the matching _id
            const selectedBarber = barbers.find((Barb) => Barb._id === BarbId);
            setBarbInfo(selectedBarber);
        }
    }, [barbers, BarbId]); 
    if (!BarbInfo) {
        return <p>Loading barber information...</p>; // Show loading message if no data
    }
  return (
    <div>
       <div className="p-6">
            <h1 className="text-2xl font-bold">{BarbInfo.name}</h1>
            <p className="text-gray-600">Speciality: {BarbInfo.speciality}</p>
            <p className="text-gray-600">Degree: {BarbInfo.degree}</p>
            <p className="text-gray-600">Experience: {BarbInfo.experience}</p>
            <p className="text-gray-600">{BarbInfo.about}</p>
            <p className="text-gray-600">Fees: ${BarbInfo.fees}</p>
            <p className="text-gray-600">
                Address: {BarbInfo.address.line1}, {BarbInfo.address.line2}
            </p>
            <img
                src={BarbInfo.image}
                alt={BarbInfo.name}
                className="mt-4 rounded shadow"
            />
        </div>
    </div>
  )
}

export default Appointment
