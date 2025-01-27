import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const detailsSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  email: z.string().email({ message: "Invalid email address" }),

  mobile: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits" })
    .max(15, { message: "Mobile number cannot exceed 15 digits" })
   ,

  city: z.string().min(2, { message: "City must be at least 2 characters" }),

  state: z.string().min(2, { message: "State must be at least 2 characters" }),

  country: z
    .string()
    .min(2, { message: "Country must be at least 2 characters" }),

  expiryDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Expiry date must be in the format YYYY-MM-DD",
  }),

  age: z
    .number()
    .int({ message: "Age must be an integer" })
    .min(0, { message: "Age cannot be negative" }),

  status: z.enum(["Option1", "Option2", "Option3"], {
    message: "Invalid status option",
  }),

  maritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"], {
    message: "Invalid marital status option",
  }),

  highestEducation: z
    .string()
    .min(2, { message: "Highest education must be at least 2 characters" }),

  iletsOrCelpip: z.boolean({
    message: "Must specify if IELTS or CELPIP is taken",
  }),

  score: z.object({
    listening: z
      .number()
      .min(0, { message: "Listening score must be at least 0" })
      .max(9, { message: "Listening score cannot exceed 9" }),
    writing: z
      .number()
      .min(0, { message: "Writing score must be at least 0" })
      .max(9, { message: "Writing score cannot exceed 9" }),
    reading: z
      .number()
      .min(0, { message: "Reading score must be at least 0" })
      .max(9, { message: "Reading score cannot exceed 9" }),
    speaking: z
      .number()
      .min(0, { message: "Speaking score must be at least 0" })
      .max(9, { message: "Speaking score cannot exceed 9" }),
  }),

  yearsExperience: z
    .number()
    .min(0, { message: "Years of experience cannot be negative" }),

  employers: z
    .array(
      z.object({
        layout: z
          .string()
          .min(3, { message: "Layout must be at least 3 characters" }),
        startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
          message: "Start date must be in the format YYYY-MM-DD",
        }),
        endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
          message: "End date must be in the format YYYY-MM-DD",
        }),
        position: z
          .string()
          .min(2, { message: "Position must be at least 2 characters" }),
        employerName: z
          .string()
          .min(2, { message: "Employer name must be at least 2 characters" }),
        employmentRecords: z.enum(
          [
            "Bank deposit of the salary",
            "Year-end income statement",
            "Tax returns",
          ],
          { message: "Invalid employment record option" }
        ),
      })
    )
    .optional(),
});
const consultationFormSteps = [
  {
    title: "Personal Details",
    fields: [
      "name",
      "email",
      "mobile",
      "city",
      "state",
      "country",
      "expiryDate",
      "age",
      "status",
      "maritalStatus",
    ],
  },
  {
    title: "Education Details",
    fields: [
      "highestEducation",
      "iletsOrCelpip",
      "listening",
      "writing",
      "reading",
      "speaking",
    ],
  },
  {
    title: "Experience Details",
    fields: [
      "yearsExperience",
      "layout",
      "startDate",
      "endDate",
      "position",
      "employerName",
      "employmentRecords",
    ],
  },
];

const ConsultationForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const detailsForm = useForm({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      city: "",
      state: "",
      country: "",
      expiryDate: "",
      age: 0,
      status: "Option1",
      maritalStatus: "Single",
      highestEducation: "",
      iletsOrCelpip: false,
      score: {
        listening: 0,
        writing: 0,
        reading: 0,
        speaking: 0,
      },
      yearsExperience: 0,
      employers: [
        {
          layout: "",
          startDate: "",
          endDate: "",
          position: "",
          employerName: "",
          employmentRecords: "Bank deposit of the salary",
        },
      ],
    },
  });
  if (!isOpen) return null;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = detailsForm;

  const onSubmit = (values) => {
    console.log(values); // Handle form submission
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const renderConsultationForm = () => (
    <Card className=" border-none">
      <CardHeader>
        <CardTitle className="text-secondary">{consultationFormSteps[currentStep].title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...detailsForm}>
          <form
            onSubmit={detailsForm.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Booking Details Inputs */}
            {currentStep === 0 && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap justify-between">
                  <div className="w-[30%]">
                    <FormField
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your Name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="mobile"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Mobile Number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your City" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="w-[30%]">
                    <FormField
                      name="state"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your State" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your Country" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="expiryDate"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Expiry Date (YYYY-MM-DD)"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="w-[30%]">
                    <FormField
                      name="age"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your Age" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap justify-between">
                  <div className="w-[30%]">
                    <FormField
                      name="highestEducation"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Highest Education</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Highest Education" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="iletsOrCelpip"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ilets Or Celpip</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="ilets Or Celpip" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="score.listening"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Listening</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Listening" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="w-[30%]">
                    <FormField
                      name="score.writing"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Writing </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Writing" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="score.reading"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reading </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Reading" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="score.speaking"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Speaking </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Speaking" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap justify-between">
                  <div className="w-[30%]">
                    <FormField
                      name="employers.layout"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Layout </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Layout" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="employers.startDate"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Start Date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="employers.endDate"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="End Date" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="w-[30%]">
                    <FormField
                      name="employers.writing"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Position" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="employers.employerName"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employer Name </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Employer Name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-[30%]">
                    <FormField
                      name="employers.employmentRecords"
                      control={control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>employmentRecords </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="employmentRecords"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              {currentStep > 0 ? (
                <Button type="button" variant="outline" onClick={handlePrev} className="bg-dark text-white">
                  Previous
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onClose()}
                  className="bg-dark text-white"
                >
                  Back
                </Button>
              )}
              {currentStep < consultationFormSteps.length - 1 ? (
                <Button type="button" className="bg-tertiary hover:bg-tertiary/90 text-white" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button type="submit" className="bg-tertiary hover:bg-tertiary/90 text-white">Submit</Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-[80vw] shadow-lg">
        <h2 className="text-2xl text-dark font-bold mb-4">Consultation Form</h2>
        {renderConsultationForm()}
      </div>
    </div>
  );
};

export default ConsultationForm;
