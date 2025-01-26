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
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
    .regex(/^\+?[0-9]*$/, {
      message:
        'Mobile number must only contain numbers and an optional leading "+" sign',
    }),

  city: z.string().min(2, { message: "City must be at least 2 characters" }),

  state: z.string().min(2, { message: "State must be at least 2 characters" }),

  country: z
    .string()
    .min(2, { message: "Country must be at least 2 characters" }),

  expiryDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
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
        startDate: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: "Start date must be in the format YYYY-MM-DD",
          }),
        endDate: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/, {
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

const ConsultationForm = ({ isOpen, setIsOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);

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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = detailsForm;

  const onSubmit = (values) => {
    console.log(values); // Handle form submission
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="step-container">
              {currentStep === 1 && (
                <div className="step">
                  <h2>Personal Details</h2>
                  <Form {...detailsForm}>
                    <FormField name="name" control={control}>
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" />
                        </FormControl>
                        <FormMessage message={errors.name?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="email" control={control}>
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Email" />
                        </FormControl>
                        <FormMessage message={errors.email?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="mobile" control={control}>
                      <FormItem>
                        <FormLabel>Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Mobile Number" />
                        </FormControl>
                        <FormMessage message={errors.mobile?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="city" control={control}>
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Your City" />
                        </FormControl>
                        <FormMessage message={errors.city?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="state" control={control}>
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="Your State" />
                        </FormControl>
                        <FormMessage message={errors.state?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="country" control={control}>
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Country" />
                        </FormControl>
                        <FormMessage message={errors.country?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="expiryDate" control={control}>
                      <FormItem>
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input placeholder="Expiry Date (YYYY-MM-DD)" />
                        </FormControl>
                        <FormMessage message={errors.expiryDate?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="age" control={control}>
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Age" />
                        </FormControl>
                        <FormMessage message={errors.age?.message} />
                      </FormItem>
                    </FormField>

                    <div className="buttons">
                      <Button type="button" onClick={handleNext}>
                        Next
                      </Button>
                    </div>
                  </Form>
                </div>
              )}

              {currentStep === 2 && (
                <div className="step">
                  <h2>Language & Education</h2>
                  <Form {...detailsForm}>
                    <FormField name="highestEducation" control={control}>
                      <FormItem>
                        <FormLabel>Highest Education</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Highest Education" />
                        </FormControl>
                        <FormMessage
                          message={errors.highestEducation?.message}
                        />
                      </FormItem>
                    </FormField>

                    <FormField name="iletsOrCelpip" control={control}>
                      <FormItem>
                        <FormLabel>IELTS or CELPIP</FormLabel>
                        <FormControl>
                          <Input
                            type="checkbox"
                            checked={false}
                            placeholder="Specify IELTS or CELPIP"
                          />
                        </FormControl>
                        <FormMessage message={errors.iletsOrCelpip?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="score.listening" control={control}>
                      <FormItem>
                        <FormLabel>Listening Score</FormLabel>
                        <FormControl>
                          <Input placeholder="Listening Score" />
                        </FormControl>
                        <FormMessage message={errors.score?.listening?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="score.writing" control={control}>
                      <FormItem>
                        <FormLabel>Writing Score</FormLabel>
                        <FormControl>
                          <Input placeholder="Writing Score" />
                        </FormControl>
                        <FormMessage message={errors.score?.writing?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="score.reading" control={control}>
                      <FormItem>
                        <FormLabel>Reading Score</FormLabel>
                        <FormControl>
                          <Input placeholder="Reading Score" />
                        </FormControl>
                        <FormMessage message={errors.score?.reading?.message} />
                      </FormItem>
                    </FormField>

                    <FormField name="score.speaking" control={control}>
                      <FormItem>
                        <FormLabel>Speaking Score</FormLabel>
                        <FormControl>
                          <Input placeholder="Speaking Score" />
                        </FormControl>
                        <FormMessage message={errors.score?.speaking?.message} />
                      </FormItem>
                    </FormField>

                    <div className="buttons">
                      <Button type="button" onClick={handlePrev}>
                        Back
                      </Button>
                      <Button type="button" onClick={handleNext}>
                        Next
                      </Button>
                    </div>
                  </Form>
                </div>
              )}

              {currentStep === 3 && (
                <div className="step">
                  <h2>Work Experience</h2>
                  <Form {...detailsForm}>
                    <FormField name="yearsExperience" control={control}>
                      <FormItem>
                        <FormLabel>Years of Experience</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Experience in Years" />
                        </FormControl>
                        <FormMessage message={errors.yearsExperience?.message} />
                      </FormItem>
                    </FormField>

                    <div className="buttons">
                      <Button type="button" onClick={handlePrev}>
                        Back
                      </Button>
                      <Button type="submit">Submit</Button>
                    </div>
                  </Form>
                </div>
              )}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;
