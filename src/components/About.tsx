const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:-translate-y-2 border border-gray-100
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
            <div className="border-b-2 border-blue-100 pb-4 mb-6 group-hover:border-blue-300">
              <h2 className="text-2xl font-bold text-blue-900">About The Conference</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The International Conference on Innovations & Recent Trends in Applied Mathematics (ICIRTAM'25) is being organized by the Department of Mathematics on 21st & 22nd of February 2025 at SRM Institute of Science and Technology, Vadapalani campus, Chennai.
            </p>
          </div>
 
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:-translate-y-2 border border-gray-100
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
            <div className="border-b-2 border-blue-100 pb-4 mb-6 group-hover:border-blue-300">
              <h2 className="text-2xl font-bold text-blue-900">About The Department</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The department offers opportunities for education and research in Mathematics, taking a leading role in bridging the gap between schooling to college using various methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
 }
 
 export default About