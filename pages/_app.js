import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
  process.env.NODE_ENV === "development" &&
    console.log(metric.name, " ", metric.value);
}
