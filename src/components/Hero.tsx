"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    setIsVisible(true);

    let i = 0;
    const typewriter = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typewriter);
      }
    }, 100);

    return () => clearInterval(typewriter);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen sm:mt-12 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Bashar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {typewriterText}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I build exceptional digital experiences using modern web
            technologies. Let's create something amazing together.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/bashar-vi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bashar-vi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bashar@example.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
