'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaEdit, FaTrash, FaEllipsisH, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Dummy patient data
const patientsData = [
  {
    id: 1,
    name: 'John ****',
    email: 'j******@gmail.com',
    phone: '+91938****98',
    gender: 'Male',
    avatar: '👨',
    status: 'active',
    age: 35,
    condition: 'Hypertension',
    lastVisit: '2024-01-15',
    address: '123 Main St, City',
    emergencyContact: '+91987654321'
  },
  {
    id: 2,
    name: 'Shelby Goode',
    email: 'shelbygoode481@gmail.com',
    phone: '+33757005467',
    gender: 'Female',
    avatar: '👩',
    status: 'inactive',
    age: 28,
    condition: 'Diabetes',
    lastVisit: '2024-01-10',
    address: '456 Oak Ave, Town',
    emergencyContact: '+33757005468'
  },
  {
    id: 3,
    name: 'Robert Bacins',
    email: 'robertbacins4192@com',
    phone: '+33757005467',
    gender: 'Male',
    avatar: '👨',
    status: 'active',
    age: 42,
    condition: 'Asthma',
    lastVisit: '2024-01-12',
    address: '789 Pine Rd, Village',
    emergencyContact: '+33757005469'
  },
  {
    id: 4,
    name: 'John Carilo',
    email: 'john.carilo182@com',
    phone: '+33757805467',
    gender: 'Male',
    avatar: '👨',
    status: 'active',
    age: 31,
    condition: 'Migraine',
    lastVisit: '2024-01-14',
    address: '321 Elm St, District',
    emergencyContact: '+33757805468'
  },
  {
    id: 5,
    name: 'Adriene Watson',
    email: 'adrienewatson82@com',
    phone: '+83757305467',
    gender: 'Female',
    avatar: '👩',
    status: 'active',
    age: 29,
    condition: 'Anxiety',
    lastVisit: '2024-01-13',
    address: '654 Maple Dr, County',
    emergencyContact: '+83757305468'
  },
  {
    id: 6,
    name: 'Jhon Deo',
    email: 'jhondeo24823@com',
    phone: '+63475700546',
    gender: 'Male',
    avatar: '👨',
    status: 'active',
    age: 38,
    condition: 'Back Pain',
    lastVisit: '2024-01-11',
    address: '987 Cedar Ln, Area',
    emergencyContact: '+63475700547'
  },
  {
    id: 7,
    name: 'Mark Ruffalo',
    email: 'markruffalo3739@com',
    phone: '+33757005467',
    gender: 'Male',
    avatar: '👨',
    status: 'active',
    age: 45,
    condition: 'Arthritis',
    lastVisit: '2024-01-09',
    address: '147 Birch St, Region',
    emergencyContact: '+33757005470'
  },
  {
    id: 8,
    name: 'Bethany Jackson',
    email: 'bethanyjackson5@com',
    phone: '+33757005467',
    gender: 'Female',
    avatar: '👩',
    status: 'inactive',
    age: 33,
    condition: 'Allergies',
    lastVisit: '2024-01-08',
    address: '258 Spruce Ave, Zone',
    emergencyContact: '+33757005471'
  },
  {
    id: 9,
    name: 'Christine Huston',
    email: 'christinehuston4@com',
    phone: '+33757005467',
    gender: 'Male',
    avatar: '👨',
    status: 'active',
    age: 27,
    condition: 'Insomnia',
    lastVisit: '2024-01-16',
    address: '369 Willow Rd, Sector',
    emergencyContact: '+33757005472'
  },
  {
    id: 10,
    name: 'Anne Jacob',
    email: 'annejacob2@ummoh.com',
    phone: '+33757005467',
    gender: 'Male',
    avatar: '👨',
    status: 'active',
    age: 36,
    condition: 'Depression',
    lastVisit: '2024-01-17',
    address: '741 Poplar St, Block',
    emergencyContact: '+33757005473'
  },
  {
    id: 11,
    name: 'James Mullican',
    email: 'jamesmullican3246@com',
    phone: '+33757005467',
    gender: 'Male',
    avatar: '👨',
    status: 'active',
    age: 41,
    condition: 'High Cholesterol',
    lastVisit: '2024-01-18',
    address: '852 Ash Dr, Division',
    emergencyContact: '+33757005474'
  }
];

const Analytics = () => {
  const [selectedPatient, setSelectedPatient] = useState(patientsData[0]);
  const [patients, setPatients] = useState(patientsData);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleEdit = (patientId: number) => {
    console.log('Edit patient:', patientId);
    setOpenDropdown(null);
    // Add edit functionality here
  };

  const handleDelete = (patientId: number) => {
    setPatients(patients.filter(patient => patient.id !== patientId));
    if (selectedPatient.id === patientId) {
      setSelectedPatient(patients[0]);
    }
    setOpenDropdown(null);
  };

  const handlePatientSelect = (patient: any) => {
    setSelectedPatient(patient);
  };

  const toggleDropdown = (patientId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === patientId ? null : patientId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Patients List */}
      <div className="flex-1 bg-white">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Patients List</h1>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Verify New Appointment
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
            <div className="col-span-3">Name ↑</div>
            <div className="col-span-3">Email ↑</div>
            <div className="col-span-2">Phone number ↑</div>
            <div className="col-span-2">Gender ↑</div>
            <div className="col-span-2">Actions</div>
          </div>
        </div>

        {/* Patients List */}
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className={`px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                selectedPatient.id === patient.id ? 'bg-blue-50 border-blue-200' : ''
              }`}
              onClick={() => handlePatientSelect(patient)}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3 flex items-center gap-3">
                  <span className="text-2xl">{patient.avatar}</span>
                  <span className="font-medium text-gray-800">{patient.name}</span>
                </div>
                <div className="col-span-3 text-gray-600">{patient.email}</div>
                <div className="col-span-2 text-gray-600">{patient.phone}</div>
                <div className="col-span-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    patient.gender === 'Male' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-pink-100 text-pink-600'
                  }`}>
                    {patient.gender}
                  </span>
                </div>
                <div className="col-span-2 flex items-center justify-end relative" ref={openDropdown === patient.id ? dropdownRef : null}>
                  <button
                    onClick={(e) => toggleDropdown(patient.id, e)}
                    className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <FaEllipsisH />
                  </button>
                  
                  {openDropdown === patient.id && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(patient.id);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <FaEdit />
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(patient.id);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Details Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200">
        <div className="p-6">
          {/* Patient Profile */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl">{selectedPatient.avatar}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{selectedPatient.name}</h3>
            <p className="text-gray-600">{selectedPatient.age} years • {selectedPatient.condition}</p>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-gray-400" />
                <span className="text-gray-600">{selectedPatient.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="text-gray-600">{selectedPatient.address}</span>
              </div>
            </div>
          </div>

          {/* Health Condition Chart */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Health Condition</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Jan</span>
                <span className="text-sm text-gray-600">Jun</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mb-4">
                <div className="h-2 bg-orange-400 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-yellow-600 font-semibold">70%</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-green-600 font-semibold">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Last Visit:</span>
              <span className="text-gray-800">{selectedPatient.lastVisit}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedPatient.status === 'active' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}>
                {selectedPatient.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Emergency Contact:</span>
              <span className="text-gray-800">{selectedPatient.emergencyContact}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
