"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import HorizontalLinearStepper from "@/components/ui/horizontalStepper";
import emailjs from "@emailjs/browser";

export const detailsSchema = z
  .object({
    // ——— Personal Details ———
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters" })
      .max(50, { message: "Name must be at most 50 characters" })
      .trim(),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    mobile: z
      .string()
      .min(10, { message: "Mobile must be at least 10 characters" })
      .max(15, { message: "Mobile must be at most 15 characters" })
      .trim(),
    maritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"]),
    children: z
      .number()
      .int({ message: "Children must be an integer" })
      .min(0, { message: "Children cannot be negative" })
      .optional(),

    // ——— Education ———
    highestEducation: z.enum([
      "Primary ",
      "Secondary ",
      "High School",
      "Higher Secondary",
      "Associate Degree",
      "Bachelors Degree",
      "Masters Degree",
      "PhD Degree",
    ]),
    languageAssessed: z.enum(["yes", "no"]),

    // ——— Work Experience #1 ———
    position1: z.string().min(2, { message: "Position required" }).optional(),
    companyName1: z
      .string()
      .min(2, { message: "Company name required" })
      .optional(),
    startDate1: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Start date must be YYYY-MM-DD",
      })
      .optional(),
    endDate1: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "End date must be YYYY-MM-DD" })
      .optional(),

    // ——— Work Experience #2 ———
    position2: z.string().min(2, { message: "Position required" }).optional(),
    companyName2: z
      .string()
      .min(2, { message: "Company name required" })
      .optional(),
    startDate2: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Start date must be YYYY-MM-DD",
      })
      .optional(),
    endDate2: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "End date must be YYYY-MM-DD" })
      .optional(),

    // ——— Immigration & Consultation ———
    currentImmigrationStatus: z.enum(["visitor", "worker", "student", "none"]),
    lastDateInCanada: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date must be YYYY-MM-DD" })
      .optional(),
    refusedVisa: z.enum(["yes", "no"]),
    refusedVisaDetails: z.string().optional(),
    primaryReason: z.enum([
      "work permit",
      "visa extension",
      "study permit extension",
      "pr application",
      "others",
    ]),
    otherReason: z.string().optional(),
    medicalCondition: z.enum(["yes", "no"]),
    criminalConviction: z.enum(["yes", "no"]),

    // ——— Document Uploads ———
    documents: z.object({
      passportCopy: z.any(),
      proofOfStatus: z.any(),
      languageAssessment: z.any().optional(),
      educationCredentialAssessment: z.any().optional(),
      educationRecords: z.any().optional(),
    }),

    // work Permit

    minl4: z.enum(["yes", "no"]),
    wesOrEca: z.enum(["yes", "no"]),
    least6Months: z.enum([
      "Payslip",
      "Bank deposit of the earnings",
      "Tax documents",
      "Employment letter",
    ]),
    startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Start date must be YYYY-MM-DD",
    }),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "End date must be YYYY-MM-DD" }),
    haveTraining: z.enum(["yes", "no"]),
    haveLico: z.enum(["yes", "no"]),
  })
  // ——— Cross-field Validations ———
  // Work dates in order
  .refine((d) => !d.startDate1 || !d.endDate1 || d.startDate1 <= d.endDate1, {
    path: ["endDate1"],
    message: "End date #1 must be after or equal to start date",
  })
  .refine((d) => !d.startDate2 || !d.endDate2 || d.startDate2 <= d.endDate2, {
    path: ["endDate2"],
    message: "End date #2 must be after or equal to start date",
  })
  // lastDateInCanada required unless status = none
  .refine(
    (d) => d.currentImmigrationStatus === "none" || Boolean(d.lastDateInCanada),
    {
      path: ["lastDateInCanada"],
      message: "Last date in Canada is required for your status",
    }
  )
  // refusedVisa details if refused
  .refine((d) => d.refusedVisa === "no" || Boolean(d.refusedVisaDetails), {
    path: ["refusedVisaDetails"],
    message: "Details required if visa was refused",
  })
  // otherReason if “others”
  .refine((d) => d.primaryReason !== "others" || Boolean(d.otherReason), {
    path: ["otherReason"],
    message: "Please specify your primary reason",
  })
  // require Language Assessment upload if assessed or applying for WP/PR
  .refine(
    (d) => {
      const needsLangDoc =
        d.languageAssessed === "yes" ||
        ["work permit", "pr application"].includes(d.primaryReason);
      return !needsLangDoc || Boolean(d.documents.languageAssessment);
    },
    {
      path: ["documents", "languageAssessment"],
      message: "Upload your Language Assessment document",
    }
  );

