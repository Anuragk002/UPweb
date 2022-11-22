import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";

const Heading = styled.div`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-top : 24px;
  margin-bottom: 24px;
  color: #008080;
`;
const SubHeading = styled.div`
  font-weight: bold;
  font-size: 35px;
  text-align: left;
  margin-top : 24px;
  color:green;
  font-variant-caps: all-petite-caps;
`;
const Container = styled.div`
  margin: 50px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 50px;
`;
const Body = styled.div`
  font-size: 20px;
  line-height: 35px;
`;

function GeneralInfo(props) {
    return (
        <Container>
            <Heading>Why Choose UNITPHARMA</Heading>
            <Body>
                Since the beginning, we had spread our wings to deliver reliable medicines of all kinds, be it Sleeping Tablets Online, Anxiety medication , erectile dysfunction pills, painkillers medication, and generic medicines. We aim to improve sleep hygiene, sexual life, pleasurable life, ensuring you make the most of improved wellness. <br/><br/>

                Efforts have been put in to provide unmatched comfort and convenience to all our international customers. Here at pharma universal, we provide high-quality, safe, effective, and strong sleeping pills, erectile dysfunction, anti-anxiety medications, and pain relief medications at reasonable prices that gradually contribute to enhancing your overall well-being simultaneously. All medicines have been designed to transform your debilitating health into improved health.<br/><br/>

                There have been many surveys that have clarified, almost 40% population of the world feel difficulty during sleep in their daily routines. Sleep is unavoidable and an important aspect of an individual’s life that prepares the body to sail through the tasks physically as well as mentally. Proper sleep is a sign of healthy life and here we emphasize overall health not just sleep. Just like the way inadequate sleep fails to allow the body function properly, in the same way, lack of sexual life due to erectile problems leads to the end of personal relationships and loss of potency.<br/><br/>

                Nowadays deterioration in health is common and every third person can be seen grappling with some sort of health problem. People are suffering from sleeping disorders like insomnia, anxiety, obstructive sleep apnea, erectile dysfunction, and unbearable pain situations. Such disorders affect your personality and come in the way of people’s health and fitness in critical ways. Pharma universal considers health above all and takes all possible precautionary measures at the time of manufacturing medications. We prioritize health and hand over the benefits of quality medication to our esteemed customers in the form of Pain medication USA, Erectile Dysfunction pills USA, Sleeping Pills USA and Anxiety medication USA.<br/><br/>

                As a trusted and reputed online pharmacy, we match the highest standards, offering our customers all kinds of sleeping pills, pain relief medications, and anxiety medication at reasonable prices.<br/><br/>

                <SubHeading>Pharma Universal Your Trusted Online Pharmacy</SubHeading><br/>
                Who doesn’t trap in the misery of bad health conditions, everyone does. So far as your health is concerned, pharma universal takes the accountability to give you enhanced health and brings all the happiness, ensuring to bring back your good health. However, it is up to you to decide who should be entrusted the responsibility to take care of your body. Not just the physical pharmacy, today online pharmacies are brimming with fake people who claim to treat your health and even take away the least possibilities of treatment you hope for.
            </Body>

        </Container>
    );
}

export default GeneralInfo;