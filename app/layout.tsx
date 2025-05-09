// app/layout.tsx
import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { KindeWrapper } from "@/components/provider/kindewrapped";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftAid - Campus Emergency Response System",
  description:
    "A web-based prompt response system for medical emergencies on campus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <KindeWrapper> {/* ✅ Now client-only */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </KindeWrapper>
      </body>
    </html>
  );
}




















// import type React from "react"
// import "./globals.css"
// import { Inter } from "next/font/google"
// import type { Metadata } from "next"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"
// import  KindeProvider  from "@kinde-oss/kinde-auth-nextjs/server"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "MedAlert - Campus Emergency Response System",
//   description: "A web-based prompt response system for medical emergencies on campus",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     // <KindeProvider>
//       <html lang="en" suppressHydrationWarning>
//         <body className={inter.className}>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             {children}
//             <Toaster />
//           </ThemeProvider>
//         </body>
//       </html>
//     // </KindeProvider>
//   )
// }
