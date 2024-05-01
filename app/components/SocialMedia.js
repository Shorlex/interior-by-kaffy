"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const SocialMedia = () => {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div style={{ display: "flex", justifyContent: "center", marginTop: '50px' }}>
        <InstagramEmbed
          url="https://www.instagram.com/interiorsbykaffy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          width={328} style={{width: '100%'}}
        />
      </div>
    </section>
  );
};

export default SocialMedia;
