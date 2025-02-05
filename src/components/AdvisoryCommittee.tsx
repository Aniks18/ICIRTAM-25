const AdvisoryCommittee = () => {
  const advisors = [
    // International Advisory Committee
    {
      name: "Dr. Daniela Ferrero",
      institution: "Texas State University, United States"
    },
    {
      name: "Dr. Ismail Naci Cangul",
      institution: "Bursa Uludag University, Turkey"
    },
    {
      name: "Dr. Ayhan Esi",
      institution: "Adiyaman University, Turkey"
    },
    {
      name: "Dr. G. A. Mohiuddine",
      institution: "King Abdulaziz University, Saudi Arabia"
    },
    {
      name: "Dr. K. A. Kavikumar Jacob",
      institution: "Universiti Tun Hussein Onn, Malaysia"
    },
    {
      name: "Dr. C. Sivagnanam",
      institution: "University of Technology, OMAN"
    },
    // National Advisory Committee
    {
      name: "Dr. V. Vetrivel",
      institution: "IIT Madras, Chennai"
    },
    {
      name: "Dr. J. Baskar Babujee",
      institution: "Anna University, Chennai"
    },
    {
      name: "Dr. G. Mahadevan",
      institution: "Gandhigram Rural Institute"
    },
    {
      name: "Dr. Debabrata Datta",
      institution: "Former Nuclear Scientist, Kolkata"
    },
    {
      name: "Dr. S. P. Tiwari",
      institution: "Indian School of Mines, Dhanbad"
    },
    {
      name: "Dr. K. Thangavelu",
      institution: "Presidency College, Chennai"
    }
  ]
 
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Advisory Committee</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <div key={index} 
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-2 border border-gray-100
              hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
            >
              <div className="w-16 h-16 bg-blue-900 rounded-full mb-4 mx-auto flex items-center justify-center 
                group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl font-bold">
                  {advisor.name.split(' ')[1][0]}
                </span>
              </div>
              <p className="font-bold text-blue-900 text-lg text-center mb-2">{advisor.name}</p>
              <p className="text-blue-700 text-sm text-center bg-blue-50 py-1 px-3 rounded-full">
                {advisor.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
 }
 
 export default AdvisoryCommittee