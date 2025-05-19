import React from 'react';
import styles from './WhyChooseUs.module.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const reasons = [
  {
    icon: <StarBorderIcon sx={{ fontSize: '2.8rem' }} />,
    title: "Uncompromising Quality",
    text: "Our commitment to excellence means we are dedicated to sourcing and supplying products that consistently meet rigorous international quality standards, ensuring superior reliability, durability, and complete customer satisfaction."
  },
  {
    icon: <EmojiObjectsOutlinedIcon sx={{ fontSize: '2.8rem' }} />,
    title: "Innovation Focus",
    text: "We are constantly exploring the forefront of technological advancements, identifying emerging trends and breakthrough products to bring the most innovative and future-proof electronic solutions to our valued partners."
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: '2.8rem' }} />,
    title: "Efficient Global Network",
    text: "Leveraging our robust global supply chain and extensive logistics expertise, we ensure timely, efficient, and cost-effective delivery of products to any destination across the globe, minimizing lead times."
  },
  {
    icon: <PeopleOutlineIcon sx={{ fontSize: '2.8rem' }} />,
    title: "Client-Centric Approach",
    text: "Our business philosophy revolves around prioritizing our clients. We strive to build strong, transparent, and long-term relationships by deeply understanding and proactively catering to their unique needs and objectives."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className={styles.whyChooseUs}>
      <div className="container">
        <h2 className={styles.heading}>Why Partner with Pegasus Trading?</h2>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonItem}>
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonText}>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
