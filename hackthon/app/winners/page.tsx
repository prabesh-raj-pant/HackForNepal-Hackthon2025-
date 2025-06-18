"use client"
import { motion } from "framer-motion"
import { Trophy, Award, Medal, Users, ArrowLeft, Crown, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface WinnerTeam {
  position: number
  teamName: string
  projectName: string
  collegeName: string
  members: string[]
  description: string
  category?: string
  image?: string
}

interface SpecialAward {
  title: string
  teamName: string
  projectName: string
  members: string[]
  image?: string
  collegeName: string
  description: string
}

export default function WinnersPage() {
  const winners: WinnerTeam[] = [
    {
      position: 1,
      teamName: "Techtonic",
      projectName: "Mind Bridge",
      collegeName: "IOE Purwanchal Campus",
      members: ['Jeevan Kumar Kushwaha', 'Kritam Bhattarai', 'Dipesh Acharya', 'Kushal Adhikari'],
      description:
        "MindBridge is an AI-driven, cross-platform e-learning application tailored specifically for dyslexic individuals. It uses personalized and gamified learning content to improve reading skills, boost confidence, and empower individuals to reach their full potential.",
      category: "Health Tech",
      image: "/winner.JPG",
    },
    {
      position: 2,
      teamName: "Sidewinders",
      projectName: "SANDUK",
      collegeName: "Himalaya College Of Engineering, TU",
      members: ['Stuti Upreti', 'Prakriti Shrestha', 'Anshu Gahire', 'Amrit Chapai'],
      description:
        "SANDUK: A Family-Health Vault is a purpose-driven digital health ecosystem built on the MERN stack to address the complex and underserved health record-keeping needs of Nepali families. It offers a centralized, multi-user platform that allows tech-savvy family members to manage medical records across generations.",
      category: "Health-Tech",
      image: "/runnerup.JPG",
    },
    {
      position: 3,
      teamName: "NeuroMedics",
      projectName: "NeuroLens",
      collegeName: "Kathmandu University",
      members: ['Ashitom Budhathoki', 'Suraj Bhattarai', 'Samir Panday', 'Safal Gautam'],
      description:
        "NeuroLens is an AI-powered diagnostic tool developed by Team NeuroMedics to identify early symptoms of Alzheimer's and Parkinson's diseases through the analysis of eye movement and speech patterns. Using a basic webcam and microphone, the system captures user data and applies machine learning models to detect cognitive and motor anomalies. ",
      category: "Health-Tech",
      image: "/second_runnerup.JPG",
    },
  ]

  const specialAwards: SpecialAward[] = [
    {
      title: "Best UI/UX Design",
      teamName: "4-Dimensions",
      projectName: "KrishiGPT",
      members: ['Dipak Raj Giri', 'Sameer Bhatt', 'Dipa Joshi', 'Dilendra Singh Thagunna'],
      collegeName: "Far Western University",
      description:
        "KrishiGPT is an advanced GenAI-powered assistant aimed at transforming agriculture in Nepal, particularly in rural and hilly regions where farmers often rely on traditional practices and limited access to expert advice.",
      image: "/uiux.JPG",
    },
    {
      title: "Most Innovative Solution",
      teamName: "Tech Tacticos",
      projectName: "Spinovate",
      members: ['Santosh Yadav',
        'Diwas Parajuli',
        'Aayush Pokhrel',
        'Aavash Lamichhane'

      ],
      collegeName: "Kathmandu University",
      description:
        "Spinovate is a web-based health application designed to promote spinal wellness through exercise tracking and posture correction, utilizing real-time computer vision. This solution provides a proactive way to monitor spinal alignment and guide users through healthier posture habits and spinal exercises. ",
      image: "/open_innovation.JPG",
    },
  ]

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="h-8 w-8 text-yellow-500" />
      case 2:
        return <Medal className="h-8 w-8 text-gray-400" />
      case 3:
        return <Award className="h-8 w-8 text-amber-600" />
      default:
        return <Trophy className="h-8 w-8 text-blue-500" />
    }
  }

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1:
        return "from-yellow-400 to-yellow-600"
      case 2:
        return "from-gray-300 to-gray-500"
      case 3:
        return "from-amber-400 to-amber-600"
      default:
        return "from-blue-400 to-blue-600"
    }
  }

  const getPositionText = (position: number) => {
    switch (position) {
      case 1:
        return "1st Place"
      case 2:
        return "2nd Place"
      case 3:
        return "3rd Place"
      default:
        return `${position}th Place`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-800">
      {/* Professional background pattern */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-[0.15]"></div>
        <div className="absolute -left-[30%] -top-[10%] h-[500px] w-[500px] rounded-full bg-yellow-100 opacity-20 blur-3xl"></div>
        <div className="absolute -right-[20%] top-[20%] h-[600px] w-[600px] rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-yellow-50 opacity-20 blur-3xl"></div>
      </div>

      {/* Header Section */}
      <section className="relative z-10 bg-white bg-opacity-90 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center text-gray-800 hover:text-blue-600 transition-colors">
                <ArrowLeft className="mr-2 h-5 w-5" />
                <span>Back to Hackathon</span>
              </Link>
              <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                <Link href="/" className="text-2xl font-bold">
                  <span className="text-red-600">Hack</span>
                  <span className="text-blue-700">ForNepal </span>
                  <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"> Winners</span>
                </Link>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <span className="text-lg font-semibold text-gray-700">Innovation Challenge 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Winners Hero Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Congratulations
              </span>
              <span className="text-gray-800"> to Our Winners!</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Celebrating the brilliant minds who created innovative solutions for Nepal's challenges during our 48-hour
              hackathon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Winners Section */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Top 3 Winners</h3>
            <div className="grid gap-8 lg:grid-cols-3 bg-gradient-to-b">
              {winners.map((winner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className={`relative ${winner.position === 1 ? "lg:order-2 lg:scale-105" : winner.position === 2 ? "lg:order-1" : "lg:order-3"}`}
                >
                  <Card className="h-full overflow-hidden border-2  bg-gradient-to-b  shadow-xl justify-between ">
                    {/* Position Badge */}
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 z-10`}>
                      <div
                        className={`bg-gradient-to-r ${getPositionColor(winner.position)} text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2`}
                      >
                        {getPositionIcon(winner.position)}
                        <span className="font-bold">{getPositionText(winner.position)}</span>
                      </div>
                    </div>

                    <CardHeader className="pt-8 pb-4">
                      <div className="text-center mb-4">
                        <Image
                          src={winner.image || "/placeholder.svg"}
                          alt={`${winner.projectName} project`}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <CardTitle className="text-center">
                        <div className="text-2xl font-bold text-gray-800 mb-1">{winner.teamName}</div>
                        <div className="text-lg text-blue-600 mb-2">{winner.projectName}</div>
                        <div className="text-sm text-gray-600">{winner.collegeName}</div>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Category Badge */}
                      {winner.category && (
                        <div className="text-center">
                          <Badge variant="secondary" className="text-sm">
                            {winner.category}
                          </Badge>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed justify-aruound items-baseline" >{winner.description}</p>


                      {/* Team Members */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Team Members
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {winner.members.map((member, i) => (
                            <Badge key={i} variant="outline" className="text-xs text-gray-700">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>


                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Awards Section */}
      <section className="relative z-10 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Special Category Awards</h3>
            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto bg-gradient-to-b ">
              {specialAwards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <Card className="h-full border border-gray-200 shadow-lg overflow-hidden bg-gradient-to-b ">
                    <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-700 text-white pb-3">
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5" />
                        {award.title}
                      </CardTitle>
                    </CardHeader>

                    <div className="p-4">
                      <Image
                        src={award.image || "/placeholder.svg"}
                        alt={`${award.projectName} project`}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover rounded-lg mb-4"
                      />
                    </div>

                    <CardContent className="pt-0 space-y-3">
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">{award.teamName}</h4>
                        <p className="text-blue-600 font-medium">{award.projectName}</p>
                        <p className="text-sm text-gray-600">{award.collegeName}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed justify-evenly">{award.description}</p>

                      {/* Team Members */}
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Team Members
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {award.members.map((member, i) => (
                            <Badge key={i} variant="outline" className="text-xs text-gray-700">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>


                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Hackathon Impact</h3>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { number: "24+", label: "Participating Teams" },
                { number: "95+", label: "Participants" },
                { number: "48", label: "Hours of Innovation" },
                { number: "4", label: "Innovation Themes" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-gray-900 to-black py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} HACK FOR NEPAL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
