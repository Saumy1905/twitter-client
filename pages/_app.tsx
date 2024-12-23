import "@/styles/globals.css";
import { Inter, Quicksand } from "next/font/google";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from '@react-oauth/google'

const inter = Inter({ subsets: ["latin"] });
const quickSand = Quicksand({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="inter.className">
      {/* <GoogleOAuthProvider> */}
        <Component {...pageProps} />
      {/* </GoogleOAuthProvider> */}
    </div>
  );
}
