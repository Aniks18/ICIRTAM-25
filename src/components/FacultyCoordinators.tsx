const FacultyCoordinators = () => {
  const coordinators = [
    {
      title: "FACULTY COORDINATORS", 
      members: [
        { name: "Dr. S. Ravikumar", role: "Assistant Professor" },
        { name: "Dr. S. Udayakumar", role: "Associate Professor" },
        { name: "Dr. K. Subramanian", role: "Associate Professor" },
        { name: "Dr. T. Sivakumar", role: "Associate Professor" },
        { name: "Dr. A. Dineshkumar", role: "Assistant Professor" },
        { name: "Dr. S. Prakash", role: "Assistant Professor" }
      ]
    }
   
  ]
 
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Conference Coordinators</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {coordinators.map((section, index) => (
            <div key={index} 
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-2 border border-gray-100
              hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-6 text-center 
                border-b-2 border-blue-100 pb-2 group-hover:border-blue-300">
                {section.title}
              </h3>
              <div className="space-y-6">
                {section.members.map((member, idx) => (
                  <div key={idx} className="text-center transform transition-transform group-hover:scale-105">
                    <p className="font-semibold text-gray-800 mb-1">{member.name}</p>
                    <p className="text-blue-700 text-sm bg-blue-50 py-1 px-3 rounded-full inline-block">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
 }
 
 export default FacultyCoordinators
