"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputField from "@/components/module/Input";
import AttachOptions from "@/components/AttachOptions";
import CustomButton from "@/components/module/CustomButton";
import { Jelly } from "@uiball/loaders";
import { sendJobDetails } from "@/lib/api";
import useScroll from "../hooks/useScroll";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  location: Yup.string().required("Location is required"),
  website: Yup.string(),
  instagram: Yup.string(),
  linkedIn: Yup.string(),
  jobTitle: Yup.string(),
});

const Team = ({ searchParams }: { searchParams: { jobType: string } }) => {
  const isScrolled = useScroll();
  const isMobileOrTablet = useMobileOrTablet(900);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    jobTitle: searchParams.jobType || "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    instagram: "",
    linkedIn: "",
  };

  const handleSubmit = async (
    values: HTMLFormElement | any,
    { setSubmitting, resetForm }: any
  ) => {
    setIsLoading(true);
    const notification = toast.loading("Posting job application...");
    const formData = values;
    // console.log(formData);
    await sendJobDetails(formData);
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
        className={`ease-in-out transition-padding duration-500 ${
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

      <div className={`${isMobileOrTablet ? "px-4" : "px-4"} pt-24`}>
        <div className={`${isMobileOrTablet ? "w-[100%]" : "w-[65%]"}`}>
          <p className="text-3xl text-gray-600 font-medium ">Join the team</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} // Using the handleSubmit function
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mt-8">
                  <Field
                    name="jobTitle"
                    label="JOB TITLE*"
                    placeholder=""
                    component={InputField}
                  />
                  {errors.jobTitle && touched.jobTitle && (
                    <div className="text-red-500">{errors.jobTitle}</div>
                  )}

                  <Field
                    name="firstName"
                    label="FIRST NAME*"
                    placeholder=""
                    component={InputField}
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="text-red-500">{errors.firstName}</div>
                  )}

                  <Field
                    name="lastName"
                    label="LAST NAME*"
                    placeholder=""
                    component={InputField}
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="text-red-500">{errors.lastName}</div>
                  )}

                  <Field
                    name="email"
                    label="EMAIL*"
                    placeholder=""
                    component={InputField}
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}

                  <Field
                    name="phone"
                    label="PHONE*"
                    placeholder=""
                    component={InputField}
                  />
                  {errors.phone && touched.phone && (
                    <div className="text-red-500">{errors.phone}</div>
                  )}

                  <Field
                    name="location"
                    label="LOCATION(CITY)*"
                    placeholder=""
                    component={InputField}
                  />
                  {errors.location && touched.location && (
                    <div className="text-red-500">{errors.location}</div>
                  )}

                  <div className="my-8">
                    <div className="flex flex-row gap-4">
                      <p className="text-md text-black font-medium">
                        Resume /CV*
                      </p>
                      <AttachOptions attachmentType={"cv"} />
                    </div>

                    <div className="flex flex-row gap-4 mt-4">
                      <p className="text-md text-black font-medium">
                        Cover Letter
                      </p>
                      <AttachOptions attachmentType={"letter"} />
                    </div>
                  </div>

                  <div
                    className={`flex flex-row justify-between  border-b border-black mt-10 mb-10`}
                  />

                  <div>
                    <Field
                      name="website"
                      label="WEBSITE"
                      placeholder=""
                      component={InputField}
                    />

                    <Field
                      name="instagram"
                      label="INSTAGRAM"
                      placeholder=""
                      component={InputField}
                    />

                    <Field
                      name="linkedIn"
                      label="LINKEDIN"
                      placeholder=""
                      component={InputField}
                    />
                  </div>

                  <div className="py-4">
                    <CustomButton
                      type="submit"
                      buttonText1="Submit"
                      buttonText2="Submit"
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

export default Team;
