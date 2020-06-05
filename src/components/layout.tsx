import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  Box,
  Text,
  Heading,
  Button,
  useColorMode,
  ThemeProvider,
  theme,
  CSSReset,
  ColorModeProvider,
} from '@chakra-ui/core';
import Header from './header-main';

// TODO: Add more components

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider
        components={{
          h1: (props) => (
            <Heading as="h1" size="xl" my="1em" {...props}></Heading>
          ),
          h2: (props) => (
            <Heading as="h2" size="lg" my="1em" {...props}></Heading>
          ),
          h3: (props) => (
            <Heading as="h3" size="md" my="1em" {...props}></Heading>
          ),
          p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
          ul: (props) => <Box as="ul" pt="8px" pl="16px" {...props} />,
          ol: (props) => <Box as="ol" pt="8px" pl="16px" {...props} />,
          li: (props) => <Box as="li" pb="4px" {...props} />,
        }}
      >
        <ColorModeProvider>
          <CSSReset />
          <Box overflowX="hidden" minHeight="100vh" margin="0 auto">
            <Header />
            <Box minHeight="90vh">{children}</Box>
          </Box>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;
