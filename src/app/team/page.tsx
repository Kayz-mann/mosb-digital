"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputField from "@/components/module/Input";
import AttachOptions from "@/components/AttachOptions";
import CustomButton from "@/components/module/CustomButton";
import LinkedInIcon from "@/components/svgs/LinkedInIcon";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  location: Yup.string().required("Location is required"),
  website: Yup.string(),
  instagram: Yup.string(),
  linkedIn: Yup.string(),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  instagram?: string;
  linkedIn?: string;
  letter?: any;
  cv?: any;
  attachments?: any[]; // Add attachments property
}

const Team = ({ searchParams }: { searchParams: { jobType: string } }) => {
  const isMobileOrTablet = useMobileOrTablet(900);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    instagram: "",
    linkedIn: "",
  };

  const handleSubmit = async (values: FormData, { setSubmitting }: any) => {
    console.log("VALUE INFO", values);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          location: values.location,
          website: values.website,
          instagram: values.instagram,
          linkedIn: values.linkedIn,
          cv: values.cv,
          letter: values.letter,
        }), // Directly send the form values
      });

      if (response.ok) {
        console.log("Email sent successfully");
        console.log(response);
        // Reset form values if needed
      } else {
        console.error("Error sending email:", response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error
    } finally {
      setSubmitting(false); // Set submitting to false after form submission
    }
  };

  return (
    <div className={`h-full w-full "bg-[#fff]"`}>
      <div
        className={`mx-auto ${isMobileOrTablet ? "py-0" : "py-8"} ${
          isMobileOrTablet ? "w-full" : "w-4/5"
        }`}
      >
        <Navigation
          bgColor={`${isMobileOrTablet ? "bg-white" : "bg-[#FAB005]"}`}
        />

        <div className={`${isMobileOrTablet ? "px-4" : "px-4"}`}>
          <div className={`${isMobileOrTablet ? "w-[100%]" : "w-[65%]"}`}>
            <p className="text-3xl text-gray-600 font-medium mt-8">
              Join the team
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit} // Using the handleSubmit function
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mt-8">
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

                    <CustomButton
                      type="submit"
                      buttonText1="Submit"
                      buttonText2="Submit"
                      borderColor="border-black"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
