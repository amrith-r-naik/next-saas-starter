import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.png',
    title: 'Chest X-ray Diagnosis',
    description:
    'Leveraging AI, the tool detects abnormalities in x-ray scans, aiding doctors in precise diagnoses and effective treatment planning.'    
  },
  {
    imageUrl: '/grid-icons/asset-2.png',
    title: 'Brain MRI Scan Diagnosis',
    description:
    'Harnessing AI technology, the tool identifies irregularities in MRI scans, empowering physicians with accurate diagnostic insights and personalized treatment approaches.'
  },
  {
    imageUrl: '/grid-icons/asset-3.png',
    title: 'Skin Image Diagnosis.',
    description:
      'Utilizing cutting-edge AI algorithms, the tool analyzes skin images to detect abnormalities, aiding dermatologists in accurate diagnoses and personalized treatment recommendations.',
  },
  {
    imageUrl: '/grid-icons/asset-4.png',
    title: 'Eye CT Scan Diagnosis',
    description:
      'Employing advanced AI, the tool identifies diabetic-related anomalies in eye CT scans, furnishing clinicians with precise diagnostic information for tailored treatment strategies.',
  },
  {
    imageUrl: '/basicSectionIllustration2.svg',
    title: 'Seemless Doctor-Patient Connectivity',
    description:
      'Through seamless integration, patients can book appointments with doctors effortlessly, leveraging advanced technology for efficient scheduling and enhancing the healthcare experience.',
  },
  {
    imageUrl: '/basicSectionIllustration3.svg',
    title: '24/7 Healthcare Chatbot',
    description:
      'The 24/7 medical chatbot provides continuous support to users, offering assistance and guidance around the clock for their healthcare inquiries and concerns.',
  }
];

export default function Features() {
  return (
    <Container id='features'>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
