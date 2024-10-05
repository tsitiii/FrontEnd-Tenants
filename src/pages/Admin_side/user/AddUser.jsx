'use client'

import { useState } from 'react'
import { Button } from "@/components/UI/button"
import { Input } from "@/components/UI/input"
import { Label } from "@/components/UI/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UI/select"
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

// import { Textarea } from "@/components/ui/textarea"

export default function AddUser() {
  const [formData, setFormData] = useState({
    profile: '',
    firstName: '',
    fatherName: '',
    lastName: '',
    region: '',
    city: '',
    subCity: '',
    kebele: '',
    uniquePlace: '',
    houseNumber: '',
    phoneNumber: '',
    kebeleId:  null,
    role: '',
    status: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      kebeleId: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the formData to your backend
    console.log(formData)
    // Reset form after submission
    setFormData({
      profile: '',
      firstName: '',
      fatherName: '',
      lastName: '',
      region: '',
      city: '',
      subCity: '',
      kebele: '',
      uniquePlace: '',
      houseNumber: '',
      phoneNumber: '',
      kebeleId: null,
      role: '',

    })
  }
//navigate to the previous page
  const navigate = useNavigate()

  return (
    
    <form onSubmit={handleSubmit} className="space-y-6 max-w-[90%] mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Add New User</h2>
        <Button className='text-right mb-2 hover:scale-105 transition motion-safe:animate-bell' onClick={()=>navigate(-1)}><FaArrowCircleLeft size={24}/></Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
      <div className="space-y-1 md:w-full -mt-6">
          <Label htmlFor="profile">Proile picture</Label>
          <Input id="proile" name="profile" type="file" onChange={handleFileChange} required />
        </div>

        {/* <Label htmlFor="Profile">Profile picture</Label>
          <Input id="Profile" name="profile" type="file"   onChange={handleFileChange} required /> */}

        {/* </div> */}

        {/* <div className="space-y-2 md:w-72 -mb-10 relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleFileChange}
              className="md:w-72 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="firstName"
              className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1">

            </label>
            </div> */}
        <div className="relative">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="firstName"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            First Name
          </label>
        </div>


        <div className="relative">
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="fatherName"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Father Name
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="lastName"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Last Name
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="region"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Region
          </label>
        </div>


        <div className="relative">
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="city"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            City
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="subCity"
            name="subCity"
            value={formData.subCity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="subCity"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Sub city
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="kebele"
            name="kebele"
            value={formData.kebele}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="kebele"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Kebele
          </label>
        </div>
        {/* <div className="space-y-2 md:w-72">
          <Label htmlFor="region">Region</Label>
          <Input id="region" name="region" value={formData.region} onChange={handleInputChange} required />
        </div> */}

        {/* <div className="space-y-2 md:w-72">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
        </div> */}
        {/* 
        <div className="space-y-2 md:w-72">
          <Label htmlFor="subCity">Sub City</Label>
          <Input id="subCity" name="subCity" value={formData.subCity} onChange={handleInputChange} required />
        </div> */}
        <div className="relative">
          <input
            type="text"
            id="uniquePlace"
            name="uniquePlace"
            value={formData.uniquePlace}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="uniquePlace"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Unique place
          </label>
        </div>

        {/* <div className="space-y-2 md:w-72">
          <Label htmlFor="uniquePlace">Unique Place</Label>
          <Input id="uniquePlace" name="uniquePlace" value={formData.uniquePlace} onChange={handleInputChange} required />
        </div> */}

        <div className="relative">
          <input
            type="text"
            id="houseNumber"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="houseNumber"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            House Number
          </label>
        </div>
        {/* <div className="space-y-2 md:w-72">
          <Label htmlFor="houseNumber">House Number</Label>
          <Input id="houseNumber" name="houseNumber" value={formData.houseNumber} onChange={handleInputChange} required />
        </div> */}
  <div className="relative">
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="phoneNumber"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Phone Number
          </label>
        </div>
        {/* <div className="space-y-2 md:w-72">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
        </div> */}

        <div className="space-y-1 md:w-64 -mt-5">
          <Label htmlFor="kebeleId">Kebele ID</Label>
          <Input id="kebeleId" name="kebeleId" type="file" onChange={handleFileChange} required />
        </div>

        <div className="space-y-1 md:w-72 -mt-4">
          <Label htmlFor="role">Role</Label>
          <Select name="role" onValueChange={(value) => handleInputChange({ target: { name: 'role', value } })}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
        

      </div>
      <div className='flex justify-center'>
        <Button type="submit" className="md:w-[10rem] flex justify-center">Add User</Button>
      </div>
    </form>
  )
}