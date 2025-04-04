import type React from "react"
import "/components/CustomCursor" // <-- This line is required for styling
import CustomCursor from "/components/CustomCursor"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lakshit - UI/UX Designer & Software Developer",
  description: "Portfolio of Lakshit, a UI/UX Designer and Software Developer",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomCursor /> {/* Renders the custom cursor with glitter trail */}
        {children}
      </body>
    </html>
  )
}