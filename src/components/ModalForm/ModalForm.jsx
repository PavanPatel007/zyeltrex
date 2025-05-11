"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";
import Stepper from "react-stepper-horizontal";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ModalForm = ({ isOpen, closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const techOptions = [
    { label: "Designing", value: "designing", bg: "bg-purple-200" },
    { label: "Developing", value: "developing", bg: "bg-yellow-200" },
    { label: "Marketing", value: "marketing", bg: "bg-red-200" },
  ];

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
    closeModal();
  };

  const goToNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 2));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[99]" onClose={closeModal}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-semibold text-gray-900"
              >
                {currentStep === 1
                  ? "Select Service"
                  : "Enter Your Information"}
              </Dialog.Title>

              {/* Stepper */}
              <Stepper
                steps={[{ label: "Tech Selection" }, { label: "Your Info" }]}
                activeStep={currentStep - 1}
              />

              {/* Scrollable modal content */}
              <div className="overflow-y-auto max-h-[60vh] mt-4">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col"
                >
                  {currentStep === 1 && (
                    <div>
                      <div className="mt-4">
                        {techOptions.map((option) => (
                          <Controller
                            key={option.value}
                            name="techSelection"
                            control={control}
                            render={({ field }) => (
                              <div
                                className={`${option.bg} flex items-center space-x-2 mb-4 px-4 py-2 rounded-2xl cursor-pointer`}
                                onClick={() => {
                                  const isChecked = field.value?.includes(
                                    option.value
                                  );
                                  const newValue = isChecked
                                    ? field.value.filter(
                                        (v) => v !== option.value
                                      )
                                    : [...(field.value || []), option.value];
                                  field.onChange(newValue);
                                }}
                              >
                                <input
                                  type="checkbox"
                                  value={option.value}
                                  checked={field.value?.includes(option.value)}
                                  onChange={(e) => {
                                    e.stopPropagation();
                                    const value = e.target.checked
                                      ? [...(field.value || []), option.value]
                                      : field.value.filter(
                                          (v) => v !== option.value
                                        );
                                    field.onChange(value);
                                  }}
                                  className="border-gray-300 rounded text-black h-5 w-5 bg-transparent"
                                />
                                <label className="ml-2 text-black text-lg font-semibold">
                                  {option.label}
                                </label>
                              </div>
                            )}
                          />
                        ))}
                      </div>
                      <div className="mt-4 flex justify-end border-t border-gray-200 pt-2">
                        <button
                          type="button"
                          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-400"
                          onClick={goToNextStep}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div>
                      <div className="mt-4 space-y-5">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                            className="w-full border-b focus:outline-none focus:border-black py-1"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div className="relative">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            {...register("email", {
                              required: "Email is required",
                            })}
                            className="w-full border-b focus:outline-none focus:border-black py-1"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div className="relative">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone Number
                          </label>
                          <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                              <PhoneInput
                                international
                                defaultCountry="US"
                                value={field.value}
                                onChange={field.onChange}
                                className="w-full border-b focus:outline-none focus:border-black py-1"
                              />
                            )}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div className="relative">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            {...register("message", {
                              required: "Message is required",
                            })}
                            className="w-full border-b focus:outline-none focus:border-black py-1"
                          ></textarea>
                          {errors.message && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.message.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <button
                          type="button"
                          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                          onClick={goToPreviousStep}
                        >
                          Previous
                        </button>
                        <button
                          type="submit"
                          className="bg-black text-white px-4 py-2 rounded hover:bg-black/80"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalForm;
