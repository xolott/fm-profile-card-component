import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Layout from "./components/Layout";
import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Card
          user={{
            name: "Victor Crest",
            age: 26,
            location: "London",
            stats: [
              {
                label: "Followers",
                value: "80K",
              },

              {
                label: "Likes",
                value: "803K",
              },
              {
                label: "Photos",
                value: "1.4K",
              },
            ],
          }}
        >
          <div> </div>
        </Card>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
