"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { read, utils } from "xlsx"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Users, School, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface TeamData {
    teamName: string
    projectName:string
    collegeName: string
    LeaderName: string
    themes: string
    Member1:string
    Member2:string
    Member3:string
}

export default function TeamsPage() {
    const [teams, setTeams] = useState<TeamData[]>([])
    const [filteredTeams, setFilteredTeams] = useState<TeamData[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function loadTeamData() {
            try {
                const response = await fetch("/teams.xlsx")
                const arrayBuffer = await response.arrayBuffer()
                const workbook = read(arrayBuffer)

                // Assuming the first sheet contains our data
                const firstSheetName = workbook.SheetNames[0]
                const worksheet = workbook.Sheets[firstSheetName]

                // Convert to JSON
                const jsonData = utils.sheet_to_json<any>(worksheet)

                // Map to our expected format
                const teamData: TeamData[] = jsonData.map((row) => ({
                    teamName: row["Team Name"] || "",
                    collegeName: row["College Name"] || "",
                    LeaderName: row["Leader Name"] || "",
                    themes: row["Themes"],
                    projectName:row["Project Name"],
                    Member1:row["Member 1"],
                    Member2:row["Member 2"],
                    Member3:row["Member 3"],
                    
                    
                }))

                setTeams(teamData)
                setFilteredTeams(teamData)
            } catch (error) {
                console.error("Error loading team data:", error)
            } finally {
                setIsLoading(false)
            }
        }

        loadTeamData()
    }, [])

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredTeams(teams)
        } else {
            const term = searchTerm.toLowerCase()
            const filtered = teams.filter(
                (team) =>
                    team.teamName.toLowerCase().includes(term) ||
                    team.collegeName.toLowerCase().includes(term) ||
                    team.LeaderName.toLowerCase().includes(term),
            )
            setFilteredTeams(filtered)
        }
    }, [searchTerm, teams])

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Professional background pattern - same as main page */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-[0.15]"></div>
                <div className="absolute -left-[30%] -top-[10%] h-[500px] w-[500px] rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
                <div className="absolute -right-[20%] top-[20%] h-[600px] w-[600px] rounded-full bg-teal-100 opacity-20 blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-50 opacity-20 blur-3xl"></div>
                <div className="absolute left-0 right-0 top-0 h-[150px] bg-gradient-to-b from-blue-50 to-transparent opacity-30"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
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
                            <Link href="/" >
                            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                                <span className="text-red-600">Hack</span>
                                <span className="text-blue-700">ForNepal</span>
                            </h1>
                            </Link>
                        </div>
                        <div className="relative w-full bg-white md:w-72">
                            <Search className="absolute left-3 bg-white top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search teams or colleges..."
                                className="pl-10 bg-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Teams Section */}
            <section className="relative z-10 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Participating Teams</h2>
                        <p className="text-gray-600">
                            {filteredTeams.length} {filteredTeams.length === 1 ? "team" : "teams"} participating in HACK FOR NEPAL
                        </p>
                    </div>

                    {isLoading ? (
                        <div className="flex h-64 items-center justify-center">
                            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
                        </div>
                    ) : filteredTeams.length === 0 ? (
                        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center shadow-md">
                            <Users className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                            <h3 className="mb-2 text-xl font-semibold text-gray-800">No Teams Found</h3>
                            <p className="text-gray-600">
                                {searchTerm ? "Try a different search term" : "No team data is available at the moment"}
                            </p>
                            {searchTerm && (
                                <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                                    Clear Search
                                </Button>
                            )}
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredTeams.map((team, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                >
                                    
                                    <Card className="h-full overflow-hidden bg-white border-gray-200 shadow-lg transition-shadow hover:shadow-xl">
                                        <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 pb-3 pt-3">
                                            <CardTitle className="text-white">{team.teamName}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-6">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-semibold">{team.projectName}</h3>
                                            </div>
                                            <div className="mb-3">

                                                <span className="inline-block px-2.5 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                                                    {team.themes}
                                                </span>
                                            </div>
                                            <div className="mb-4 flex items-start gap-2">
                                                <School className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">College</h3>
                                                    <p className="text-gray-600">{team.collegeName}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <Users className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">Participants</h3>
                                                    <p className="text-gray-600">{team.LeaderName}</p>
                                                    <p className="text-gray-600">{team.Member1}</p>
                                                    <p className="text-gray-600">{team.Member2}</p>
                                                    <p className="text-gray-600">{team.Member3}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    )}
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
