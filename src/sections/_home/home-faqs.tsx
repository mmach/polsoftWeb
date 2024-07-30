import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { useResponsive } from 'src/hooks/use-responsive';

import Pattern01 from 'src/assets/illustrations/pattern/pattern-01';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CONTENTS = [
  {
    question: "Is AppZone free for everyone?",
    answer: "Yes, AppZone offers a free tier that allows users to access basic features. For more advanced tools and capabilities, users can upgrade to one of our premium subscription plans.",
  },
  {
    question: "What programming languages does AppZone support?",
    answer: "AppZone supports multiple programming languages including Python, TypeScript, Java, and more. This allows developers to work in their preferred coding language.",
  },
  {
    question: "Can I use AppZone without any coding experience?",
    answer: "Absolutely! AppZone is designed to be user-friendly and intuitive, allowing even those with no coding experience to create functional applications using our drag-and-drop interface and pre-built templates.",
  },
  {
    question: "What is included in the AppZone product packages?",
    answer: "Each AppZone package includes access to our app builder, a library of customizable templates, AI code generation, real-time feedback, integrated development environment (IDE), and automated deployment tools.",
  },
  {
    question: "How can I upgrade my AppZone subscription plan?",
    answer: "To upgrade your subscription plan, log in to your AppZone account, go to the 'Billing' section, and select 'Upgrade Plan'. Follow the prompts to choose and pay for your desired plan.",
  },
  {
    question: "Are design assets (Figma, Sketch, Adobe XD) included with AppZone?",
    answer: "Yes, AppZone includes a variety of design assets compatible with Figma, Sketch, and Adobe XD, which you can use to customize your app's design and user interface.",
  },
  {
    question: "Does AppZone support TypeScript for app development?",
    answer: "Yes, AppZone fully supports TypeScript, enabling developers to write more robust and maintainable code for their applications.",
  },
  {
    question: "Can I use AppZone to build commercial projects like a SaaS?",
    answer: "Yes, AppZone is ideal for building commercial projects, including SaaS applications. Our platform provides the necessary tools and features to develop, deploy, and manage your commercial apps effectively.",
  },
  {
    question: "How can I request support from AppZone?",
    answer: "For support, you can visit the 'Support' section on our website, where you can submit a ticket, chat with a support representative, or access our knowledge base for self-help resources.",
  },
  {
    question: "Does AppZone provide analytics and user tracking features?",
    answer: "Yes, AppZone offers built-in analytics and user tracking features that allow you to monitor your app's performance, user engagement, and other key metrics.",
  },
  {
    question: "Can I integrate third-party services with AppZone?",
    answer: "Yes, AppZone allows you to integrate various third-party services such as payment gateways, CRM systems, and marketing tools to enhance your app's functionality and user experience.",
  },
  {
    question: "How can I publish my app built with AppZone?",
    answer: "Once your app is ready, you can publish it directly to the App Store and Google Play through AppZone’s platform. We provide detailed guides and support to assist you through the publishing process.",
  },
  {
    question: "Is there customer support available for AppZone users?",
    answer: "Yes, we offer comprehensive customer support through various channels, including chat, email, and our support ticket system. Our team is ready to help you with any issues or questions you may have.",
  },
  {
    question: "Can I collaborate with my team on AppZone?",
    answer: "Absolutely! AppZone supports team collaboration, allowing multiple users to work on the same project simultaneously. You can easily manage roles and permissions within your team.",
  },
  {
    question: "What platforms does AppZone support for app deployment?",
    answer: "AppZone supports deployment on both iOS and Android platforms. You can build, test, and publish your app to the App Store and Google Play directly from our platform.",
  },
];

// ----------------------------------------------------------------------

export default function HomeFAQs() {
  const smUp = useResponsive('up', 'sm');

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Frequently Asked Questions
            </Typography>
          </m.div>

          <Box
            sx={{
              my: { xs: 8, md: 10 },
            }}
          >
            {CONTENTS.map((faq) => (
              <m.div key={faq.question} variants={varFade().in}>
                <Accordion
                  expanded={expanded === faq.question}
                  onChange={handleChangeExpanded(faq.question)}
                >
                  <AccordionSummary
                    sx={{
                      minHeight: 64,
                      borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
                      [`& .${accordionSummaryClasses.content}`]: {
                        p: 0,
                        m: 0,
                      },
                      [`&.${accordionSummaryClasses.expanded}`]: {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      {faq.question}
                    </Typography>

                    <Iconify
                      width={24}
                      icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                    />
                  </AccordionSummary>

                  <AccordionDetails>{faq.answer}</AccordionDetails>
                </Accordion>
              </m.div>
            ))}
          </Box>

          <Box
            sx={{
              borderWidth: 1,
              borderRadius: 3,
              textAlign: 'center',
              borderStyle: 'dashed',
              borderColor: (theme) => alpha(theme.palette.grey[500], 0.32),
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 8 },
            }}
          >
            <m.div variants={varFade().inUp}>
              <Typography variant="h3">Still Have Questions?</Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Please describe your case to receive the most accurate advice.
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Button
                size="large"
                color="inherit"
                variant="contained"
                href="mailto:support@minimals.cc?subject=[Feedback] from Customer"
              >
                Contact us
              </Button>
            </m.div>
          </Box>
        </Grid>
      </Grid>

      {smUp && (
        <Pattern01
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            maxWidth: 600,
            maxHeight: 600,
          }}
        />
      )}
    </Container>
  );
}
