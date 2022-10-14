/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';

import img1 from 'assets/images/4.jpeg';
import img2 from 'assets/images/3.jpeg';
import img3 from 'assets/images/1.jpeg';
import img4 from 'assets/images/2.jpeg';

const services = [
  {
    title: 'All Online Work/Services',
    url: img1,
  },
  {
    title: 'Website Developement/Web Designing',
    url: img2,
  },
  {
    title: 'App Developement/software Development',
    url: img3,
  },
  {
    title: 'Digital Marketing',
    url: img4
  }
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Didn’t find what you were looking for?"
        />
        <Box sx={styles.grid}>
         {services.map((service, i) => (
          <Service key={i} service={service} />
         ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
