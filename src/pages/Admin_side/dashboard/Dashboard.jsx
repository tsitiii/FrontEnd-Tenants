import { Button } from "@/components/UI/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card"
import { MdAppRegistration } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import SideBar from '../../../components/Sidebar/Sidebar.jsx'
import AppBar from "@/components/Apppbar/AppBar.jsx"
import Demographics_info from "../Piechart/Demographics_info.jsx"
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "@/Api.jsx";
import { useAuth } from "@/context/AuthContext.jsx";


const Dashboard = () => {
  const [data, setData] = useState([]);
  const {user}= useAuth();

  useEffect(() => {
    axiosInstance
      .get("/api/report/", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
        console.log(res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log("error", err);
      });

    axios.get("http://localhost:8000/api/register/", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then
  }, [])

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <p>loDING ......</p>
  }
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <SideBar />
        <main className="flex-grow p-6 overflow-auto">
          <AppBar />
          <h2>Welcome {user.firstName} {user.fatherName}</h2>
          <div className="grid gap-4 mb-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
            {/* Total Registration card */}
            <Card className='cursor-pointer rounded-2xl flex hover:bg-[#4c7be1] text-[#2a33a8] hover:text-slate-100 ease-out delay-150 hover:scale-x-110 transition  duration-400'>
              <div className="flex justify-center items-center p-2">
                <MdAppRegistration className="h-10 w-10 text-[#57cce7]" />
              </div>
              <div>
                <CardHeader className="items-center pb-2">

                  <CardTitle className="text-sm font-medium md:font-semibold  ">Total Registration</CardTitle>

                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-center">{data.total_users}</div>
                  {/* <p className="text-xs ">+10% from last month</p> */}
                </CardContent></div>
            </Card>


            {/* Total Tenants card */}
            <Card className='cursor-pointer  rounded-xl flex hover:bg-[#4c6ee1] text-[#2a33a8] hover:text-slate-100 ease-out delay-150 hover:scale-x-110 transition  duration-400'>
              <div className="flex items-center p-2">
                <FaHouseUser className="h-10 w-10 text-[#e6df58]" />
              </div>
              <div className="">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium md:font-semibold">Total Landloards registered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-center">{data.total_landlords}</div>
                  {/* <p className="text-xs ">+2 new this week</p> */}
                </CardContent>
              </div>
            </Card>


            {/* Total Tenures card */}
            <Card className='cursor-pointer  rounded-xl flex hover:bg-[#4c6ee1] text-[#2a33a8] hover:text-slate-100 ease-out delay-150 hover:scale-x-110 transition  duration-400'>
              <div className="flex items-center p-2">

                <FaUserTie className="h-10 w-10 text-[#257180]" />
              </div>
              <div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Tenures registered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-center">{data.total_tenants}</div>
                  {/* <p className="text-xs text-muted-foreground">+19% from last month</p> */}
                </CardContent>
              </div>
            </Card>


            <Card className='cursor-pointer  rounded-xl flex hover:bg-[#4c6ee1] text-[#2a33a8] hover:text-slate-100 ease-out delay-150 hover:scale-x-110 transition  duration-400'>
              <div className="flex items-center p-2">
                <FaUsers className="h-10 w-10 text-[#6C48C5]" />
              </div>
              <div>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">573</div>
                  {/* <p className="text-xs ">+201 since last hour</p> */}
                </CardContent>
              </div>
            </Card>
          </div>

          {/* <div className="grid gap-6 mb-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-sm">New user registered</span>
                    <span className="text-xs text-muted-foreground ml-auto">5 min ago</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    <span className="text-sm">Project "Apollo" created</span>
                    <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    <span className="text-sm">Payment received from client</span>
                    <span className="text-xs text-muted-foreground ml-auto">1 day ago</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div> */}

          <div className="w-full">
            <Card>
              <CardContent>
                <Demographics_info />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard