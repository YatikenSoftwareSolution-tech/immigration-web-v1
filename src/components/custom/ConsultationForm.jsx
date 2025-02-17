import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const detailsSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  mobile: z.string().min(10).max(15),
  city: z.string().min(2),
  state: z.string().min(2),
  country: z.string().min(3),
  nationality: z.string().min(3),
  age: z.number().int().min(0),
  crsScore: z.number().int(),
  maritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"]),
  highestEducation: z.string().min(2),
  iletsOrPet: z.enum(["ilets", "pet"]),
  listening: z.number().min(0),
  writing: z.number().min(0),
  reading: z.number().min(0),
  speaking: z.number().min(0),
  yearsExperience: z.number().min(0),
  jobTitle: z.string().min(3),
  startDate: z.string().regex(/\d{4}-\d{2}-\d{2}/),
  endDate: z.string().regex(/\d{4}-\d{2}-\d{2}/),
  position: z.string().min(3),
  employerName: z.string().min(3),
});

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(detailsSchema),
    defaultValues: {},
  });

  const router = useRouter();

  const onSubmit = () => {
    const body = watch();
    console.log(body);
    router.push('/consultation');
  };

  return (
    <Card className=" border-none">
      <CardHeader>
        <CardTitle className="text-secondary">
          Personal Details Step {step} / 3
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <div className="flex flex-wrap gap-6">
              <Input
                className="w-[30%] border-none h-12"
                {...register("name")}
                placeholder="Name"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("email")}
                placeholder="Email"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("mobile")}
                placeholder="Mobile"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("city")}
                placeholder="City"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("state")}
                placeholder="State"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("country")}
                placeholder="Country"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("nationality")}
                placeholder="Nationality"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("age")}
                placeholder="Age"
                type="number"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("crsScore")}
                placeholder="CRS Score"
                type="number"
              />
              <div className="flex flex-col">
                <label className="m-0 text-sm ">Marital status</label>
                <select
                  {...register("maritalStatus")}
                  className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div className="flex flex-row w-full justify-between">
                <button
                  disabled={true}
                  className="h-8 w-20 bg-dark/80 disabled rounded-lg text-white"
                  type="button"
                >
                  Back
                </button>
                <button
                  className="h-8 w-20 bg-tertiary rounded-lg text-white"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-wrap gap-6">
              <Input
                className="w-[30%] border-none h-12"
                {...register("highestEducation")}
                placeholder="Highest Education"
              />
              <div className="flex flex-col">
                <label className="m-0 text-sm ">Marital status</label>
                <select
                  {...register("iletsOrPet")}
                  className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="ilets">ILETS</option>
                  <option value="pet">PET</option>
                </select>
              </div>
              <Input
                className="w-[30%] border-none h-12"
                {...register("listening")}
                placeholder="Listening Score"
                type="number"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("writing")}
                placeholder="Writing Score"
                type="number"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("reading")}
                placeholder="Reading Score"
                type="number"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("speaking")}
                placeholder="Speaking Score"
                type="number"
              />
              <div className="flex flex-row w-full justify-between">
                <button  className="h-8 w-20 bg-dark rounded-lg text-white" type="button" onClick={() => setStep(1)}>
                  Back
                </button>
                <button className="h-8 w-20 bg-tertiary rounded-lg text-white" type="button" onClick={() => setStep(3)} >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-wrap gap-6">
              <Input
                className="w-[30%] border-none h-12"
                {...register("yearsExperience")}
                placeholder="Years of Experience"
                type="number"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("jobTitle")}
                placeholder="Job Title"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("startDate")}
                placeholder="Start Date (YYYY-MM-DD)"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("endDate")}
                placeholder="End Date (YYYY-MM-DD)"
              />
              <Input className="w-[30%] border-none h-12" {...register("position")} placeholder="Position" />
              <Input
                className="w-[30%] border-none h-12"
                {...register("employerName")}
                placeholder="Employer Name"
              />
              <div className="flex flex-row w-full justify-between">
                <button  className="h-8 w-20 bg-dark rounded-lg text-white" type="button" onClick={() => setStep(2)}>
                  Back
                </button>
                <button type="submit" onClick={onSubmit}  className="h-8 w-20 bg-tertiary rounded-lg text-white">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

const ConsultationForm = ({ isOpen, onClose }) => {
  return (
    <>
    {isOpen&&<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-[80vw] shadow-lg">
        <h2 className="text-2xl text-dark font-bold mb-4">Consultation Form</h2>
        <MultiStepForm />
      </div>
    </div>}
    </>
  );
};

export default ConsultationForm;
