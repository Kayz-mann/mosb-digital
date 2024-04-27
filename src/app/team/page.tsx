"use client";
import React, { useCallback } from "react";
import * as Yup from "yup";

import { Formik, Form, Field, useFormikContext } from "formik";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputField from "@/components/module/Input";
import AttachOptions from "@/components/AttachOptions";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  location: Yup.string().required("Location is required"),
});

const Team = ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const isTablet = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);
  console.log(searchParams.id);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values); // Handle form submission here
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
          <div className="w-[65%]">
            <p className="text-3xl text-gray-600 font-medium mt-8">
              Join the team
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
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

                    <AttachOptions />

                    <button type="submit">Submit</button>
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
