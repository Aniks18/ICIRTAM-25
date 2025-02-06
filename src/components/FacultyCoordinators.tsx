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
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Conference Coordinators
        </h2>
        <div className="flex justify-center">
          {coordinators.map((section, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 max-w-lg w-full"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center border-b-2 border-blue-200 pb-2 group-hover:border-blue-400">
                {section.title}
              </h3>
              <div className="space-y-6">
                {section.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="text-center transform transition-transform group-hover:scale-105"
                  >
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-blue-700 text-sm bg-blue-100 py-1 px-4 rounded-full inline-block mt-1">
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
  );
};

export default FacultyCoordinators;
