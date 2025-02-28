import { useNavigate } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "Understanding Lease Agreements: A Tenant's Guide",
    description: "A lease agreement is a legally binding contract between a landlord and a tenant. It outlines the terms of rent, responsibilities, and conditions of staying in a property.",
    image: "https://source.unsplash.com/600x400/?contract,agreement",
    date: "February 25, 2025"
  },
  {
    id: 2,
    title: "Landlord Rights: What You Need to Know",
    description: "Landlords have specific rights, including collecting rent on time, maintaining the property, and handling evictions according to legal procedures.",
    image: "https://source.unsplash.com/600x400/?landlord,realestate",
    date: "February 20, 2025"
  },
  {
    id: 3,
    title: "Tenant Responsibilities: Keeping Your Home Secure",
    description: "Tenants must adhere to the lease terms, pay rent on time, and maintain the property. Learn how to avoid lease violations and maintain a healthy tenant-landlord relationship.",
    image: "https://source.unsplash.com/600x400/?tenant,apartment",
    date: "February 18, 2025"
  },
  {
    id: 4,
    title: "What is Tenure in Renting? Explained",
    description: "Tenure in renting defines how long a tenant can stay in a property. Learn about fixed-term and periodic tenancies and their impact on lease renewals.",
    image: "https://source.unsplash.com/600x400/?house,keys",
    date: "February 15, 2025"
  },
  {
    id: 5,
    title: "Eviction Laws: Know Your Rights as a Tenant",
    description: "Facing eviction? Learn about tenant rights, legal eviction processes, and how to challenge an unlawful eviction.",
    image: "https://source.unsplash.com/600x400/?law,justice",
    date: "February 10, 2025"
  }
];
const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Admin Site Button */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => navigate("/admin/dashboard")}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Admin Site
        </button>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Latest Rental News & Updates</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>
              <p className="text-sm text-gray-600">{news.date}</p>
              <p className="text-gray-700 mt-2">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHome;
