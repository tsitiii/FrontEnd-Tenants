import { Button } from "@/components/UI/button"
import { Input } from "@/components/UI/input"
import { Label } from "@/components/UI/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UI/select"
import { FaArrowCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddHouseInfo = () => {
    const [formData, setFormData] = useState({
        owner:"",
        region: '',
        city: '',
        sub_city: '',
        kebele: '',
        unique_place: '',
        house_number: '',
        status: '',
        rent_amount: '',
        Lease_year: '',
        other_bills: '',
        pre_payment_birr: '',
        pre_payment_month: '',
        payment_date: '',
        document: null,
        number_of_rooms:"",
        house_type:""


      })
    // const [users, setUsers] = useState([]);
    // const [phone, setPhone] = useState([]);
    // const [selectedUserId, setSelectedUserId] = useState(''); 

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/register/')
    //     .then(res=>{
    //       console.log(res.data)
    //         setUsers(res.data)
    //     }).catch(err=>console.log(err))
    // }, [])

    // const handleSelectChange = (event) => {
    //   const userId = event.target.value;
    //   setSelectedUserId(userId);
     
    // };
  

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
          document: e.target.files[0]
        }))
      }
    

      
      const handleSubmit = async (e) => {
        e.preventDefault()

        //we have a file so we need to use formdata 

        const data=  new FormData();
        Object.keys(formData).forEach(key=>{
          data.append(key,formData[key])
        })

        try {
          // Send form data to the backend
          const response = await fetch('http://localhost:8000/api/property/', {
            method: 'POST',
            body: data,
          
          });
      
          if (!response.ok) {
            // Handle error
            console.error('Property registration failed');}
      else{
            // Here you would typically send the formData to your backend
        console.log(formData)
        // Reset form after submission
        setFormData({
          owner:'',
            region: '',
        city: '',
        sub_city: '',
        kebele: '',
        unique_place: '',
        house_number: '',
        status: '',
        rent_amount: '',
        Lease_year: '',
        other_bills: '',
        pre_payment_birr: '',
        pre_payment_month: '',
        payment_date: '',
        document: null,
        number_of_rooms:"",
        house_type:""
        })}
      }catch(error){
        console.error("Error submitting the form:", error)
      }
      }
        //navigate to the previous page
      const navigate = useNavigate();
      
  return (

    <form onSubmit={handleSubmit} className="space-y-6 max-w-[95%] mx-auto h-fit p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Add New House information</h2>
      <Button className='text-right mb-2 hover:scale-105 transition motion-safe:animate-bell' onClick={()=>navigate(-1)}><FaArrowCircleLeft size={24}/></Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative">
          <Input
            type="tel"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="owner"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Owner phone number
          </label>
        </div>
{/* <label htmlFor="owner">Select Owner's Phone Number:</label>
      <select id="owner" onChange={handleSelectChange}>
        <option value="">Select phone number</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.phone}</option>
        ))}
      </select> */}

{/* <label htmlFor="owner">Select Owner's Phone Number:</label>
      <input
        list="owners"
        id="owner"
        name="owner"
        onChange={handleSelectChange}
        placeholder="Select phone number"
      />
      <datalist id="owners">
        <option value="">Select phone number</option>
        {users.map(user => (
          <option key={user.id} value={user.phone}>{user.phone}</option>
        ))}
      </datalist> */}
        

        
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
            id="sub_city"
            name="sub_city"
            value={formData.sub_city}
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
            id="unique_place"
            name="unique_place"
            value={formData.unique_place}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="unique_place"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Unique place
          </label>
        </div>

        <div className="space-y-1 -mt-4">
          <Label htmlFor="status">Condtion</Label>
          <Select name="status" onValueChange={(value) => setFormData(prevState => ({ ...prevState, status: value }))}>
          {/* <Select name="status" onValueChange={(value) => handleInputChange({ target: { name: 'status', value } })}> */}
            <SelectTrigger>
              <SelectValue placeholder="Select condition of the house" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="old_not_been_rented">Old and not been rented </SelectItem>
              <SelectItem value="old_has_been_rented">Old and has been rented</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <input
            type="number"
            id="house_number"
            name="house_number"
            value={formData.house_number}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="house_number"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            House Number
          </label>
        </div>

        <div className="relative">
          <input
            type="number"
            id="number_of_rooms"
            name="number_of_rooms"
            value={formData.number_of_rooms}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="number_of_rooms"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            number of rooms
          </label>
        </div>
        <div className="space-y-1 -mt-4">
          <Label htmlFor="house_type">House type</Label>
          <Select name="house_type" onValueChange={(value) => setFormData(prevState => ({ ...prevState, house_type: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select house_type of the house" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full house">Full house</SelectItem>
              <SelectItem value="Service house">Service house</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <input
            type="number"
            id="rent_amount"
            name="rent_amount"
            value={formData.rent_amount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="rent_amount"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Rent Amount (in Birr)
          </label>
        </div>

        <div className="relative">
          <input
            type="number"
            id="Lease_year"
            name="Lease_year"
            value={formData.Lease_year}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="Lease_year"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
           Lease Year
          </label>
        </div>

        <div className="space-y-1 -mt-4">
          <Label htmlFor="other_bills">Other payment bills</Label>
          <Select name="other_bills" onValueChange={(value) => setFormData((prevState) => ({ ...prevState, other_bills: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select Who is going to pay for Bills(Water, Electric and Other bills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Landloard">Landloard</SelectItem>
              <SelectItem value="Tenure">Tenure</SelectItem>
              {/* <SelectItem value="Share">Share</SelectItem> */}
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <input
            type="number"
            id="pre_payment_birr"
            name="pre_payment_birr"
            value={formData.pre_payment_birr}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="pre_payment_birr"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
           Pre-payment paid (in birr)

          </label>
        </div>
      
        <div className="relative">
          <input
            type="number"
            id="pre_payment_month"
            name="pre_payment_month"
            value={formData.pre_payment_month}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="pre_payment_month"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
              Pre-payment paid (For months)
           
          </label>
        </div>

        <div className="relative">
          <input
            type="date"
            id="payment_date"
            name="payment_date"
            value={formData.payment_date}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50 hover:bg-gray-100 transition-colors peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="payment_date"
            className="absolute left-3 top-2 text-gray-600 transition-all duration-300 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
              payment date
          </label>
        </div>

        <div className="space-y-1 md:w-full -mt-6">
          <Label htmlFor="document">upload document</Label>
          <Input id="document" name="document" type="file" onChange={handleFileChange}  accept="application/pdf" required />
        </div>

       

         </div>  
         <div className='flex justify-center mt-30'>
        <Button type="submit" className="md:w-[12rem] text-center p-2 font-bold  hover:scale-110 transition">Add</Button>
      </div> 
    
    </form>
  
  
    
  )
}

export default AddHouseInfo