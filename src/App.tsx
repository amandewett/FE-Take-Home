import "./App.css";
import FruitJarComponent from "./components/fruits/jar/FruitJarComponent";
import FruitListContainerComponent from "./components/fruits/list/FruitListContainerComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FruitJarContextProvider from "./store/providers/FruitJarContextProvider";
import AppPieChart from "./components/fruits/jar/AppPieChart";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FruitJarContextProvider>
        <section className="fruits-container">
          <FruitListContainerComponent />
          <FruitJarComponent />
        </section>
        <AppPieChart />
      </FruitJarContextProvider>
    </QueryClientProvider>
  );
}

export default App;
