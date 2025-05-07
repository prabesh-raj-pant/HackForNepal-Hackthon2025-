import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';
export const metadata = {
  title: "HACK FOR NEPAL ",
  description:
    "Join the most innovative hackathon focused on building solutions for Nepal. Collaborate and transform your ideas into impactful projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
          <Analytics />
      </body>
    </html>
  )
}
