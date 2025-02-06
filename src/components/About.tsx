const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* About the Conference */}
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:-translate-y-2 border border-gray-100
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
            <div className="border-b-2 border-blue-100 pb-4 mb-6 group-hover:border-blue-300">
              <h2 className="text-2xl font-bold text-blue-900">About The Conference</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
             The International Conference on Innovations & Recent Trends in Applied Mathematics (ICIRTAM'25) is being organized by the Department of Mathematics on 21st & 22nd of
             February 2025 at SRM Institute of Science and Technology, Vadapalani campus, Chennai. The objective of the conference is to provide a platform for updating the current research and to interact with various scientists and researchers working in the related research fields which will give an opportunity to gain knowledge. The conference includes keynote addresses and papers. This conference is the premier forum for the presentation of new advances, research results and to discuss the future trends in the field of mathematics.
            </p>
          </div>

          {/* About the Department */}
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:-translate-y-2 border border-gray-100
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
            <div className="border-b-2 border-blue-100 pb-4 mb-6 group-hover:border-blue-300">
              <h2 className="text-2xl font-bold text-blue-900">About The Department</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The department offers opportunities for education and research in a wide spectrum of areas in Mathematics. The department has been taking a leading role in filling the gap between schooling and college by using various methodologies. Our highly motivated faculty specializes in Mathematical sciences, providing potential research opportunities in basic sciences and interdisciplinary areas of science, engineering, and technology. Our faculty have extensive experience in research as well as teaching, ensuring academic and research excellence at SRM Institute of Science and Technology.
            </p>
          </div>

          {/* About SRM Institute of Science & Technology */}
          <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all duration-300 hover:-translate-y-2 border border-gray-100
            hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
            <div className="border-b-2 border-blue-100 pb-4 mb-6 group-hover:border-blue-300">
              <h2 className="text-2xl font-bold text-blue-900">About SRM Institute of Science & Technology</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              SRM Institute of Science and Technology is one of the top-ranking universities in India, with over 52,000 full-time students and more than 3,200 faculty across multiple campuses. The institute offers a wide range of undergraduate, postgraduate, and doctoral programs in Engineering & Technology, Management, Medicine & Health Sciences, Science & Humanities, Law, and Agricultural Sciences. SRMIST is accredited by the National Assessment and Accreditation Council (NAAC) with an "A++" grade and is classified as a Category "I" University by the Ministry of Education.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
