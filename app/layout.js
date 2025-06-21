import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "@/components/theme-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abhishek Anand | Portfolio",
  description: "Official portfolio website of Abhishek Anand",
    generator: 'Next.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <ThemeScript />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
