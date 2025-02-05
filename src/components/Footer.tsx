const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>Dr. C. Rajesh</p>
              <p>Head, Department of Mathematics</p>
              <p>SRMIST, Vadapalani</p>
              <p>Ph: +91 99413 70530</p>
              <p>Email: icirtam@srmist.edu.in</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="space-y-2">
              <p>SRM Institute of Science & Technology</p>
              <p>Faculty of Engineering & Technology</p>
              <p>No.1, Jawaharlal Nehru Salai</p>
              <p>Vadapalani, Chennai - 600026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
 }
 
 export default Footer