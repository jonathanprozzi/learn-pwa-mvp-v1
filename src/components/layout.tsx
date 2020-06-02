import React from "react";
import Header from "./Header";
import { Box, Flex } from "@chakra-ui/core";

const Layout: React.FC = ({ children }) => {
  return (
    <Box overflowX="hidden" minHeight="100vh">
      <Header />
      <Box minHeight="90vh">{children}</Box>
    </Box>
  );
};

export default Layout;
