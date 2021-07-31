import GlobalStyles from "./../components/GlobalStyles";
import NextProgress from "next-progress";

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <NextProgress color="black" />
    <Component {...pageProps} />
  </div>
);

export default App;
