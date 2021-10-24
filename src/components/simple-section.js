// @ts-nocheck
import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';

import ServiceThumb from 'assets/service-thumb.png';
import shapePattern from 'assets/shape-pattern1.png';

import Smart from 'assets/services/smart.svg';
import Secure from 'assets/services/secure.svg';

const data = {
  subTitle: 'our solution',
  title: 'Is Agromag',
  description: "The Agromag solution aims to facilitate communication between stakeholders, offering users the opportunity to distribute ads and connect with other entities interested in providing various services. Starting from the rental of agricultural equipment and arable land and continuing with the possibility of finding workers, our platform addresses exclusively the agricultural sector, having as its main goal the full exploitation of resources and the improvement of this sector.",
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'Smart Features',
      title: 'Smart Features',
      text:
        'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Secure Contents',
      title: 'Secure Contents',
      text:
        'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
  ],
};

export default function Section({image, title, subTitle, content, reverse}) {
  return (
    <section sx={styles.simpleSection}>
        <Container sx={styles.containerBox}>
            <Box sx={styles.contentBox} className="no-image">
                <TextFeature subTitle={subTitle} title={title} description={content}/>
            </Box>
        </Container>
    </section>
  );
}


const styles = {
  simpleSection: {
    py: [2, null, null, 2, null, 7],
    position: 'relative',
    
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    
    '&.reverse': {
      flexDirection: ['column', null, null, 'row-reverse'],
    },
    pb: [0, null, null, null, null, 7],
    borderBottom: '1px solid',
    borderBottomColor: 'border_color'
  },

  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  
  contentBox: {
    '&.no-image': {
      width: ['100%', null, null, 315, 390, 450, null, '100%'],
    }, 
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
