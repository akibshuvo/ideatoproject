import React from 'react';
import ProjectDetails from '../../../components/ProjectDetails';
import Pic6 from '../../../../assets/smarthome1.webp';
import Pic7 from '../../../../assets/smarthome2.webp';


const SmartRailway = () => {
  return (
    <ProjectDetails
      title="IoT Based Solar and Grid Energy Monitoring System"
      description={`IdeaToProject has engineered a highly innovative IoT-based Solar and Grid Energy Monitoring System, uniquely demonstrated through a beautifully designed miniature smart home model. This project not only showcases the integration of renewable energy and smart grid technology but also highlights how advanced IoT platforms can transform the way we manage and consume electricity.
At the core of this system lies the Blynk IoT application, which empowers users to remotely monitor their home, office, or industrial power systems from any corner of the world. Through an intuitive mobile interface, users gain access to real-time data of crucial electrical parameters, including:

•	Current
•	Voltage
•	Power Factor
•	Power Consumption
•	Load Status

But the system goes far beyond simple monitoring. It features a smart load management system, enabling users to apply automation rules for different electrical loads. For example, lights, fans, or industrial equipment can be scheduled, triggered by thresholds, or controlled manually—all from the user’s smartphone. This makes the system not only smart but also highly customizable and user-friendly.
A standout feature of this project is the ability to automatically switch between solar and grid power. The system’s switching algorithm can be configured based on user preferences—whether prioritizing solar for maximum sustainability or grid for stability during high-demand periods. This ensures optimal energy efficiency, cost savings, and uninterrupted power supply.
Moreover, the system provides data logging and historical tracking, giving users valuable insights into their energy usage patterns over time. Such insights are particularly useful for reducing wastage, planning energy consumption, and making informed decisions about future energy infrastructure.
In practical applications, this project has the potential to benefit:

•	Homes and Smart Apartments – ensuring uninterrupted energy and cost-effective solar utilization.
•	Businesses and Industries – enabling centralized monitoring and automation for multiple loads.
•	Educational and Research Projects – serving as a real-world demonstration of renewable energy integration with IoT.

With its combination of aesthetic design, cutting-edge IoT technology, and practical real-world applications, the IoT-based Solar and Grid Energy Monitoring System stands as a perfect example of how technology can drive sustainability, efficiency, and smart living.
`}
      images={[Pic6, Pic7]}
    />
  );
};

export default SmartRailway;