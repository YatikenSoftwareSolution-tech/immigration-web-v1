import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import HorizontalLinearStepper from "../ui/horizontalStepper";

const detailsSchema = z
  .object({
    reasonForImmigration: z
      .array(z.string())
      .min(1, { message: "At least one reason for immigration is required" }),
    otherReason: z.string().optional(),
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
    city: z
      .string()
      .min(2, { message: "City must be at least 2 characters" })
      .trim(),
    country: z
      .string()
      .min(3, { message: "Country must be at least 3 characters" })
      .trim(),
    age: z
      .number()
      .int({ message: "Age must be an integer" })
      .min(0, { message: "Age must be non-negative" }),
    currentImmigrationStatus: z
      .string()
      .min(3, {
        message: "Current immigration status must be at least 3 characters",
      })
      .trim(),
    expiryDateofStatus: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Expiry date must be in the format YYYY-MM-DD",
    }),
    maritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"]),
    spouseImmigrationStatus: z.string().optional(),
    dependents: z
      .array(
        z.object({
          name: z.string().optional(),
          age: z.number().int().optional(),
          immigrationStatus: z.string().optional(),
        })
      )
      .optional(),
    previouslyApplied: z.enum(["yes", "no"]),
    previouslyAppliedReason: z.string().optional(),
    profileInFEES: z.enum(["yes", "no"]),
    crsScore: z
      .number()
      .int({ message: "CRS score must be an integer" })
      .min(0, { message: "CRS score must be non-negative" })
      .optional(),
    profileInPNP: z.enum(["yes", "no"]),
    pnpScore: z
      .number()
      .int({ message: "PNP score must be an integer" })
      .min(0, { message: "PNP score must be non-negative" })
      .optional(),

    // Education
    outSide: z.enum(["yes", "no"]),
    haveECA: z.enum(["yes", "no"]),
    explainECA: z.string().optional(),
    inCanada: z.enum(["yes", "no"]),
    instituteName: z.string().optional(),
    program: z.string().optional(),
    doc: z.string().optional(),
    disContinued: z.string().optional(),

    // Employment
    employment: z
      .array(
        z.object({
          occupation: z.string().optional(),
          employerName: z.string().optional(),
          startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: "Start date must be in the format YYYY-MM-DD",
          }),
          endDate: z
            .string()
            .regex(/^\d{4}-\d{2}-\d{2}$/, {
              message: "End date must be in the format YYYY-MM-DD",
            })
            .optional(),
        })
      )
      .optional(),

    // Language
    languageTested: z.enum(["yes", "no"]),
    whichTest: z.enum(["ILETS", "CELPIP", "PTE", "Other"]).optional(),
    dot: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Date of test must be in the format YYYY-MM-DD",
      })
      .optional(),
    listening: z
      .number()
      .int({ message: "Listening score must be an integer" })
      .min(0, { message: "Listening score must be non-negative" })
      .optional(),
    reading: z
      .number()
      .int({ message: "Reading score must be an integer" })
      .min(0, { message: "Reading score must be non-negative" })
      .optional(),
    writing: z
      .number()
      .int({ message: "Writing score must be an integer" })
      .min(0, { message: "Writing score must be non-negative" })
      .optional(),
    speaking: z
      .number()
      .int({ message: "Speaking score must be an integer" })
      .min(0, { message: "Speaking score must be non-negative" })
      .optional(),
    //Additional Information
    refusedVisa: z.enum(["yes", "no"]),
    refusedVisaReason: z.string().optional(),
    criminalConviction: z.enum(["yes", "no"]),
    criminalConvictionReason: z.string().optional(),
    additionalInformation: z.string().optional(),
    whyHC: z
      .enum(["family", "child ", "establishment ", "conditions "])
      .optional(),
    whyHCReason: z.string().optional(),
    whyNotHome: z.string().optional(),
    aboutEstablishment: z.string().optional(),
    childrenInCanada: z.enum(["yes", "no"]).optional(),
    childrenInCanadaReason: z.string().optional(),
    medicalSafetyConcerns: z.enum(["yes", "no"]).optional(),
    medicalSafetyConcernsReason: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Require spouseImmigrationStatus if maritalStatus is "Married"
    if (
      data.maritalStatus === "Married" &&
      (!data.spouseImmigrationStatus ||
        data.spouseImmigrationStatus.trim() === "")
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Spouse immigration status is required when marital status is Married",
        path: ["spouseImmigrationStatus"],
      });
    }
    // Require explanation for ECA if haveECA is "yes"
    if (
      data.haveECA === "yes" &&
      (!data.explainECA || data.explainECA.trim() === "")
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Explanation for ECA is required when haveECA is yes",
        path: ["explainECA"],
      });
    }
    // Require language test type if languageTested is "yes"
    if (data.languageTested === "yes" && !data.whichTest) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Language test type must be specified when languageTested is yes",
        path: ["whichTest"],
      });
    }
  });

