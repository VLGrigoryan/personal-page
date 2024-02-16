import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./Home.module.css";
import PortfolioPage from "../PortfolioPage/PortfolioPage";

function HomePage({ data }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={styles.content}>
        <PortfolioPage data={data} />
      </main>
    </DndProvider>
  );
}

export default HomePage;
