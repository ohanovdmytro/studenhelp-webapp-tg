import { useState, useEffect } from "react";
import "./App.css";
import {
  ChakraProvider,
  useDisclosure,
  Container,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";
import { Theme } from "./components/Theme";
import { themes } from "../src/utils/themes.js";

const WebApp = window.Telegram.WebApp;

function App() {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        // `http://localhost:3000/send`,
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

      // const webAppResponse = {
      //   name: await WebApp.initDataUnsafe?.user?.username,
      //   subjects: selectedSubjects,
      // };

      await WebApp.sendData({
        username: WebApp.initDataUnsafe?.user?.username,
        subjects: selectedSubjects,
      });

      console.log("Data sent to Google Sheets and Telegram successfully");
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

  const handleExitWebApp = (e) => {
    e.preventDefault();
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

            <Modal
              blockScrollOnMount={true}
              p={6}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight="bold" mb="1rem">
                    Фільтри встановлено!
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleExitWebApp}>
                    Закрити
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Button type="submit" onClick={onOpen} mt={10} colorScheme="green">
              Зберегти
            </Button>
          </form>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
