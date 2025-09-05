import React from 'react';
import ProjectDetails from '../../../components/ProjectDetails';
import Pic6 from '../../../../assets/pcb1.webp';
import Pic7 from '../../../../assets/pcb2.webp';
import Pic8 from '../../../../assets/pcb3.webp';

const SmartRailway = () => {
  return (
    <ProjectDetails
      title="PCB Design and Assembly by IdeaToProject"
      description={`At IdeaToProject, we specialize in professional PCB design and assembly services, showcasing a wide range of customized printed circuit boards from single-layer to multi-layer designs. Our expertise covers not only schematic and layout design but also the complete assembly process, ensuring a smooth transition from concept to a fully functional PCB.

        What makes our service unique is the flexibility to personalize PCB designs with custom branding, such as a company’s name, logo, or other specific details, directly integrated into the board layout. This allows businesses, students, and hobbyists to own a truly customized circuit board tailored to their exact requirements.

Key Highlights:

•	Single-layer to multi-layer PCB design for diverse applications.
•	Professional assembly service with precision and reliability.
•	Custom branding option to embed company names or logos into PCB layouts.
•	End-to-end support from design to assembly and testing.

Whether you need PCBs for academic projects, industrial prototypes, or commercial production, IdeaToProject ensures top-notch quality and innovation in every design. With our proven expertise, we bring your electronic ideas to life, making them functional, professional, and production-ready
`}
      images={[Pic6, Pic7, Pic8]}
    />
  );
};

export default SmartRailway;
