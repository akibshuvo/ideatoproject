"use client";

import React, { useEffect, useRef } from "react";
import ProjectDetails from "../../../components/ProjectDetails";
import Pic6 from "../../../../assets/diyhouse1.webp";
import Pic7 from "../../../../assets/diyhouse2.webp";

const SmartRailway = () => {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Smart Home with Smart Control and Smart Monitoring System",
        content_category: "Smart Home & IoT Project",
        content_type: "project",
      });
    }

    firedRef.current = true;
  }, []);
  return (
    <ProjectDetails
      title="Smart Home with Smart Control and Smart Monitoring System"
      description={`IdeaToProject introduces an innovative Smart Home System featuring Smart Control and Smart Monitoring, beautifully demonstrated through a three-story miniature bungalow model. This project leverages the Blynk IoT application to create a complete automation and monitoring ecosystem for modern living.

        The system has two main components:

•	Smart Control – All essential household appliances such as lights, fans, doors, windows, water tanks, garden pumps, and air conditioners can be controlled remotely via smartphone. This provides convenience, energy efficiency, and enhanced lifestyle automation.
•	Smart Monitoring – The system continuously monitors critical parameters including temperature, humidity, water level in tanks, solar intensity, security alerts, and fire alerts. Additionally, all monitored data is stored in the cloud for up to one month, allowing users to access historical insights anytime, anywhere.

For added security, the project includes sensor-based and password-protected door unlocking, ensuring both safety and modern smart access. Automation features are embedded across multiple functions, giving users complete control and peace of mind.

This Smart Home with Smart Control and Monitoring System represents a step toward future-ready, intelligent living spaces that combine automation, security, and sustainability.
`}
      images={[Pic6, Pic7]}
    />
  );
};

export default SmartRailway;
