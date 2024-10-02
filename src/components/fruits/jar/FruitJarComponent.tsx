import JarHeader from "./JarHeader";
import "./FruitJarComponent.css";
import JarFruitListComponent from "./JarFruitListComponent";

const FruitJarComponent = () => {
  return (
    <section className="jar-container">
      <JarHeader />
      <JarFruitListComponent />
    </section>
  );
};

export default FruitJarComponent;
