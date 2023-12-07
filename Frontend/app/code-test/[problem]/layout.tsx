export const metadata = {
    title: "Coding Test",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {/* <Navbar /> */}
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
