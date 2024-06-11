import React, { useEffect } from "react";
import Header from "./components/Header";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

const ThemedApp: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`App ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ height: "100%" }}
    >
      <Header />
      <div
        id="home"
        className={`App ${
          isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
        style={{height:'90vh', marginTop:'110px'}}
      >
         <div style={{ marginLeft: "100px" }}>
          <h1>Desenvolvido por Édilo Sousa</h1>
          <p>
            Página estática desenvolvida com o objetivo de mostrar a extração de
            dados apartir de um plugin!
          </p>
        </div>
      </div>
      <div
        id="swagger"
        className={`App ${
          isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
        } full-height-section`}
      >
        <div style={{ marginLeft: "100px" }}>
          <h1>Documentação da API de coleta de dados.</h1>
          <p>
            Foi implementado com Swagger para a melhor análise dos endpoints que
            constam na API.
          </p>
        </div>
        <iframe
          src="http://localhost:3000/api-docs"
          style={{ width: "80%", height: "80%", marginLeft:'10%' }}
        />
      </div>
    </div>
  );
};

export default App;
