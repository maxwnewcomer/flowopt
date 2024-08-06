import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "@fontsource-variable/workbench/full.css";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      {/* <RSPCProvider> */}
      <body className="bg-base-1 text-base-12 font-sans">
        {/* <ReactQueryDevtools /> */}
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
      {/* </RSPCProvider> */}
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
