// src/components/Topics.tsx
const Topics = () => {
  const topics = [
    "Graph Theory",
    "Algebra and Number Theory",
    "Topology & Fuzzy Mathematics",
    "Numerical Analysis & Methods",
    "Stochastic Process",
    "Cryptography",
    "Computational Fluid Dynamics",
    "Applied Probability",
    "Real, Complex and Functional Analysis",
    "Mathematical & Computational Techniques",
    "Operations Research and its Applications",
    "Computational Methods in Differential Equations",
    "Mathematical theory and its applicability in business, industry, biology, health sciences, education",
    "Statistics",
    "Information Theory",
    "Epidemiology",
    "Data Mining",
    "Queuing",
    "Information Systems",
    "Quality Control",
    "Econometrics"
];

 
  return (
    <section id="topics" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Conference Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div key={index} 
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-900
              hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
            >
              <p className="text-gray-700 font-semibold group-hover:text-blue-900 transition-colors">{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
 }
 
 export default Topics