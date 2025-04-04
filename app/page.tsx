"use client"


import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react"


import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Code,
  Download,
  ExternalLink,
  Figma,
  Github,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Moon,
  Sun,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll to update active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "resume", "contact", "blog"]
      const scrollPosition = window.scrollY + 100

      // Calculate scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
    
  ]
  const projects = [
    {
      title: "Smart IoT Helmet",
      description: "Safety helmet with real-time monitoring using IoT and IFTTT.",
      image: "/helmet.jpeg", // Place the image inside the 'public' folder in your portfolio project
      tags: ["IoT", "Arduino", "Embedded Systems"],
      link: "https://github.com/DegeneratorXx/IoT/tree/main/IoT/Smart%20IoT%20Helmet",
      github: "https://github.com/DegeneratorXx/IoT/tree/main/IoT/Smart%20IoT%20Helmet",
    }
    ,
    {
      title: "Journal App (Spring Boot)",
      description: "Backend journal app with Spring Security, role-based access, and MongoDB integration.",
      image: "/journal.png",
      tags: ["Spring Boot", "Spring Security", "MongoDB", "REST API"],
      link: "https://github.com/DegeneratorXx/SpringBoot",
      github: "https://github.com/DegeneratorXx/SpringBoot",
    },
    {
      title: "Hotel Booking Website",
      description: "Flask-based booking platform with secure auth, room management, and SQLite database.",
      image: "hotel.png",
      tags: ["Flask", "SQLite", "DBMS", "bcrypt"],
      link: "https://github.com/DegeneratorXx/DBMS-PROJECT_4thsem",
      github: "https://github.com/DegeneratorXx/DBMS-PROJECT_4thsem",
    },
    {
      title: "SkinVision",
      description: "AI-powered skin analysis using YOLOv8, InceptionV3, and generative AI for diagnosis.",
      image: "skinvision.png",
      tags: ["Python", "YOLOv8", "InceptionV3", "Qwen2-VLM", "Flask", "Roboflow"],
      link: "https://github.com/DegeneratorXx/SkinVision-Acne-Jaundice-Prediction-with-YOLOv8-InceptionV3-and-Qwen2-VLM",
      github: "https://github.com/DegeneratorXx/SkinVision-Acne-Jaundice-Prediction-with-YOLOv8-InceptionV3-and-Qwen2-VLM",
    },
    {
      title: "Coca-Cola Product Page Design",
      description: "Interactive Figma prototype showcasing Coke variants with animated transitions.",
      image: "/coke.png",
      tags: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/proto/fdJFXpMceWqaof4CiTnXp7/coke?page-id=0%3A1&node-id=64-1781&node-type=frame&viewport=440%2C378%2C0.07&t=8knRhuvsBwlCHCSl-1&scaling=scale-down-width&content-scaling=fixed",
      github: "#",
    },
    {
      title: "Shared Emotions Platform (Sentify)",
      description: "Figma concept for a platform to express emotions, share stories, and track mood analytics.",
      image: "/sentify.png",
      tags: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/proto/3AJTdLIQxEDhWmt6y5kpOb/designathon?page-id=0:1&node-id=10-836&p=f&viewport=205,476,0.03&t=G4jsnVxt9wtl6u7W-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10:836&show-proto-sidebar=1",
      github: "#",
    }
  ];
  
  const skills = {
  "UI/UX Design": [
    { name: "Figma", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Adobe XD", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Sketch", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Prototyping", icon: "/placeholder.svg?height=50&width=50" },
  ],
  "Frontend Development": [
    { name: "React", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Next.js", icon: "/placeholder.svg?height=50&width=50" },
    { name: "HTML5", icon: "/placeholder.svg?height=50&width=50" },
    { name: "CSS3", icon: "/placeholder.svg?height=50&width=50" },
    { name: "JavaScript", icon: "/placeholder.svg?height=50&width=50" },
    { name: "TypeScript", icon: "/placeholder.svg?height=50&width=50" },
  ],
  "Android Development": [
    { name: "Kotlin", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Jetpack Compose", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Android Studio", icon: "/placeholder.svg?height=50&width=50" },
  ],
  "Backend Development": [
    { name: "Spring Boot", icon: "/placeholder.svg?height=50&width=50" },
    { name: "MongoDB", icon: "/placeholder.svg?height=50&width=50" },
    { name: "REST APIs", icon: "/placeholder.svg?height=50&width=50" },
    { name: "Node.js", icon: "/placeholder.svg?height=50&width=50" },
  ],
  "Embedded & IoT": [
    { name: "Arduino", icon: "/placeholder.svg?height=50&width=50" },
    { name: "ESP32", icon: "/placeholder.svg?height=50&width=50" },
    { name: "TensorFlow Lite", icon: "/placeholder.svg?height=50&width=50" },
  ],
};

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/90 text-foreground relative overflow-hidden">
        {/* Background gradient elements */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: "12s" }}
          ></div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold"
            >
              Lakshit<span className="text-primary">.dev</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}
              
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
             
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-background/80 backdrop-blur-md border-b border-white/10"
              >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className={`text-sm font-medium transition-colors ${
                        activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="pt-16">
         {/* Hero Section */}
<section id="home" className="min-h-screen flex items-center relative overflow-hidden">
  <div className="container mx-auto px-4 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
          UI/UX Designer & Software Developer
        </div>

        {/* Name Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            Lakshit
          </span>
        </h1>

        {/* Typewriter Effect */}
        <h2 className="text-xl md:text-2xl font-semibold text-white mt-2 h-10">
          <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            <Typewriter
              words={["UI/UX Designer", "Software Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-lg">
          I design and build user-centered digital products that solve real problems and deliver exceptional
          experiences.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border border-white/20 backdrop-blur-sm hover:bg-white/10"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex items-center space-x-4 pt-4">
          <Link href="https://github.com/DegeneratorXX" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" aria-label="GitHub" className="rounded-full hover:bg-white/10">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/lakshitkh" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" aria-label="LinkedIn" className="rounded-full hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:lakshitkhandelwal.dev@gmail.com">
            <Button variant="ghost" size="icon" aria-label="Email" className="rounded-full hover:bg-white/10">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Artistic Animated Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <motion.div
          className="relative aspect-square max-w-md mx-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          {/* Glowing Aura with Spin */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-br from-purple-500/40 to-pink-500/40 animate-pulse"
            style={{ animationDuration: "6s" }}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          ></motion.div>

          {/* Glassmorphism container */}
          <div className="relative bg-white/5 backdrop-blur-md rounded-full overflow-hidden border border-white/20 shadow-xl aspect-square z-10">
            <Image
              src="me.jpg"
              alt="Lakshit"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative orbs */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-70 blur-md"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-70 blur-md"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll Down Button */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll down"
          className="rounded-full border border-white/20 backdrop-blur-sm"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  </div>
</section>

        {/* About Section */}
<section id="about" className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
      <p className="text-lg text-muted-foreground">
        Explore my journey in Software Development and UI/UX Design, where creativity meets technology.
      </p>
    </motion.div>

    {/* Two Column Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Software Development Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6 space-y-4"
      >
        <h3 className="text-2xl font-bold">Software Development</h3>
        <p className="text-muted-foreground">
          My passion for software development lies in building scalable, efficient, and intelligent applications.
          I focus on writing clean, maintainable code that solves real-world problems using modern frameworks and best practices.
        </p>
        <p className="text-muted-foreground">
          I work primarily with Java, Spring Boot, Flask, and Python, with a growing interest in Machine Learning to add intelligence to my solutions.
        </p>
        <div className="flex items-start gap-3">
          <div className="bg-blue-500/20 p-2 rounded-md">
            <Code className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="font-medium">Tech Stack</p>
            <p className="text-sm text-muted-foreground">
              Java, Spring Boot, Python, Flask, Machine Learning
            </p>
          </div>
        </div>
      </motion.div>

      {/* UI/UX Design Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6 space-y-4"
      >
        <h3 className="text-2xl font-bold">UI/UX Design</h3>
        <p className="text-muted-foreground">
          As a UI/UX designer, I specialize in creating modern, minimalist interfaces that are both visually appealing and highly functional.
          I emphasize accessibility, smooth user flows, and engaging interactions to deliver delightful user experiences.
        </p>
        <p className="text-muted-foreground">
          With tools like Figma, I bring ideas to life through detailed prototypes, animations, and user-focused design systems.
        </p>
        <div className="flex items-start gap-3">
          <div className="bg-purple-500/20 p-2 rounded-md">
            <Figma className="h-5 w-5 text-purple-500" />
          </div>
          <div>
            <p className="font-medium">Design Tools</p>
            <p className="text-sm text-muted-foreground">
              Figma, Wireframing, Prototyping, Animations, Accessibility, User Research
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Centered Contact Me Button */}
    <div className="flex justify-center mt-12">
      <Button
        onClick={() => scrollToSection("contact")}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0"
      >
        Contact Me
      </Button>
    </div>
  </div>
</section>


         {/* Tech Stack Section */}
<section id="skills" className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
      <p className="text-lg text-muted-foreground">
        Here are the technologies I work with to build innovative solutions.
      </p>
    </motion.div>

    {/* Tech Stack Grid */}
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
  {[
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MATLAB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" },
  { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },

]
.map((tech, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center group relative overflow-hidden"
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 mb-3 relative">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <p className="font-medium text-center">{tech.name}</p>
      </div>
    </motion.div>
  ))}
</div>
  </div>
</section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">My Projects</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                <p className="text-lg text-muted-foreground">
                  Check out some of my recent work that showcases my design and development skills.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/20 group">
                      <div className="relative aspect-video overflow-hidden">
                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />


                        {/* Project links that appear on hover */}
                        {/* Generalized single project link that appears on hover */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                  <Link href={project.link || project.github} target="_blank" rel="noopener noreferrer">
                                    <Button
                                      variant="secondary"
                                      className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-sm px-4 py-2 rounded-md"
                                    >
                                      View Project
                                    </Button>
                                  </Link>
                                </div>

                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-white/10 backdrop-blur-sm text-xs px-2 py-1 rounded-full border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mt-12"
              >
                <Link href="https://github.com/DegeneratorXx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border border-white/20 backdrop-blur-sm hover:bg-white/10">
                    <Github className="mr-2 h-4 w-4" />
                    View More on GitHub
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">My Resume</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                <p className="text-lg text-muted-foreground">
                  Download/View my resume to learn more about my education, experience, and skills.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-8 text-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>

                  <div className="relative z-10 space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Download className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold">Ready to Download</h3>
                    <p className="text-muted-foreground">
                      Get a comprehensive overview of my skills, experience, and education in one document.
                    </p>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href="https://drive.google.com/drive/folders/1NEbQbQGErs-Kf9Vjmr8eUWidwGH2-UPZ?usp=sharing" // Replace this with your actual resume path or external link
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 px-8 py-6">
                          <Download className="mr-2 h-5 w-5" />
                          Download Resume
                        </Button>
                      </a>
                    </motion.div>

                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
<section id="contact" className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
      <p className="text-lg text-muted-foreground">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <h3 className="text-2xl font-bold">Contact Information</h3>
        <p className="text-muted-foreground">
          Let’s connect and discuss your ideas! I'm always open to new opportunities and collaborations.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-3 rounded-full border border-white/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">lakshitkhandelwal.dev@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-3 rounded-full border border-white/10">
              <Monitor className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Website</p>
              <p className="text-muted-foreground">lakshit.dev</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-3 rounded-full border border-white/10">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-muted-foreground">linkedin.com/in/lakshitkh</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 pt-4">
          <Link href="https://github.com/DegeneratorXx" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              aria-label="GitHub"
              className="rounded-full hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/lakshitkh" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
              className="rounded-full hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:lakshitkhandelwal.dev@gmail.com">
            <Button variant="ghost" size="icon" aria-label="Email" className="rounded-full hover:bg-white/10">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const name = (form.name as HTMLInputElement).value;
            const email = (form.email as HTMLInputElement).value;
            const subject = (form.subject as HTMLInputElement).value;
            const message = (form.message as HTMLTextAreaElement).value;

            const mailtoLink = `mailto:lakshitkhandelwal.dev@gmail.com?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;

            window.location.href = mailtoLink;
            form.reset();
          }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Subject"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0"
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  </div>
</section>


            
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Lakshit. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