function TwoStepForm({ step, setStep }) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(detailsSchema),
    mode: "onBlur",
  });

  const router = useRouter();

  const onNext = async () => {
    const valid = await trigger(
      step === 1
        ? [
            "name",
            "email",
            "mobile",
            "maritalStatus",
            "children",
            "highestEducation",
            "languageAssessed",
          ]
        : [
            "currentImmigrationStatus",
            "lastDateInCanada",
            "refusedVisa",
            "refusedVisaDetails",
            "primaryReason",
            "otherReason",
            "medicalCondition",
            "criminalConviction",
            "documents.passportCopy",
            "documents.proofOfStatus",
          ]
    );
    if (valid) setStep((s) => s + 1);
  };

  const onBack = () => setStep((s) => s - 1);

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .send("service_zuuknl9", "template_vlzmj6f", data, "Ndv9C5G6QF6K7aPqG")
      .then(
        (response) => {
          router.push("/thank-you");
        },
        (error) => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-2 md:p-6 bg-white rounded-2xl text-dark"
    >
      {step === 1 && (
        <fieldset className="flex flex-wrap justify-between gap-4 md:gap-6 lg:gap-10">
          <h2 className="text-2xl w-full font-semibold text-gray-800">
            Personal & Education
          </h2>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="tel"
              {...register("mobile")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-600">
                {errors.mobile.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Marital Status
            </label>
            <select
              {...register("maritalStatus")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
            {errors.maritalStatus && (
              <p className="mt-1 text-sm text-red-600">
                {errors.maritalStatus.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Number of children
            </label>
            <input
              type="number"
              {...register("children", { valueAsNumber: true })}
              className="mt-1 block w-24 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.children && (
              <p className="mt-1 text-sm text-red-600">
                {errors.children.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Highest Education
            </label>
            <select
              {...register("highestEducation")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {[
                "Primary",
                "Secondary",
                "High School",
                "Higher Secondary",
                "Associate Degree",
                "Bachelors Degree",
                "Masters Degree",
                "PhD Degree",
              ].map((degree) => (
                <option key={degree} value={degree}>
                  {degree}
                </option>
              ))}
            </select>
            {errors.maritalStatus && (
              <p className="mt-1 text-sm text-red-600">
                {errors.maritalStatus.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Have you taken any language Assessment?
            </label>
            <select
              {...register("languageAssessed")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.languageAssessed && (
              <p className="mt-1 text-sm text-red-600">
                {errors.languageAssessed.message}
              </p>
            )}
          </div>

          <div className="flex justify-end mt-4 w-full">
            <button
              type="button"
              onClick={onNext}
              className="px-4 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary/90 transition"
            >
              Next
            </button>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="flex flex-wrap justify-between gap-4 md:gap-6 lg:gap-10">
          <h2 className="w-full text-2xl font-semibold text-gray-800">
            Immigration & Documents
          </h2>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Current Immigration Status
            </label>
            <select
              {...register("currentImmigrationStatus")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="visitor">Visitor</option>
              <option value="worker">Worker</option>
              <option value="student">Student</option>
              <option value="none">None</option>
            </select>
            {errors.currentImmigrationStatus && (
              <p className="mt-1 text-sm text-red-600">
                {errors.currentImmigrationStatus.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Date of last entry in Canada
            </label>
            <input
              type="date"
              {...register("lastDateInCanada")}
              className="mt-1 block border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.lastDateInCanada && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastDateInCanada.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Have you ever been refused a Visa?
            </label>
            <select
              {...register("refusedVisa")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.refusedVisa && (
              <p className="mt-1 text-sm text-red-600">
                {errors.refusedVisa.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              If yes, provide details
            </label>
            <textarea
              {...register("refusedVisaDetails")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.refusedVisaDetails && (
              <p className="mt-1 text-sm text-red-600">
                {errors.refusedVisaDetails.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              What is your primary reason for seeking consultation?
            </label>
            <select
              {...register("primaryReason")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="work permit">Work Permit</option>
              <option value="visa extension">Visa Extension</option>
              <option value="study permit extension">
                Study Permit Extension
              </option>
              <option value="pr application">PR Application</option>
              <option value="others">Others</option>
            </select>
            {errors.primaryReason && (
              <p className="mt-1 text-sm text-red-600">
                {errors.primaryReason.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              If other, provide reason
            </label>
            <input
              type="text"
              {...register("otherReason")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.otherReason && (
              <p className="mt-1 text-sm text-red-600">
                {errors.otherReason.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Medical Condition?
            </label>
            <select
              {...register("medicalCondition")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.medicalCondition && (
              <p className="mt-1 text-sm text-red-600">
                {errors.medicalCondition.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Criminal Conviction?
            </label>
            <select
              {...register("criminalConviction")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.criminalConviction && (
              <p className="mt-1 text-sm text-red-600">
                {errors.criminalConviction.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Passport Copy
            </label>
            <input
              type="file"
              {...register("documents.passportCopy")}
              className="mt-1 block w-full text-gray-700"
            />
            {errors.documents?.passportCopy && (
              <p className="mt-1 text-sm text-red-600">
                {errors.documents.passportCopy.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Proof of Status
            </label>
            <input
              type="file"
              {...register("documents.proofOfStatus")}
              className="mt-1 block w-full text-gray-700"
            />
            {errors.documents?.proofOfStatus && (
              <p className="mt-1 text-sm text-red-600">
                {errors.documents.proofOfStatus.message}
              </p>
            )}
          </div>
          <h2 className="w-full text-xl font-semibold text-gray-800">
            If applying for work permit or permanent residency
          </h2>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Language Assessment (optional)
            </label>
            <input
              type="file"
              {...register("documents.languageAssessment")}
              className="mt-1 block w-full text-gray-700"
            />
            {errors.documents?.languageAssessment && (
              <p className="mt-1 text-sm text-red-600">
                {errors.documents.languageAssessment.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              ECA (optional)
            </label>
            <input
              type="file"
              {...register("documents.educationCredentialAssessment")}
              className="mt-1 block w-full text-gray-700"
            />
            {errors.documents?.educationCredentialAssessment && (
              <p className="mt-1 text-sm text-red-600">
                {errors.documents.educationCredentialAssessment.message}
              </p>
            )}
          </div>

          <div className="w-[46%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Education Records (optional)
            </label>
            <input
              type="file"
              {...register("documents.educationRecords")}
              className="mt-1 block w-full text-gray-700"
            />
            {errors.documents?.educationRecords && (
              <p className="mt-1 text-sm text-red-600">
                {errors.documents.educationRecords.message}
              </p>
            )}
          </div>

          <div className="w-full flex justify-between mt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 bg-dark text-white rounded-lg hover:bg-gray-300 transition"
            >
              Back
            </button>
            <button
              type="button"
              onClick={onNext}
              className="px-4 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary/90 transition"
            >
              Next
            </button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="flex flex-wrap justify-between gap-4 md:gap-6 lg:gap-10">
          <h2 className="w-full text-2xl font-semibold text-gray-800">
            Why Work Permit
          </h2>

          {/* Min Level 4 */}
          <div className="w-[100%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
            Do you have a minimum of level 4 in English or French in the CLB or NCLC
            </label>
            <select
              {...register("minl4")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.minl4 && (
              <p className="mt-1 text-sm text-red-600">
                {errors.minl4.message}
              </p>
            )}
          </div>

          {/* WES or ECA */}
          <div className="w-[100%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
            Do you have WES or other Education Credential Assessment the equivalent of a Canadian high school diploma (or higher)?

            </label>
            <select
              {...register("wesOrEca")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.wesOrEca && (
              <p className="mt-1 text-sm text-red-600">
                {errors.wesOrEca.message}
              </p>
            )}
          </div>

          {/* Documents for last 6 months */}
          <div className="w-[100%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
            Do you have at least 6 months of recent and relevant work experience? If yes, provide the supporting documents you are able to provide

            </label>
            <select
              {...register("least6Months")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Payslip">Payslip</option>
              <option value="Bank deposit of the earnings">
                Bank deposit of the earnings
              </option>
              <option value="Tax documents">Tax documents</option>
              <option value="Employment letter">Employment letter</option>
            </select>
            {errors.least6Months && (
              <p className="mt-1 text-sm text-red-600">
                {errors.least6Months.message}
              </p>
            )}
          </div>

          {/* Employment Period */}
          <div className="w-[100%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Employment Start Date
            </label>
            <input
              type="date"
              {...register("startDate")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-600">
                {errors.startDate.message}
              </p>
            )}
          </div>

          <div className="w-[100%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
              Employment End Date
            </label>
            <input
              type="date"
              {...register("endDate")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.endDate && (
              <p className="mt-1 text-sm text-red-600">
                {errors.endDate.message}
              </p>
            )}
          </div>

          {/* Training and LICO */}
          <div className="w-[100%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
            Do you have related caregiver training credential?
            </label>
            <select
              {...register("haveTraining")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.haveTraining && (
              <p className="mt-1 text-sm text-red-600">
                {errors.haveTraining.message}
              </p>
            )}
          </div>

          <div className="w-[100%] md:w-[31%]">
            <label className="block text-sm font-medium text-gray-700">
            Do you have an offer for a full-time home care job from an employer who meets LICO as per the family size and additional income to pay your wages
            </label>
            <select
              {...register("haveLico")}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.haveLico && (
              <p className="mt-1 text-sm text-red-600">
                {errors.haveLico.message}
              </p>
            )}
          </div>

          <div className="w-full flex justify-between mt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 bg-dark text-white rounded-lg hover:bg-gray-300 transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary/90 transition"
            >
              Submit
            </button>
          </div>
        </fieldset>
      )}
    </form>
  );
}
const ConsultationForm = () => {
  const [step, setStep] = useState(1);
  const stepLabel = ["Personal Details", "Immigration Details", "Job Details"];

  return (
    <div className="bg-white mt-16 px-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-dark font-bold mb-4">Consultation Form</h2>
      </div>
      <div className=" py-2">
        <HorizontalLinearStepper step={step} stepLabel={stepLabel} />
        <TwoStepForm step={step} setStep={setStep} />
      </div>
    </div>
  );
};

export default ConsultationForm;
