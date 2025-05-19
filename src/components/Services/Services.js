import React from 'react';
import styles from './Services.module.css';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HandymanIcon from '@mui/icons-material/Handyman';
import RouterIcon from '@mui/icons-material/Router';
import WatchIcon from '@mui/icons-material/Watch';

const servicesData = [
  {
    icon: <HeadsetMicIcon sx={{ fontSize: '3.5rem' }} />,
    title: 'Wireless Audio Solutions',
    description: 'Immerse yourself in crystal-clear sound with our curated selection of cutting-edge wireless headsets, True Wireless Stereo (TWS) earbuds, and high-fidelity gaming audio gear, designed for superior performance and comfort.'
  },
  {
    icon: <BatteryChargingFullIcon sx={{ fontSize: '3.5rem' }} />,
    title: 'Portable Power Banks',
    description: 'Stay charged on the go with our diverse range of portable power solutions, including Magsafe compatible chargers and high-capacity power banks, ensuring your devices never run out of power at critical moments.'
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: '3.5rem' }} />,
    title: 'Mobile Accessories',
    description: 'Enhance your mobile experience with our collection of innovative chargers, durable cables, protective cases, and other essential accessories for all major smartphones and tablets.'
  },
  {
    icon: <HandymanIcon sx={{ fontSize: '3.5rem' }} />,
    title: 'Custom Sourcing & OEM',
    description: 'Leverage our expertise for tailored sourcing services designed to meet your specific product requirements, alongside comprehensive OEM/ODM project management from concept to delivery.'
  },
  {
    icon: <RouterIcon sx={{ fontSize: '3.5rem' }} />,
    title: 'Smart Home Devices',
    description: 'Transform your living spaces with the latest in smart home automation. We provide access to intelligent security systems, energy-efficient lighting, voice-controlled assistants, and integrated entertainment solutions.'
  },
  {
    icon: <WatchIcon sx={{ fontSize: '3.5rem' }} />,
    title: 'Wearable Technology',
    description: 'Discover the future of personal tech with our range of smartwatches, advanced fitness trackers, and other innovative wearable devices designed to seamlessly integrate into your lifestyle and enhance daily activities.'
  }
];

const Services = () => {
  return (
    <section id="services" className={`${styles.services} section-dark`}>
      <div className="container">
        <h2>Our Core Focus Areas</h2>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
