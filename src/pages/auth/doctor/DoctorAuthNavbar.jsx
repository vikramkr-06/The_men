import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Stethoscope, Home, Phone, Info, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

const DoctorNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center mr-2">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-teal-600">MediBook</span>
              <span className="ml-2 text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">Doctors</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/doctor/join" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">
              Join as Doctor
            </Link>
            <Link to="/doctor/about" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/doctor/contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/doctor/login">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Doctor Login
              </Button>
            </Link>
            <Link to="/doctor/register">
              <Button className="bg-teal-600 hover:bg-teal-700">Join Now</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-teal-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Home
              </div>
            </Link>
            <Link
              to="/doctor/join"
              className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <UserPlus className="h-4 w-4 mr-2" />
                Join as Doctor
              </div>
            </Link>
            <Link
              to="/doctor/about"
              className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-2" />
                About
              </div>
            </Link>
            <Link
              to="/doctor/contact"
              className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </div>
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Stethoscope className="h-10 w-10 rounded-full bg-teal-100 p-2 text-teal-600" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Doctor Portal</div>
                <div className="text-sm font-medium text-gray-500">Manage your practice</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                to="/doctor/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctor Login
              </Link>
              <Link
                to="/doctor/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default DoctorNavbar