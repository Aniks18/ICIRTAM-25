const Registration = () => {
  const fees = [
    { category: "Faculty", fee: "Rs. 2000/-" },
    { category: "Students / Research Scholar", fee: "Rs. 1500/-" },
    { category: "Industry Persons", fee: "Rs. 2500/-" },
    { category: "Foreign Participants", fee: "US $100/-" }
  ]
 
  const dates = [
    { event: "Last Date for Submission of abstract", date: "31/01/2025" },
    { event: "Last Date for Submission of full Paper", date: "10/02/2025" },
    { event: "Last Date for Registration", date: "10/02/2025" }
  ]
 
  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Registration Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:-translate-y-2 border border-gray-100
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
            <h3 className="text-xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-100 group-hover:border-blue-300">
              Registration Fees
            </h3>
            {fees.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 group-hover:scale-105 transition-transform">
                <span className="text-gray-700 font-medium">{item.category}</span>
                <span className="font-bold text-blue-900 bg-blue-50 px-4 py-1 rounded-full">{item.fee}</span>
              </div>
            ))}
          </div>
 
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:-translate-y-2 border border-gray-100
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
            <h3 className="text-xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-100 group-hover:border-blue-300">
              Important Dates
            </h3>
            {dates.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 group-hover:scale-105 transition-transform">
                <span className="text-gray-700 font-medium">{item.event}</span>
                <span className="font-bold text-blue-900 bg-blue-50 px-4 py-1 rounded-full">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
 }
 
 export default Registration