import { useState, useEffect } from "react";
import "./App.css";
import { ChakraProvider, Container, Box, Button } from "@chakra-ui/react";
import { Theme } from "./components/Theme";
import { themes } from "../src/utils/themes.js";

const WebApp = window.Telegram.WebApp;

function App() {
  const endpointUrl = import.meta.ENDPOINT_URL;
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    WebApp.ready();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const name = WebApp.initDataUnsafe?.user?.first_name || "";
      const requestBody = {
        name: name,
        subject: selectedSubjects,
      };

      const response = await fetch(
        `https://square-zinc-farmer.glitch.me/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send data to Google Sheets");
      }

      console.log("Data sent to Google Sheets successfully");
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
    }
  };

  const handleCheckboxChange = (subject) => {
    setSelectedSubjects((prevSelectedSubjects) => {
      if (prevSelectedSubjects.includes(subject)) {
        return prevSelectedSubjects.filter((item) => item !== subject);
      } else {
        return [...prevSelectedSubjects, subject];
      }
    });
  };

  const handleSubjectsSubmit = () => {
    WebApp.close();
  };

  return (
    <ChakraProvider>
      <Container>
        <Box mb={12}>Виконавець: {WebApp.initDataUnsafe?.user?.first_name}</Box>
        <Box>
          <form onSubmit={handleSubmit}>
            {themes.map((theme) => (
              <Theme
                key={theme.id}
                name={theme.name}
                subjects={theme.subjects}
                onCheckboxChange={handleCheckboxChange}
                selectedSubjects={selectedSubjects}
              />
            ))}

            <Button
              type="submit"
              onClick={handleSubjectsSubmit}
              mt={10}
              colorScheme="green"
            >
              Зберегти
            </Button>
          </form>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
