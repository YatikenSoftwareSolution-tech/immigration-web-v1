import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
      "crsScore",
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

// const [currentStep, setCurrentStep] = useState(0);

// const detailsForm = useForm({
//   resolver: zodResolver(detailsSchema),
//   defaultValues: {
//     name: "",
//     email: "",
//     mobile: "",
//     city: "",
//     state: "",
//     country: "",
//     expiryDate: "",
//     age: 0,
//     crsScore: 0,
//     status: "Option1",
//     maritalStatus: "Single",
//     highestEducation: "",
//     iletsOrCelpip: false,
//     listening: 0,
//     writing: 0,
//     reading: 0,
//     speaking: 0,
//     yearsExperience: 0,
//     layout: "",
//     startDate: "",
//     endDate: "",
//     position: "",
//     employerName: "",
//     employmentRecords: "Bank deposit of the salary",
//   },
// });
// if (!isOpen) return null;

// const {
//   handleSubmit,
//   control,
//   formState: { errors },
// } = detailsForm;

// const onSubmit = (values) => {
//   console.log("In submit",values); // Handle form submission
//   onClose();
// };

// const handleNext = () => {
//   const stepFields = consultationFormSteps[currentStep].fields;
//   const hasErrors = stepFields.some((field) => errors[field]);

//   if (!hasErrors) {
//     setCurrentStep((prevStep) => prevStep + 1);
//   }
// };

// const handlePrev = () => {
//   setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
// };

// const renderConsultationForm = () => (
//   <Card className=" border-none">
//     <CardHeader>
//       <CardTitle className="text-secondary">
//         {consultationFormSteps[currentStep].title}
//       </CardTitle>
//     </CardHeader>
//     <CardContent>
//       <Form {...detailsForm}>
//         <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log("submit clicked")
//           detailsForm.handleSubmit(onSubmit)
//         }}
//         className="space-y-6">
//           {/* Booking Details Inputs */}
//           {currentStep === 0 && (
//             <div className="flex flex-col gap-3">
//               <div className="flex flex-wrap justify-between">
//                 <div className="w-[30%]">
//                   <FormField
//                     name="name"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Name</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Your Name" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="mobile"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Mobile</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Your Mobile Number"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="city"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>City</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Your City" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-between">
//                 <div className="w-[30%]">
//                   <FormField
//                     name="state"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>State</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Your State" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="country"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Country</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Your Country" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="expiryDate"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Expiry Date</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Expiry Date (YYYY-MM-DD)"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-between">
//                 <div className="w-[30%]">
//                   <FormField
//                     name="age"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Age</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Your Age"
//                             onChange={(e) =>
//                               field.onChange(Number(e.target.value) || "")
//                             }
//                           />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="crsScore"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>CRS Score</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Your CRS Score"
//                             onChange={(e) =>
//                               field.onChange(Number(e.target.value) || "")
//                             }
//                           />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//           {currentStep === 1 && (
//             <div className="flex flex-col gap-3">
//               <div className="flex flex-wrap justify-between">
//                 <div className="w-[30%]">
//                   <FormField
//                     name="highestEducation"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Highest Education</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Highest Education" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="iletsOrCelpip"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>ilets Or Celpip</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="ilets Or Celpip" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="listening"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Listening</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Listening"
//                             onChange={(e) =>
//                               field.onChange(Number(e.target.value) || "")
//                             }
//                           />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-between">
//                 <div className="w-[30%]">
//                   <FormField
//                     name="writing"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Writing </FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Writing"
//                             onChange={(e) =>
//                               field.onChange(Number(e.target.value) || "")
//                             }
//                           />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="reading"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Reading </FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Reading"
//                             onChange={(e) =>
//                               field.onChange(Number(e.target.value) || "")
//                             }
//                           />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="speaking"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Speaking </FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Speaking"
//                             onChange={(e) =>
//                               field.onChange(Number(e.target.value) || "")
//                             }
//                           />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//           {currentStep === 2 && (
//             <div className="flex flex-col gap-3">
//               <div className="flex flex-wrap justify-between">
//                 <div className="w-[30%]">
//                   <FormField
//                     name="layout"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Layout </FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Layout" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="startDate"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Start Date</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Start Date" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="endDate"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>End Date </FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="End Date" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-between">
//                 <div className="w-[30%]">
//                   <FormField
//                     name="position"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Position </FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Position" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="employerName"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Employer Name </FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Employer Name" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <div className="w-[30%]">
//                   <FormField
//                     name="employmentRecords"
//                     control={control}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>employmentRecords </FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="employmentRecords" />
//                         </FormControl>
//                         <FormMessage className="text-secondary" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//           <div className="flex justify-between">
//             {currentStep > 0 ? (
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={handlePrev}
//                 className="bg-dark text-white"
//               >
//                 Previous
//               </Button>
//             ) : (
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => onClose()}
//                 className="bg-dark text-white"
//               >
//                 Back
//               </Button>
//             )}
//             {currentStep < consultationFormSteps.length-1 ? (
//               <Button
//                 type="button"
//                 className="bg-tertiary hover:bg-tertiary/90 text-white"
//                 onClick={handleNext}
//               >
//                 Next
//               </Button>
//             ) : (
//               <Button
//                 type="submit"
//                 className="bg-tertiary hover:bg-tertiary/90 text-white"
//               >
//                 Submit
//               </Button>
//             )}
//           </div>
//         </form>
//       </Form>
//     </CardContent>
//   </Card>
// );
const ConsultationForm = ({ isOpen, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-[80vw] shadow-lg">
        <h2 className="text-2xl text-dark font-bold mb-4">Consultation Form</h2>
        {/* {renderConsultationForm()} */}
        <MultiStepForm />
      </div>
    </div>
  );
};

export default ConsultationForm;
