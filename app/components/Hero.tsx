"use client";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import { FaCalendarAlt, FaLink, FaDollarSign, FaGift } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white top-8 ">
    {/* Hero Section */}
  <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Section - Heading */}
    <div>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Empowering Healthcare <br />
      With{" "}
      <span className="text-green-500">
      Security &amp; Personalization
      </span>
    </h1>
    </div>

    {/* Right Section - Subtext + Buttons */}
    <div>
    <p className="text-gray-600 mb-6">
      Seamlessly manage prescriptions, appointments, and medical history with a
      secure, AI-powered platform designed for doctors and patients.
    </p>

    <div className="flex flex-wrap gap-4">
      <button
      type="button"
      className="px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition flex items-center space-x-2"
      >
      <span>Get Started</span>
      <HiArrowRight />
      </button>

      <button
      type="button"
      className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition"
      >
      Learn More
      </button>
    </div>
    </div>
  </div>

  {/* Image / Placeholder */}
  <div className="relative w-full h-[400px] sm:h-[1600px] md:h-[600px] lg:h-[700px] bg-gray-100 flex items-center justify-center rounded-2xl overflow-hidden">
    {/* Background Ambient Light Effect */}
    <div className="absolute inset-0 bg-gradient-radial from-green-200/30 via-transparent to-transparent mix-blend-overlay" />
    
    <Image
    src="/image 2.webp"
    alt="Doctor with patient"
    fill
    className="object-cover rounded-2xl"
    />

    {/* Linear Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

    {/* Play Button */}
    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition-all">
    <HiPlay className="w-8 h-8 text-white-500" />
    </button>
  </div>

  {/* Why Our Platform Section */}
  <div className="max-w-6xl mx-auto text-center px-6 py-12">
    <p className="text-sm uppercase text-gray-500 tracking-wide">
    Why Our Platform
    </p>
    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
    Unlock Better Health Outcomes <br />
    With Our <span className="text-green-500">Secure AI</span>-Driven Tools
    </h2>
  </div>

  {/* Feature Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-12">
    {/* Card 1 */}
    <div className="relative bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full overflow-hidden">
    <h3 className="font-semibold text-3xl text-gray-900 mb-2">
      Digital Health Records
    </h3>
    <p className="text-gray-600 text-2xl mb-6">
      Securely store and access medical history, prescriptions, and allergies.
    </p>
    <div className="flex justify-center items-end mt-auto -m-9">
      <Image
      src="/image-removebg-preview (3) 1.webp"
      alt="Digital Health Records"
      width={250}
      height={250}
      className="object-contain "
      />
    </div>
    {/* Gradient Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none" />
  </div>

  {/* Card 2 */}
  <div className="relative bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full overflow-hidden">
    <h3 className="font-semibold text-3xl text-gray-900 mb-2">
      Smart Appointment Booking
    </h3>
    <p className="text-gray-600 text-2xl mb-6">
      Effortlessly schedule consultations and receive instant confirmations.
    </p>
    <div className="flex justify-center items-end mt-auto -m-9">
      <Image
      src="/handsome-young-multiethnic-business-couple-with-digital-tablet-standing-discussing-modern-office 1.webp"
      alt="Smart Appointment Booking"
      width={250}
      height={250}
      className="object-contain"
      />
    </div>
    {/* Gradient Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none" />
  </div>

  {/* Card 3 */}
  <div className="relative bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full overflow-hidden">
    <h3 className="font-semibold text-3xl text-gray-900 mb-2">
      Prescription Management
    </h3>
    <p className="text-gray-600 text-2xl mb-6">
      Doctors upload prescriptions with dosage schedules; patients get real-time reminders.
    </p>
    <div className="flex justify-center items-end mt-auto -m-9">
      <Image
        src="/image-removebg-preview (1) 1.webp"
        alt="Prescription Management"
        width={250}
        height={250}
        className="object-contain"
      />
    </div>
    {/* Gradient Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none" />
  </div>

  {/* Card 4 */}
  <div className="relative bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full overflow-hidden">
    <h3 className="font-semibold text-3xl text-gray-900 mb-2">
      Verified Medicine Intake
    </h3>
    <p className="text-gray-600 text-2xl mb-6">
      Patients upload proof of medicine intake; doctors track adherence in real time.
    </p>
    <div className="flex justify-center items-end mt-auto -m-9 ">
      <Image
        src="/image-removebg-preview 1.webp"
        alt="Verified Medicine Intake"
        width={250}
        height={250}
        className="object-contain"
      />
    </div>
    {/* Gradient Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none" />
  </div>
</div>

        <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-bold text-left mb-12">
        <span className="text-gray-900">How It </span>
        <span className="text-green-500">Works</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaCalendarAlt className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-1">
              Book Or Manage Appointments
            </h3>
            <p className="text-gray-600 text-sm">
              Patients can book; doctors get instant notifications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaLink className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-1">
              Track & Monitor Treatment
            </h3>
            <p className="text-gray-600 text-sm">
              Get reminders, upload intake proof, and share verified progress.
            </p>
          </div>
        </div>

        {/* Center Phone Section */}
        <div className="text-center">
            <div className="bg-orange-50 rounded-2xl p-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Register As A Patient Or Doctor
            </h3>
            
            <p className="text-gray-600 mb-6 ">
            Create your secure profile with relevant details.
            </p>
            <div className="flex justify-center items-center -m-6">
            <Image
              src="/Mockup.webp" 
              alt="Track Your Health Progress"
              width={320}
              height={900}
              className="object-contain"
            />
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col gap-6">
          {/* Card 3 */}
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaDollarSign className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-1">
              Secure Access With OTP
            </h3>
            <p className="text-gray-600 text-sm">
              Patients control access—doctors view records only with OTP approval.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaGift className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-1">
              Your Health Matters
            </h3>
            <p className="text-gray-600 text-sm">
              Vestibulum feugiat nibh vitae neque laoreet bibendum et odio porta feugiat.
            </p>
          </div>
        </div>
      </div>
    </main>
        
    </section>
  );
}