const MultiStepForm = ({ setResult, setStatus, step, setStep, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      dependents: [{ name: "", age: undefined, immigrationStatus: "" }],
      employment: [
        { occupation: "", employerName: "", startDate: "", endDate: "" },
      ],
    },
  });
  const router = useRouter();
  const reasonForImmigration = watch("reasonForImmigration");

  const onSubmit = async () => {
    setLoading(true);
    const body = watch();
    console.log(body);
    const now = new Date(Date.now());
    const currentYear = now.getFullYear();
    const birthYear = currentYear - body.age;
    const newBody = {
      "Full Name": body.name,
      "Date of Birth": `15/06/${birthYear}`,
      Gender: "Male",
      "Country of Birth": body.nationality,
      "Current Address ": {
        "City ": body.city,
        State: body.state,
        Country: body.country,
      },
      "Phone Number": body.mobile,
      "Email Address": body.email,
      "Marital Status": body.maritalStatus,
      "Current Immigration Status": body.currentImmigrationStatus,
      "Date of Arrival in Canada": body.dateArrival,
      "Visa/Permit Expiry Date": body.expiryDate,
      "Applied for Permanent Residence Before":
        body.appliedBefore + body.appliedBeforeReason,
      "Removal Order": body.removalOrder,
      "Previous Visa Refusals": body.refuseVisaReason,
      "Family in Canada": body.familyMemberCitizen,
      "Family Details": body.familyMemberCitizenReason,
      "H&C Considerations": body.whyHC,
      "Hardship Explanation": body.whyHCReason,
      "Establishment in Canada": body.aboutEstablishment,
      "Children in Canada": body.childrenInCanada,
      "Children Details": body.childrenInCanadaReason,
      "Medical/Safety Concerns": body.medicalSafetyConcernsReason,
      "Employer Name": body.employerName,
      "Job Title": body.jobTitle,
      "Monthly Income": body.monthlyIncome,
      "Financial Dependents": body.financialDependents,
      "Dependents Details": body.financialDependentsReason,
    };
    // router.push('/consultation');
    try {
      const response = await fetch(
        "https://2htjqsz5-8080.inc1.devtunnels.ms/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          userDetails: [newBody],
        }
      );
      const data = await response.json();
      console.log(data.response);
      setResult(data.response);
      if (data.response.charAt(0) === "N") {
        setStatus(false);
      } else setStatus(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <>
          <div className="flex flex-wrap gap-2 md:gap-6 lg:gap-10">
            <h3 className="text-secondary mb-2 text-lg">
              Purpose of Consultation
            </h3>
            {/* Reason for Immigration */}
            <div className="flex flex-col w-full">
              <label className="m-0 text-sm mb-1">
                What is your primary reason for seeking immigration services?
                (check all that applies)
              </label>
              <select
                multiple
                size="5"
                {...register("reasonForImmigration")}
                className="bg-gray-400 text-sm border-none w-[50%] px-4 pb-2 border rounded-md text-gray-700 focus:outline-none "
              >
                <option value="Permanent Residence">
                  Permanent Residence (PR)
                </option>
                <option value="Work Permit">Work Permit</option>
                <option value="Family Sponsorship">Family Sponsorship</option>
                <option value="Citizenship Application">
                  Citizenship Application
                </option>
                <option value="Other">Other</option>
              </select>

              {errors.reasonForImmigration && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.reasonForImmigration.message}
                </p>
              )}
            </div>

            {/* Conditional Other Reason */}
            {reasonForImmigration?.includes("Other") && (
              <div className="flex flex-col  ">
                <label className="m-0 text-sm mb-1">Other Reason</label>
                <Input
                  className="border-none h-12 w-[300px]"
                  {...register("otherReason")}
                  placeholder="Please specify"
                />
                {errors.otherReason && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.otherReason.message}
                  </p>
                )}
              </div>
            )}

            <h3 className="text-secondary mb-2 text-lg w-full">
              Personal Details
            </h3>
            {/* Name */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Name</label>
              <Input
                className="border-none h-12"
                {...register("name")}
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Email</label>
              <Input
                className="border-none h-12"
                {...register("email")}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Mobile */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Mobile</label>
              <Input
                className="border-none h-12"
                {...register("mobile")}
                placeholder="Mobile"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            {/* City */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">City</label>
              <Input
                className="border-none h-12"
                {...register("city")}
                placeholder="City"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
            {/* Country */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Country</label>
              <Input
                className="border-none h-12"
                {...register("country")}
                placeholder="Country"
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>
            {/* Age */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Age</label>
              <Input
                className="border-none h-12"
                {...register("age", { valueAsNumber: true })}
                placeholder="Age"
                type="number"
              />
              {errors.age && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>
            {/* Current Immigration Status */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Citizenship/Current Immigration Status
              </label>
              <Input
                className="border-none h-12"
                {...register("currentImmigrationStatus")}
                placeholder="LMIA-based work permit, PGWP, Open Work Permit, etc."
              />
              {errors.currentImmigrationStatus && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.currentImmigrationStatus.message}
                </p>
              )}
            </div>
            {/* Expiry Date */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                The Expiry Date of the Status (YYYY-MM-DD)
              </label>
              <Input
                className="border-none h-12"
                {...register("expiryDateofStatus")}
                placeholder="Expiry Date (YYYY-MM-DD)"
              />
              {errors.expiryDateofStatus && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.expiryDateofStatus.message}
                </p>
              )}
            </div>
            {/* Marital Status */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Marital Status</label>
              <select
                {...register("maritalStatus")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
              {errors.maritalStatus && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.maritalStatus.message}
                </p>
              )}
            </div>
            {/* Spouse Immigration Status */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Spouse's Immigration Status (if applicable)
              </label>
              <Input
                className="border-none h-12"
                {...register("spouseImmigrationStatus")}
                placeholder="Spouse Immigration Status"
              />
              {errors.spouseImmigrationStatus && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.spouseImmigrationStatus.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Dependents</label>
              <Input
                className="border-none h-12"
                {...register("dependents[0].name")}
                placeholder="Name, age, immigration status"
              />
              {errors.dependents?.[0]?.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dependents[0].name.message}
                </p>
              )}
            </div>
            {/* Previously Applied */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Have you previously applied for Canadian immigration?
              </label>
              <select
                {...register("previouslyApplied")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.previouslyApplied && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.previouslyApplied.message}
                </p>
              )}
            </div>
            {/* Previously Applied Reason */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If yes, please provide details
              </label>
              <Input
                className="border-none h-12"
                {...register("previouslyAppliedReason")}
              />
              {errors.previouslyAppliedReason && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.previouslyAppliedReason.message}
                </p>
              )}
            </div>
            {/* Profile in FEES */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Have you created your profile in Federal Express Entry System?
              </label>
              <select
                {...register("profileInFEES")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.profileInFEES && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.profileInFEES.message}
                </p>
              )}
            </div>
            {/* CRS Score */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If yes what is your current CRS Score?
              </label>
              <Input
                className="border-none h-12"
                {...register("crsScore", { valueAsNumber: true })}
                placeholder="CRS Score"
                type="number"
              />
              {errors.crsScore && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.crsScore.message}
                </p>
              )}
            </div>
            {/* Profile in PNP */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Have you created a PNP profile.
              </label>
              <select
                {...register("profileInPNP")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.profileInPNP && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.profileInPNP.message}
                </p>
              )}
            </div>
            {/* PNP Score */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If yes, please specify province, stream and your score
              </label>
              <Input
                className="border-none h-12"
                {...register("pnpScore", { valueAsNumber: true })}
                placeholder="PNP Score"
                type="number"
              />
              {errors.pnpScore && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.pnpScore.message}
                </p>
              )}
            </div>
            <div className="flex flex-row w-full justify-between">
              <button
                type="button"
                disabled
                className="h-8 w-20 bg-dark/80 rounded-lg text-white"
                onClick={() => onClose()}
              >
                Back
              </button>
              <button
                type="button"
                className="h-8 w-20 bg-tertiary rounded-lg text-white"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="text-secondary mb-2 text-lg">Education</h3>
          <div className="flex flex-wrap gap-2 md:gap-6 lg:gap-10">
            {/* Outside Canada */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Have you completed any education outside Canada?
              </label>
              <select
                {...register("outSide")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.outSide && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.outSide.message}
                </p>
              )}
            </div>
            {/* Have ECA */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If yes, have you obtained an Education Credential
                Assessment(ECA)?
              </label>
              <select
                {...register("haveECA")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.haveECA && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.haveECA.message}
                </p>
              )}
            </div>
            {/* Explain ECA */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Canadian equivalency according to your ECA
              </label>
              <Input
                className="border-none h-12"
                {...register("explainECA")}
                placeholder=""
              />
              {errors.explainECA && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.explainECA.message}
                </p>
              )}
            </div>
            {/* In Canada */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Have you completed any education in Canada?
                <span className="text-secondary ml-1">*</span>
              </label>
              <select
                {...register("inCanada")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.inCanada && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.inCanada.message}
                </p>
              )}
            </div>
            {/* Institute Name */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If yes, provide qualification details
              </label>
              <Input
                className="border-none h-12"
                {...register("instituteName")}
                placeholder="Institute Name"
              />
              {errors.instituteName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.instituteName.message}
                </p>
              )}
            </div>
            {/* Program */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Program/Degree</label>
              <Input
                className="border-none h-12"
                {...register("program")}
                placeholder="Program"
              />
              {errors.program && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.program.message}
                </p>
              )}
            </div>
            {/* Document */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Date of Completion</label>
              <Input
                className="border-none h-12"
                {...register("doc")}
                placeholder="(YYYY-MM-DD)"
              />
              {errors.doc && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.doc.message}
                </p>
              )}
            </div>
            {/* Discontinued */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If you discontinued studies before completion
              </label>
              <Input
                className="border-none h-12"
                {...register("disContinued")}
                placeholder="Provide data of discontinuation and reason"
              />
              {errors.disContinued && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.disContinued.message}
                </p>
              )}
            </div>
            <div className="flex flex-row w-full justify-between">
              <button
                type="button"
                className="h-8 w-20 bg-dark rounded-lg text-white"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                type="button"
                className="h-8 w-20 bg-tertiary rounded-lg text-white"
                onClick={() => setStep(3)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h3 className="text-secondary mb-2 text-lg">Employment Details</h3>
          <div className="flex flex-wrap gap-2 md:gap-6 lg:gap-10">
            {/* Employment Fields */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Occupation</label>
              <Input
                className="border-none h-12"
                {...register("employment[0].occupation")}
                placeholder="Occupation"
              />
              {errors.employment && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.employment.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Employer Name</label>
              <Input
                className="border-none h-12"
                {...register("employment[0].employerName")}
                placeholder="Employer Name"
              />
              {errors.employment && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.employment.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Start Date (YYYY-MM-DD)
              </label>
              <Input
                className="border-none h-12"
                {...register("employment[0].startDate")}
                placeholder="Start Date (YYYY-MM-DD)"
              />
              {errors.employment && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.employment.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">End Date (YYYY-MM-DD)</label>
              <Input
                className="border-none h-12"
                {...register("employment[0].endDate")}
                placeholder="End Date (YYYY-MM-DD)"
              />
              {errors.employment && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.employment.message}
                </p>
              )}
            </div>
            <h3 className="text-secondary mb-2 w-full text-lg">
              Language Proficiency
            </h3>
            {/* Language Test */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Have you taken a language proficiency test?
              </label>
              <select
                {...register("languageTested")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.languageTested && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.languageTested.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If yes, please provide details
              </label>
              <select
                {...register("whichTest")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="ILETS">ILETS</option>
                <option value="CELPIP">CELPIP</option>
                <option value="PTE">PTE</option>
                <option value="Other">Other</option>
              </select>
              {errors.whichTest && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.whichTest.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Date of Test</label>
              <Input
                className="border-none h-12"
                {...register("dot")}
                placeholder="Date of Test (YYYY-MM-DD)"
              />
              {errors.dot && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dot.message}
                </p>
              )}
            </div>
            {/* Language Scores */}
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Listening Score</label>
              <Input
                className="border-none h-12"
                {...register("listening", { valueAsNumber: true })}
                placeholder="Listening Score"
                type="number"
              />
              {errors.listening && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.listening.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Reading Score</label>
              <Input
                className="border-none h-12"
                {...register("reading", { valueAsNumber: true })}
                placeholder="Reading Score"
                type="number"
              />
              {errors.reading && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.reading.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Writing Score</label>
              <Input
                className="border-none h-12"
                {...register("writing", { valueAsNumber: true })}
                placeholder="Writing Score"
                type="number"
              />
              {errors.writing && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.writing.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">Speaking Score</label>
              <Input
                className="border-none h-12"
                {...register("speaking", { valueAsNumber: true })}
                placeholder="Speaking Score"
                type="number"
              />
              {errors.speaking && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.speaking.message}
                </p>
              )}
            </div>
            <h3 className="text-secondary mb-2 w-full text-lg">
              Additional Information
            </h3>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Have you or any family member been refused a visa or entry in
                Canada?
              </label>
              <select
                {...register("refusedVisa")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.refusedVisa && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.refusedVisa.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If yes, please explain why?
              </label>
              <Input
                className="border-none h-12"
                {...register("refusedVisaReason")}
                placeholder=""
                type="text"
              />
              {errors.refusedVisaReason && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.refusedVisaReason.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Do you have any criminal conviction or charges?
              </label>
              <select
                {...register("criminalConviction")}
                className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.criminalConviction && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.criminalConviction.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                If yes, please provide details
              </label>
              <Input
                className="border-none h-12"
                {...register("criminalConvictionReason")}
                placeholder=""
                type="text"
              />
              {errors.criminalConvictionReason && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.criminalConvictionReason.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[48%] md:w-[30%] lg:w-[20%]">
              <label className="m-0 text-sm mb-1">
                Any additional information or concerns
              </label>
              <Input
                className="border-none h-12"
                {...register("additionalInformation")}
                placeholder=""
                type="text"
              />
              {errors.additionalInformation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.additionalInformation.message}
                </p>
              )}
            </div>
            <div className="flex flex-row w-full justify-between">
              <button
                type="button"
                className="h-8 w-20 bg-dark rounded-lg text-white"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button
                  type="button"
                  className="h-8 w-20 bg-tertiary rounded-lg text-white"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
            </div>
          </div>
        </>
      )}
      {step === 4 && (
        <div className="flex flex-wrap gap-6 scroll">
          <div className="flex flex-col">
            <label className="m-0 text-sm ">
              Primary Reason for Requesting H&C Consideration
            </label>
            <select
              {...register("whyHC")}
              className="border-none pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="family">Family ties in Canada</option>
              <option value="child">Best interests of a child in Canada</option>
              <option value="establishment">
                Establishment in Canada (work, studies, community involvement)
              </option>
              <option value="conditions">
                Adverse conditions in home country
              </option>
            </select>
          </div>
          <div>
            <label>
              Explain why you cannot return to your home country and how it
              would cause undue hardship:
            </label>
            <Input
              className="w-full border-none h-12"
              {...register("whyNotHome")}
              type="textarea"
            />
          </div>

          <div>
            <label>
              {" "}
              Provide details on your establishment in Canada (e.g., job,
              education, community ties, volunteer work):
            </label>
            <Input
              className="w-full border-none h-12"
              {...register("aboutEstablishment")}
              type="textarea"
            />
          </div>

          <div className="flex flex-col">
            <label className="m-0 text-sm ">
              Do you have any children in Canada?
            </label>
            <select
              {...register("childrenInCanada")}
              className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label>
              If yes, provide details (Name, Age, Status in Canada): :
            </label>
            <Input
              className="w-full border-none h-12"
              {...register("childrenInCanadaReason")}
              type="textarea"
            />
          </div>
          <div className="flex flex-col">
            <label className="m-0 text-sm ">
              Are there any medical or safety concerns that would make it unsafe
              for you to return to your home country?
            </label>
            <select
              {...register("medicalSafetyConcerns")}
              className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label>If yes, provide details: </label>
            <Input
              className="w-full border-none h-12"
              {...register("medicalSafetyConcernsReason")}
              type="textarea"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <button
              className="h-8 w-20 bg-dark rounded-lg text-white"
              type="button"
              onClick={() => setStep(3)}
            >
              Back
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="h-8 w-20 bg-tertiary rounded-lg text-white"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};
const HumanitarianForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const stepLabel = ["Personal Details", "Education", "Employment", "Why H&C"];

  return (
    <>
          {isOpen && (
            <div className="z-10 consultaionForm bg-white mt-12 px-12 py-6 h-full w-[100vw] shadow-lg sm:px-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl text-dark font-bold mb-4">
                  Consultation Form
                </h2>
                <button
                  className="py-2 px-4 bg-dark/80 text-white rounded-lg"
                  onClick={onClose}
                >
                  <ArrowLeft className="h-4" />
                </button>
              </div>
              <div className="px-4 py-2">
                <HorizontalLinearStepper step={step} stepLabel={stepLabel} />
                <MultiStepForm step={step} setStep={setStep} onClose={onClose} />
              </div>
            </div>
          )}
        </>
  );
};

export default HumanitarianForm;
