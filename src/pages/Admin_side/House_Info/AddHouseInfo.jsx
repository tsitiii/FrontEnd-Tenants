import { Button } from "@/components/UI/button"
import { Input } from "@/components/UI/input"
import { Label } from "@/components/UI/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UI/select"
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddHouseInfo = () => {
    const [formData, setFormData] = useState({
        region: '',
        city: '',
        subCity: '',
        kebele: '',
        uniquePlace: '',
        houseNumber: '',
        condition: '',
        rentAmount: '',
        leaseYear: '',
        OtherPaymentBills: '',
        prepaymentAmount: '',
        prepaymentMonth: '',
        paymentDate: '',
        OwnershipDoc: 'null',


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
          OwnershipDoc: e.target.files[0]
        }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the formData to your backend
        console.log(formData)
        // Reset form after submission
        setFormData({
            region: '',
        city: '',
        subCity: '',
        kebele: '',
        uniquePlace: '',
        houseNumber: '',
        condition: '',
        rentAmount: '',
        leaseYear: '',
        OtherPaymentBills: '',
        prepaymentAmount: '',
        prepaymentMonth: '',
        paymentDate: '',
        OwnershipDoc: 'null',
    
        })
      }
        //navigate to the previous page
      let navigate = useNavigate();
  return (

    <form onSubmit={handleSubmit} className="space-y-6 max-w-[100%] mx-auto h-screen p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Add New House information</h2>
      <Button className='text-right mb-2 hover:scale-105 transition motion-safe:animate-bell' onClick={()=>navigate(-1)}><FaArrowCircleLeft size={24}/></Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      <div className="relative">
          <Input
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

        <div className="relative">
          <input
            type="number"
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

        <div className="relative">
          <input
            type="number"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="class"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Classes
          </label>
        </div>
        <div className="space-y-1 -mt-4">
          <Label htmlFor="condition">Condtion</Label>
          <Select name="condition" onValueChange={(value) => handleInputChange({ target: { name: 'condition', value } })}>
            <SelectTrigger>
              <SelectValue placeholder="Select condition of the house" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Old with No Rental Information">Old with No Rental Information</SelectItem>
              <SelectItem value="Old with Rental Information">Old with Rental Information</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <input
            type="number"
            id="rentAmount"
            name="rentAmount"
            value={formData.rentAmount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="rentAmount"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Rent Amount (in Birr)
          </label>
        </div>

        <div className="relative">
          <input
            type="number"
            id="leaseYear"
            name="leaseYear"
            value={formData.leaseYear}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="leaseYear"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
           Lease Year
          </label>
        </div>

        <div className="space-y-1 -mt-4">
          <Label htmlFor="OtherPaymentBills">Other payment bills</Label>
          <Select name="OtherPaymentBills" onValueChange={(value) => handleInputChange({ target: { name: 'OtherPaymentBills', value } })}>
            <SelectTrigger>
              <SelectValue placeholder="Select Who is going to pay for Bills(Water, Electric and Other bills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Landloard">Landloard</SelectItem>
              <SelectItem value="Tenure">Tenure</SelectItem>
              <SelectItem value="Share">Share</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <input
            type="number"
            id="prepaymentAmount"
            name="prepaymentAmount"
            value={formData.prepaymentAmount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="prepaymentAmount"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
           Pre-payment paid (in birr)

          </label>
        </div>
      
        <div className="relative">
          <input
            type="number"
            id="prepaymentMonth"
            name="prepaymentMonth"
            value={formData.prepaymentAmount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="prepaymentMonth"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
              Pre-payment paid (For months)
           
          </label>
        </div>

        <div className="relative">
          <input
            type="number"
            id="paymentDate"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="paymentDate"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
              payment date
          </label>
        </div>

        <div className="space-y-1 md:w-full -mt-6">
          <Label htmlFor="ownershipDoc">Ownership document</Label>
          <Input id="OwnershipDoc" name="ownershipDoc" type="file" onChange={handleFileChange} required />
        </div>

       

         </div>  
         <div className='flex justify-center mt-30'>
        <Button type="submit" className="md:w-[12rem] text-center p-2 font-bold  hover:scale-110 transition">Add</Button>
      </div> 
    
    </form>
  
  
    
  )
}

export default AddHouseInfo