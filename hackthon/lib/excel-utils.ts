import { read, utils } from "xlsx"

export interface TeamData {
  teamName: string
  collegeName: string
  participantNames: string
}

export async function loadExcelData(filePath: string): Promise<TeamData[]> {
  try {
    const response = await fetch(filePath)
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
      participantNames: row["Participant Names"] || "",
    }))

    return teamData
  } catch (error) {
    console.error("Error loading Excel data:", error)
    return []
  }
}
