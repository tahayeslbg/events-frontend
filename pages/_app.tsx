import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "../src/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const isLoginRegisterPath =
		router.pathname.includes("kayit-ol") ||
		router.pathname.includes("giris-yap");

	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				{!isLoginRegisterPath ? (
					<Layout>
						<Component {...pageProps} />
					</Layout>
				) : (
					<Component {...pageProps} />
				)}
				<ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
