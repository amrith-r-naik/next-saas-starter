import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection
            imageUrl="/basicSectionIllustration1.svg"
            title="Advanced Medical Imaging Analysis"
            overTitle="Revolutionizing Healthcare Imaging"
          >
            <p>
              Experience precise diagnosis with our platform's cutting-edge technology. Analyze diverse medical images, from eye CT scans
              and chest X-rays to skin images and brain MRI scans. Detect{' '}
              <strong>diabetic retinopathy, pneumonia, skin diseases, and brain tumors </strong>
              accurately. Empower your healthcare practice with our sophisticated algorithms. Explore the future of medical imaging analysis
              today.{' '}
            </p>
          </BasicSection>
          <BasicSection
            imageUrl="/basicSectionIllustration2.svg"
            title="Streamlined Doctor-Patient Interaction"
            overTitle="Empowering Healthcare Connectivity"
            reversed
          >
            <p>
              Our app features a comprehensive <strong>dashboard</strong> catering to both <strong>doctors</strong> and{' '}
              <strong>patients</strong>. Patients can access their medical history, treatment plans, and securely communicate with their
              healthcare providers. Doctors can view patient information, medical images, and collaborate with other professionals within
              our network, facilitating seamless and efficient healthcare delivery.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/basicSectionIllustration3.svg" title="Alchbot: Your 24/7 Health Companion" overTitle="Revolutionizing Healthcare Accessibility">
            <p>
            Our platform integrates an intelligent conversational <strong>chatbot</strong>, offering round-the-clock access to vital health information and initial assessments for patients. Leveraging cutting-edge AI technology, our chatbot ensures seamless interaction and timely assistance, enhancing the accessibility and efficiency of healthcare services.{' '}
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
          <Features />
          {/* <Testimonials />
          <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
