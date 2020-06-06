import React from 'react';
import { Box, Heading, Grid } from '@chakra-ui/core';
import CourseCard from '../components/course-card';

const CourseGrid: React.FC = () => {
  return (
    <Box marginTop={4}>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gap={4}
      >
        <CourseCard
          courseName="Teleworking Technology & Tools"
          courseImage="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem tempora ducimus deserunt porro aliquid nulla perferendis ab facere non?"
        />
        <CourseCard
          courseName="Digital Literacy Concepts"
          courseImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          courseDescription="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum optio laboriosam dolorem, iure deserunt molestias consequuntur nam deleniti ab."
        />
        <CourseCard
          courseName="Introduction to Design Thinking"
          courseImage="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          courseDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iure dolore voluptas laborum exercitationem debitis ipsa deleniti porro amet voluptate?"
        />
      </Grid>
    </Box>
  );
};

export default CourseGrid;
