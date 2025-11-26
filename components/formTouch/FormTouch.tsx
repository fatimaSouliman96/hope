"use client";

import { useState } from "react";
import Image from "next/image";
import "./formTouch.css";

export default function FormTouch() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.get("name") as string,
        email: form.get("email") as string,
        phone: form.get("phone") as string,
        message: form.get("message") as string,
      }),
    });

    setLoading(false);

    // ✔️ alert حسب حالة الإرسال
    if (res.ok) {
      alert("Message sent successfully!");

      // ✔️ تفريغ الحقول بعد الإرسال
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-form">
      <div className="header-contact">
        <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
        <h3 className="form-title">Send Us a Message</h3>
      </div>

      <div className="line"></div>

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
          <label>Your Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
          <label>Your Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            name="phone"
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
          <label>Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            name="message"
            className="form-control"
            placeholder="Your Message"
            required
          ></textarea>
          <label>Your Message</label>
        </div>

        <button type="submit" className="send-btn">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

