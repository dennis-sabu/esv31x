"use client";
import { useEffect, useRef } from "react";
import { FaLock, FaPrescriptionBottleAlt, FaUserFriends, FaCheckSquare } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrustPage() {
  const statsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    statsRef.current.forEach((stat) => {
      if (!stat || !stat.dataset.value) return;
      const finalValue = stat.dataset.value;
      const isPercent = finalValue.includes("%");
      const isPlus = finalValue.includes("+");

      const cleanValue = parseInt(finalValue.replace(/\D/g, ""), 10);

      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: cleanValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            const val = Math.floor(parseFloat(stat.innerText));
            if (isPercent) stat.innerText = val + "%";
            else if (isPlus) stat.innerText = val + "+";
            else stat.innerText = val.toString();
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            A Health Platform <br /> You Can{" "}
            <span className="text-green-500">Trust</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Built to ensure security, privacy, and better treatment outcomes
            with measurable results.
          </p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition flex items-center space-x-2">
            <>
                <span>Get Started</span>
                <svg 
                className="w-4 h-4 ml-2 -rotate-45" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                ></svg>
                <svg 
                className="w-4 h-4 ml-2 transform rotate-350 transition-transform group-hover:-translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </>
          </button>
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-2 gap-6">
          {/* Stat 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
            <FaLock className="text-green-500 text-3xl mx-auto mb-2" />
            <h3
              ref={(el) => { statsRef.current[0] = el }}
              data-value="98%"
              className="text-2xl font-bold text-gray-900"
            >
              0%
            </h3>
            <p className="text-sm text-gray-600">
              Patient data security compliance
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
            <FaPrescriptionBottleAlt className="text-green-500 text-3xl mx-auto mb-2" />
            <h3
              ref={(el) => { statsRef.current[1] = el }}
              data-value="50k+"
              className="text-2xl font-bold text-gray-900"
            >
              0+
            </h3>
            <p className="text-sm text-gray-600">
              Verified prescriptions managed monthly
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
            <FaUserFriends className="text-green-500 text-3xl mx-auto mb-2" />
            <h3
              ref={(el) => { statsRef.current[2] = el }}
              data-value="10k+"
              className="text-2xl font-bold text-gray-900"
            >
              0+
            </h3>
            <p className="text-sm text-gray-600">
              Active patients and doctors every week
            </p>
          </div>

          {/* Stat 4 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
            <FaCheckSquare className="text-green-500 text-3xl mx-auto mb-2" />
            <h3
              ref={(el) => { statsRef.current[3] = el }}
              data-value="85%"
              className="text-2xl font-bold text-gray-900"
            >
              0%
            </h3>
            <p className="text-sm text-gray-600">
              Improved treatment adherence with reminders
            </p>
          </div>
        </div>
      </div>
    </div>

    



  );
}
