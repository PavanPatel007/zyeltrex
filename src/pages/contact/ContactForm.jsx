"use client";
import { siteInfo } from "@/config/siteConfig";
import React from "react";
import { gsap } from "gsap";
import { useForm } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire("Success!", "Message sent successfully!", "success");
        reset();
      } else {
        const result = await response.json();
        Swal.fire("Error", result.message || "Something went wrong!", "error");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      Swal.fire("Error", "Failed to send message. Try again.", "error");
    }
  };

  useGSAP(() => {
    gsap.from(".form-input", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.from(".form-textarea", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(".form-submit", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(".intro-text", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });
  });

  return (
    <section className="container py-24 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Intro Text */}
        <div className="intro-text">
          <h2 className="text-lg mb-2">Send a Message</h2>
          <h3 className="text-5xl font-bold mb-4">Let's talk!</h3>
          <p className="text-dark-gray mb-6 font-medium">
            Need help with a project?
          </p>
          <p className="mb-4 font-medium max-w-[380px]">{siteInfo.address}</p>
          <p className="mb-4 font-medium">Email : {siteInfo.email.info}</p>
          <p className="mb-6 font-medium">Phone: {siteInfo.phone}</p>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="relative form-input">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border-b focus:outline-none focus:border-black py-1"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="relative form-input">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full border-b focus:outline-none focus:border-black py-1"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="relative form-input">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className="w-full border-b focus:outline-none focus:border-black py-1"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="relative form-input">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full border-b focus:outline-none focus:border-black py-1"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="relative form-textarea">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                {...register("message", { required: "Message is required" })}
                className="w-full border-b focus:outline-none focus:border-black py-1"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-submit">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-primary transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
