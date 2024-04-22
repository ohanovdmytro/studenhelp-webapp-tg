import { Box, Checkbox, Stack, Heading } from "@chakra-ui/react";
import React from "react";

export const Theme = ({
  name,
  subjects,
  onCheckboxChange,
  selectedCheckboxes,
}) => {
  return (
    <Box>
      <Heading as="h4" size="md">
        {name}
      </Heading>
      <Stack spacing={3} mt={3} mb={6} align="flex-start">
        {subjects.map((label, index) => (
          <Checkbox
            key={index}
            colorScheme="green"
            fontSize="xs"
            textAlign="left"
            isChecked={selectedCheckboxes.includes(label)}
            onChange={() => onCheckboxChange(label)}
          >
            {label}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};
