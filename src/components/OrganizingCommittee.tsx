// src/components/OrganizingCommittee.tsx
const OrganizingCommittee = () => {
    const committee = [
      {
        title: "CHIEF PATRONS",
        members: [
          { name: "Dr. T. R. Paarivendhar", role: "Chancellor, SRMIST" },
          { name: "Dr. Ravi Pachamuthu", role: "Chairman, SRM Group" },
          { name: "Dr. P. Sathyanarayanan", role: "Pro-Chancellor (Academics), SRMIST" },
          { name: "Ms. Harini Ravi", role: "Director, Institutional Development, SRM Group" }
        ]
      },
      {
        title: "PATRONS",
        members: [
          { name: "Dr. C. Muthamizhchelvan", role: "Vice Chancellor, SRMIST" },
          { name: "Dr. S. Ponnusamy", role: "Registrar, SRMIST" },
          { name: "Dr. S. Ramachandran", role: "Director (Academics), SRM Group" }
        ]
      },
      {
        title: "CONFERENCE CHAIRMAN",
        members: [{ name: "Dr. C. V. Jayakumar", role: "Dean (FET), SRMIST, Vadapalani" }]
      },
      {
        title: "CONFERENCE CO-CHAIRMAN",
        members: [{ name: "Dr. C. Gomathy", role: "VP (Academics & Placements), SRMIST, Vadapalani" }]
      },
      {
        title: "CONVENOR",
        members: [{ name: "Dr. C. Rajesh", role: "Head, Department of Mathematics" }]
      },
      {
        title: "COORDINATORS",
        members: [
          { name: "Dr. S. Thalapathiraj", role: "Assistant Professor (Sr.C)" },
          { name: "Dr. J. Ravikumar", role: "Assistant Professor" }
        ]
      },
      {
        title: "TREASURERS & PUBLICATION COORDINATORS",
        members: [
          { name: "Dr. R. Venkatraman", role: "Assistant Professor" },
          { name: "Mr. J. Balamurugan", role: "Assistant Professor" }
        ]
      },
      {
        title: "ORGANIZING COMMITTEE",
        members: [
          { name: "Dr. N. Rameshan", role: "Assistant Professor (Sr.G)" },
          { name: "Dr. R. Manimaran", role: "Assistant Professor" },
          { name: "Dr. S. Muthukumaran", role: "Assistant Professor" },
          { name: "Dr. V. Sudha", role: "Assistant Professor (Sr.C)" },
          { name: "Dr. C. S. Varun Bose", role: "Assistant Professor" },
          { name: "Dr. E. Ragupathi", role: "Assistant Professor" }
        ]
      }
    ]
  
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Organizing Committee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committee.map((section, index) => (
              <div key={index} 
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl 
                transition-all duration-300 hover:-translate-y-2 border border-gray-100">
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
  
  export default OrganizingCommittee

