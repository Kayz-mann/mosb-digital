/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { Jelly } from "@uiball/loaders";
import { toast } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputField from "@/components/module/Input";
import CustomButton from "@/components/module/CustomButton";

import MultiInputField from "@/components/module/MultiInputField";
import { sendContract } from "@/lib/contractApi";
import useScroll from "../hooks/useScroll";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  jobTitle: Yup.string().required("Job title is required"),
  companyName: Yup.string(),
  phoneNumber: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  country: Yup.string(),
  message: Yup.string(),
});

const Page = ({ searchParams }: { searchParams: { jobType: string } }) => {
  const isScrolled = useScroll();
  const isMobileOrTablet = useMobileOrTablet(900);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    fullName: "",
    jobTitle: searchParams.jobType || "",
    companyName: "",
    phone: "",
    email: "",
    country: "",
    message: "",
  };

  const handleFormSubmit = async (
    values: HTMLFormElement | any,
    { setSubmitting, resetForm }: any
  ) => {
    setIsLoading(true);
    const notification = toast.loading("Posting job application...");
    console.log(values);
    const formData = values;
    console.log("form", formData);
    await sendContract(formData);
    setSubmitting(false);
    setIsLoading(false);
    resetForm();
    toast.success("Job Successfully Posted!", {
      id: notification,
    });
  };

  return (
    <div className={`h-full w-full "bg-[#fff]"`}>
      {isLoading && (
        <div className="flex w-full items-center justify-center p-18 text-xl">
          <Jelly size={50} color="#FAB005" />
        </div>
      )}
      <div
        className={`ease-in-out transition-padding duration-500 pb-28 ${
          isScrolled ? "py-14" : "py-0"
        } ${isMobileOrTablet ? "w-full" : "w-4/5"}`}
        style={{
          scrollBehavior: "smooth", // Enable smooth scrolling behavior
        }}
      >
        <span
          className={`fixed left-1/2 transform -translate-x-1/2 z-50 ${
            isScrolled ? "w-[80%]" : "w-full"
          } transition-width duration-500`}
        >
          <Navigation
            isScrolled={isScrolled}
            bgColor={`${isMobileOrTablet ? "bg-white" : "bg-[#FAB005]"}`}
          />
        </span>
      </div>

      <div className={`${isMobileOrTablet ? "px-4" : "px-4"}`}>
        <div className={` w-[100%] }`}>
          <p className="text-3xl text-gray-600 font-medium ">Let's Talk</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit} // Using the handleSubmit function
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mt-8">
                  <div
                    className={`flex  justify-between ${
                      isMobileOrTablet ? "flex-col" : "flex-row"
                    }`}
                  >
                    <div
                      className={` ${
                        isMobileOrTablet ? "w-[100%]" : "w-[48%]"
                      }`}
                    >
                      <Field
                        name="fullName"
                        label="FULL NAME*"
                        placeholder=""
                        component={InputField}
                      />
                      {errors.fullName && touched.fullName && (
                        <div className="text-red-500">{errors.fullName}</div>
                      )}
                    </div>

                    <div
                      className={` ${
                        isMobileOrTablet ? "w-[100%]" : "w-[48%]"
                      }`}
                    >
                      <Field
                        name="jobTitle"
                        label="JOB TITLE*"
                        placeholder=""
                        component={InputField}
                      />
                      {errors.jobTitle && touched.jobTitle && (
                        <div className="text-red-500">{errors.jobTitle}</div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`flex  justify-between ${
                      isMobileOrTablet ? "flex-col" : "flex-row"
                    }`}
                  >
                    <div
                      className={` ${
                        isMobileOrTablet ? "w-[100%]" : "w-[48%]"
                      }`}
                    >
                      <Field
                        name="companyName"
                        label="COMPANY NAME*"
                        placeholder=""
                        component={InputField}
                      />
                      {errors.companyName && touched.companyName && (
                        <div className="text-red-500">{errors.companyName}</div>
                      )}
                    </div>
                    <div
                      className={` ${
                        isMobileOrTablet ? "w-[100%]" : "w-[48%]"
                      }`}
                    >
                      <Field
                        name="phone"
                        label="PHONE NUMBER*"
                        placeholder=""
                        component={InputField}
                      />
                      {errors.phone && touched.phone && (
                        <div className="text-red-500">{errors.phone}</div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`flex  justify-between ${
                      isMobileOrTablet ? "flex-col" : "flex-row"
                    }`}
                  >
                    <div
                      className={` ${
                        isMobileOrTablet ? "w-[100%]" : "w-[48%]"
                      }`}
                    >
                      <Field
                        name="email"
                        label="EMAIL*"
                        placeholder=""
                        component={InputField}
                      />
                      {errors.email && touched.email && (
                        <div className="text-red-500">{errors.email}</div>
                      )}
                    </div>

                    <div
                      className={` ${
                        isMobileOrTablet ? "w-[100%]" : "w-[48%]"
                      }`}
                    >
                      <Field
                        name="country"
                        label="COUNTRY/REGION*"
                        placeholder=""
                        component={InputField}
                      />
                      {errors.country && touched.country && (
                        <div className="text-red-500">{errors.country}</div>
                      )}
                    </div>
                  </div>

                  <div>
                    <Field
                      name="message"
                      label="MESSAGE/COMMENTS*"
                      placeholder=""
                      component={MultiInputField}
                    />
                    {errors.message && touched.message && (
                      <div className="text-red-500">{errors.message}</div>
                    )}
                  </div>

                  <div className="pb-8">
                    <CustomButton
                      type="submit"
                      buttonText1="Send Now"
                      buttonText2="Send Now"
                      borderColor="border-black"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
