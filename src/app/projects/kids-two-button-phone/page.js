"use client";

import React, { useEffect, useRef } from "react";
import ProjectDetails from "../../../components/ProjectDetails";
import Pic6 from "../../../../assets/clock1.webp";
import Pic7 from "../../../../assets/clock2.webp";
import Pic8 from "../../../../assets/clock3.webp";

const SmartRailway = () => {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Two-Button Mobile Phone for Kids (DIY Project)",
        content_category: "DIY Electronics Project",
        content_type: "project",
      });
    }

    firedRef.current = true;
  }, []);
  return (
    <ProjectDetails
      title="Two-Button Mobile Phone for Kids (DIY Project)"
      description={`IdeaToProject developed a unique DIY Two-Button Mobile Phone designed especially for children. Unlike conventional phones, this simplified device allows users to make calls to saved contacts using only two push buttons, ensuring ease of use and accessibility.
        
The mobile phone features a built-in mini phonebook that can store up to two numbers, managed through Arduino EEPROM memory for reliable storage. One of its standout functions is Automatic Call Receiving — whenever a call comes from a predefined number, the phone answers automatically, making it extremely convenient for kids.

Additional highlights include:

•	Crystal-clear sound quality for smooth conversations.
•	An integrated Real-Time Clock (RTC) that displays the exact time on the home screen.
•	A wearable watch-style design, combining the practicality of a wristwatch with the functionality of a mobile phone.

This project demonstrates how minimalist design and smart engineering can create a child-friendly communication device that is both safe and practical.
`}
      images={[Pic6, Pic7, Pic8]}
    />
  );
};

export default SmartRailway;
