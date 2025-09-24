"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { HiPlus, HiMinus } from "react-icons/hi";
import gsap from "gsap";

const faqs = [
  {
    question: "How Do I Create An Account?",
    answer:
      "Simply sign up as a patient or doctor, fill in your details, and verify via OTP for secure access.",
  },
  {
    question: "Is My Medical Data Secure?",
    answer:
      "Yes. All medical data is encrypted and stored securely, ensuring complete privacy.",
  },
  {
    question: "Can Doctors See My Prescriptions Without Permission?",
    answer:
      "No. Your prescriptions are private and can only be accessed with your explicit consent.",
  },
  {
    question: "How Do Medication Reminders Work?",
    answer:
      "Our system sends timely reminders to patients via app notifications and SMS.",
  },
  {
    question: "Can I Verify My Medicine Intake?",
    answer:
      "Yes, you can log and verify every medication intake within the platform.",
  },
  {
    question: "What Devices Are Supported?",
    answer:
      "Medilink works on web, iOS, and Android devices for maximum accessibility.",
  },
  {
    question: "How Are Strategies Personalized?",
    answer:
      "We analyze your health data and provide tailored treatment strategies.",
  },
];

export default function FaqWithFooter() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (openIndex === idx) {
        gsap.to(el, {
          height: "auto",
          duration: 0.5,
          ease: "power2.out",
          opacity: 1,
        });
      } else {
        gsap.to(el, {
          height: 0,
          duration: 0.4,
          ease: "power2.inOut",
          opacity: 0,
        });
      }
    });
  }, [openIndex]);

  return (
    <div className="w-full">
      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Heading + Image */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/Illustration.webp" 
              alt="FAQ"
              width={500}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

       {/* Right - Accordion */}
<div className="space-y-6">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="border-b pb-4 cursor-pointer"
      onClick={() =>
        setOpenIndex(openIndex === index ? null : index)
      }
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{faq.question}</h3>
        <span className="text-green-600 text-xl">
          {openIndex === index ? <HiMinus /> : <HiPlus />}
        </span>
      </div>
      {/* Animated Answer */}
      <div
        ref={(el) => (contentRefs.current[index] = el)}
        className="overflow-hidden h-0 opacity-0"
      >
        <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
      </div>
    </div>
  ))}
</div>

      </section>

      {/* Footer */}
        <footer className="border-t pt-8 mt-16 rounded-t-3xl bg-black whitespace-break-spaces text-white pb-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded"></div>
            <span className="font-bold text-xl">Medilink</span>
          </div>

          {/* Nav Links */}
          <nav className="flex gap-6 text-sm text-white-700">
            <a href="#">Solutions</a>
            <a href="#">How it works</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-white-600 hover:text-green-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white-600 hover:text-green-600">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white-600 hover:text-green-600">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Sub Footer */}
        <div className="border-t mt-6 pt-4 pb-4 text-sm text-white-600 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
          <p>© All rights reserved. Medilink</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policies</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
