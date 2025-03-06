import type { Metadata } from "next";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
	title: "Memory Game",
	description: "Memory Game",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body>
				{children}
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					transition={Bounce}
					limit={3}
				/>
			</body>
		</html>
	);
}
