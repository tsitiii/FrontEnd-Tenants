import notFound from '../../assets/notfound.png'
const Notfound = () => {
  return (
    <>
      <div className='flex justify-center flex-col sm:flex-row h-screen bg-light-blue-800'>
      <div className=''>
        <img src={notFound} alt="Not found" className='sm:h-screen' />
       </div>
       <div className='flex justify-center items-center'>
         <div>
         <h2>Ooops, looks like we cant find that page!!! </h2>
        <div className='flex justify-center gap-4'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Home page
</button>
<button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">
  Get help
</button>
        </div>
         </div>

       </div>
      </div>
       
       
       
    </>
  )
}

export default Notfound