import React from 'react';
import ProjectDetails from '../../../components/ProjectDetails';
import Pic6 from '../../../../assets/train1.webp';
import Pic7 from '../../../../assets/train2.webp';
import Pic8 from '../../../../assets/train3.webp';

const SmartRailway = () => {
  return (
    <ProjectDetails
      title="Smart Railway Crossing Safety System"
      description={`At first glance, this innovation from IdeaToProject might look like a regular railway crossing system, but its design and technical features make it stand out as a modern, efficient, and safety-focused solution. The uniqueness lies in its dual sensing technology combined with a fully automated response mechanism, making it more reliable than conventional systems.
This project integrates two different sensing mechanisms:

1.	Ultrasonic Sensor – Measures the train’s distance with high accuracy.
2.	Rail Track Potential Detection System – Detects subtle changes in electrical potential on the metal rails to identify approaching trains.
The combination of these sensors creates a redundant safety layer, ensuring the system remains operational even if one sensor fails. Once the sensors detect an incoming train, the Arduino-based control circuit activates servo motor-driven gates to block the road. At the same time, an LCD display shows real-time train status, distance, and safety alerts.
Key Advantages

•	High Accuracy – Dual sensing minimizes false signals.
•	Fully Automated – Operates without human intervention.
•	Cost-Effective – Built with readily available components, making it suitable for rural or less-developed areas.
•	Easy Maintenance & Upgradability – Arduino platform allows quick software and hardware modifications.
•	Enhanced Safety – Provides instant response to prevent accidents involving vehicles and pedestrians.

This prototype by IdeaToProject is not just a lab experiment—it offers a practical and affordable solution for improving railway crossing safety in real-world conditions. By combining modern technology with a simple yet robust design, it has the potential to make a significant contribution to railway infrastructure safety
`}
      images={[Pic6, Pic7, Pic8]}
    />
  );
};

export default SmartRailway;
