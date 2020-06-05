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
        <CourseCard />
      </Grid>
    </Box>
  );
};

export default CourseGrid;
