import React from 'react';
import Header from './Header';
import {
  Box,
  Text,
  Button,
  useColorMode,
  ThemeProvider,
  theme,
  CSSReset,
  ColorModeProvider,
} from '@chakra-ui/core';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Box overflowX="hidden" minHeight="100vh">
          <Header />
          <Box minHeight="90vh">{children}</Box>
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default Layout;
