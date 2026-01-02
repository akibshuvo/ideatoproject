"use client";

import React, { useEffect, useRef } from "react";
import ProjectDetails from "../../../components/ProjectDetails";
import Pic6 from "../../../../assets/robo1.webp";
import Pic7 from "../../../../assets/robo2.webp";
import Pic8 from "../../../../assets/robo3.webp";

const SmartRailway = () => {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Hand Gesture Controlled 5 DOF Robotic Arm",
        content_category: "Robotics Project",
        content_type: "project",
      });
    }

    firedRef.current = true;
  }, []);

  return (
    <ProjectDetails
      title="Hand Gesture Controlled 5 DOF Robotic Arm"
      description={`IdeaToProject has developed an advanced 5 DOF Robotic Arm fully controlled through hand gestures, offering a natural and intuitive way of interaction. The system is designed to mimic human arm movements with remarkable precision, bridging the gap between human gestures and robotic actions.
The control mechanism is built around a special glove equipped with a gyro sensor, which detects the user’s hand orientation. When the glove-worn hand moves left or right, the corresponding servo motor of the robotic arm moves in the same direction. Two touch sensors are integrated to easily switch between servo motors, allowing the user to decide which joint or section of the arm should move.

A dedicated touch sensor for the gripper enables object manipulation—when activated, the robotic arm seamlessly switches to gripping mode, functioning just like a human hand reaching out to grab an object.

Key Features:

• 5 Degrees of Freedom (DOF) for versatile movement and functionality.
• Gesture-controlled operation through a wearable glove with a gyro sensor.
• Touch sensor switching for selecting different arm sections.
• Realistic gripping mechanism that simulates human hand movement.

This project is not only a demonstration of cutting-edge gesture control technology but also carries immense potential for industrial automation, medical assistance, and remote-controlled operations. With its seamless integration of hardware and intuitive design, it stands as a powerful example of future-ready robotics.
`}
      images={[Pic6, Pic7, Pic8]}
    />
  );
};

export default SmartRailway;
