/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import SlickArrow from 'components/slick-arrow';

const data = [
  {
    id: 1,
    title: 'Basic',
    subtitle: 'For the startup team who work with new come data stack',
    price: 10000,
    isRecommended: false,
    buttonText: 'Start today',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Theme Based Static Website',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Dynamic Contact Form.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `dynamic Query Form`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Google Map`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `SSL Integration`,
      },{
        id: 6,
        isAvailable: true,
        title: `Highly secured Script`,
      },{
        id: 8,
        isAvailable: true,
        title: `Lifetime Support`,
      },{
        id: 9,
        isAvailable: true,
        title: `Lifetime Warranty`,
      },
    ],
  },
  {
    id: 2,
    title: 'Business',
    subtitle: 'For the organization who work with new come data stack',
    price: 15000,
    isRecommended: true,
    buttonText: 'Start today',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Static Website',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Responsive Desgin.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `SEO Friendly URL`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Dyanmic Contact From`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Image Gallery`,
      },
      {
        id: 6,
        isAvailable: true,
        title: 'Animated Banner(jquery)',
      },
      {
        id: 7,
        isAvailable: true,
        title: 'Live Chat Integration',
      },
      {
        id: 8,
        isAvailable: true,
        title: 'Google Map',
      },
      {
        id: 9,
        isAvailable: true,
        title: 'Mobile Friendly'
      },
    ],
  },
  {
    id: 3,
    title: 'Ultimate Pack',
    subtitle: 'For the ultimate company team who work with new come data stack',
    price: 20000,
    isRecommended: false,
    buttonText: 'Start today',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Static Website',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Responsive Desgin.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `SEO Friendly URL`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Dyanmic Contact From`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Image Gallery`,
      },
      {
        id: 6,
        isAvailable: true,
        title: 'Animated Banner(jquery)',
      },
      {
        id: 7,
        isAvailable: true,
        title: 'Dynamic Contact Form',
      },
      {
        id: 8,
        isAvailable: true,
        title: 'Dynamic Query Form',
      },
      {
        id: 9,
        isAvailable: true,
        title: 'Dynamic Product Page',
      },
      {
        id: 10,
        isAvailable: true,
        title: 'Dynamic Service Page',
      },
    ],
  },
];

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Pricing = () => {
  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Deal for your business"
          title="Meet our pricing plan that suit you"
        />
        <Slider sx={styles.grid} {...settings}>
          {data?.map((price, index) => (
            <PriceTable price={price} key={index} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6],
    pb: [12, null, null, 15, 17],
  },
  container: {
    pl: 0,
    pr: 0,
  },
  heading: {
    mb: [7, null, null, null, 14, null, 18],
    px: [6, null, null, 0],
    h3: {
      fontSize: [3, null, null, 8],
    },
  },
  grid: {
    gap: [null, null, null, null, 6],
    display: [null, null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, 'repeat(3, 1fr)'],
    alignItems: [null, null, null, null, 'flex-end'],
    '.slick-slide > div': {
      p: ['35px', '40px', null, '35px 23px 23px', 0],
    },
    '.slick-arrow': {
      bottom: -5,
    },
  },
};
