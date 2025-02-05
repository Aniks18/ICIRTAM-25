// src/components/Speakers.tsx
const Speakers = () => {
  const speakersList = [
    {
      name: "Dr. ISMAIL NACI CANGUL",
      title: "Professor, Mathematics",
      institution: "Bursa Uludag University, Turkey",
      specialization: "Topological Graph Theory"
    },
    {
      name: "Dr. KAVIKUMAR JACOB",
      title: "Associate Professor of Mathematics",
      institution: "Universiti Tun Hussein Onn Malaysia",
      specialization: "Fuzzy Mathematics"
    },
    {
      name: "Dr. C. SIVAGNANAM",
      title: "Assistant Professor, Mathematics", 
      institution: "University of Technology, Oman",
      specialization: "Numerical Analysis"
    },
    {
      name: "Dr. J. BASKAR BABUJEE",
      title: "Professor, Mathematics",
      institution: "Anna University, Chennai",
      specialization: "Graph Theory & Applications"
    },
    {
      name: "Dr. V. VETRIVEL",
      title: "Professor, Mathematics",
      institution: "IIT Madras, Chennai",
      specialization: "Optimization Theory"
    },
    {
      name: "Dr. G. MAHADEVAN",
      title: "Professor, Mathematics",
      institution: "Gandhigram Rural Institute",
      specialization: "Graph Theory"
    }
  ]
 
  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Eminent Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersList.map((speaker, index) => (
            <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full mb-6 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl font-bold">
                  {speaker.name.split(' ').pop()?.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 text-center mb-3">{speaker.name}</h3>
              <p className="text-gray-700 text-center mb-2 font-medium">{speaker.title}</p>
              <p className="text-gray-600 text-center mb-3">{speaker.institution}</p>
              <div className="bg-blue-50 py-2 px-4 rounded-full mx-auto text-center">
                <p className="text-blue-800 text-sm font-semibold">{speaker.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
 }
 
 export default Speakers