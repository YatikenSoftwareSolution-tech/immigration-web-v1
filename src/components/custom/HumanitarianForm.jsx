import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const detailsSchema = z.object({
  name: z.string().min(3).max(50).optional(),
  email: z.string().email().optional(),
  mobile: z.string().min(10).max(15).optional(),
  city: z.string().min(2).optional(),
  state: z.string().min(2).optional(),
  country: z.string().min(3).optional(),
  nationality: z.string().min(3).optional(),
  age: z.number().int().min(0).optional(),
  crsScore: z.number().int().optional(),
  maritalStatus: z
    .enum(["Single", "Married", "Divorced", "Widowed"])
    .optional(),
  highestEducation: z.string().min(2).optional(),
  iletsOrPet: z.enum(["ilets", "pet"]).optional(),
  listening: z.number().min(0).optional(),
  writing: z.number().min(0).optional(),
  reading: z.number().min(0).optional(),
  speaking: z.number().min(0).optional(),
  yearsExperience: z.number().min(0).optional(),
  jobTitle: z.string().min(3).optional(),
  startDate: z
    .string()
    .regex(/\d{4}-\d{2}-\d{2}/)
    .optional(),
  endDate: z
    .string()
    .regex(/\d{4}-\d{2}-\d{2}/)
    .optional(),
  position: z.string().min(3).optional(),
  employerName: z.string().min(3).optional(),
  monthlyIncome: z.string().min(3).optional(),
  financialDependents: z.enum(["yes", "no"]).optional(),
  financialDependentsReason: z.string().min(3).optional(),
  currentImmigrationStatus: z
    .enum(["visitor", "student", "worker", "refugee"])
    .optional(),
  dateArrival: z
    .string()
    .regex(/\d{4}-\d{2}-\d{2}/)
    .optional(),
  expiryDate: z
    .string()
    .regex(/\d{4}-\d{2}-\d{2}/)
    .optional(),
  appliedBefore: z.enum(["yes", "no"]).optional(),
  appliedBeforeReason: z.string().optional(),
  removalOrder: z.enum(["yes", "no"]).optional(),
  refusedVisa: z.enum(["yes", "no"]).optional(),
  refuseVisaReason: z.string().optional(),
  familyMemberCitizen: z.enum(["yes", "no"]).optional(),
  familyMemberCitizenReason: z.string().optional(),
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
});

const MultiStepForm = ({setResult, setStatus}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(detailsSchema),
    defaultValues: {},
  });

 
  const router = useRouter();
 



  const onSubmit = async () => {
    setLoading(true);
    const body = watch();
    console.log(body);
    const now = new Date(Date.now());
    const currentYear = now.getFullYear();
    const birthYear = currentYear-body.age;
    const newBody=
    {
        "Full Name": body.name,
        "Date of Birth": `15/06/${birthYear}`,
        "Gender": "Male",
        "Country of Birth": body.nationality,
        "Current Address ": {
          "City ": body.city,
          "State": body.state,
          "Country": body.country,
        },
        "Phone Number": body.mobile,
        "Email Address": body.email,
        "Marital Status": body.maritalStatus,
        "Current Immigration Status": body.currentImmigrationStatus,
        "Date of Arrival in Canada": body.dateArrival,
        "Visa/Permit Expiry Date": body.expiryDate,
        "Applied for Permanent Residence Before": body.appliedBefore + body.appliedBeforeReason,
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
        "Dependents Details": body.financialDependentsReason
      }
    // router.push('/consultation');
    try{
        const response = await fetch("https://2htjqsz5-8080.inc1.devtunnels.ms/analyze", {method: 'POST',headers: {
            'Content-Type': 'application/json'
 

          }, userDetails: [newBody]});
        const data = await response.json();
        console.log(data.response);
        setResult(data.response);
        if(data.response.charAt(0) === 'N'){
            setStatus(false);
        }else setStatus(true);
    }catch(error){
        console.log(error);
    }
    finally{
        setLoading(false);
    }
  };


  return (
    <Card className=" border-none">
      <CardHeader>
        <CardTitle className="text-secondary">
          Personal Details Step {step} / 5
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
                <button
                  className="h-8 w-20 bg-dark rounded-lg text-white"
                  type="button"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  className="h-8 w-20 bg-tertiary rounded-lg text-white"
                  type="button"
                  onClick={() => setStep(3)}
                >
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
              <Input
                className="w-[30%] border-none h-12"
                {...register("position")}
                placeholder="Position"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("employerName")}
                placeholder="Employer Name"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("monthlyIncome")}
                placeholder="Employer Name"
                type="number"
              />
              <div className="flex flex-col">
                <label className="m-0 text-sm text-gray ">
                  Do you have financial dependents?
                </label>
                <select
                  {...register("financialDependents")}
                  className="border-none px-4 pb-2 border rounded-md bg-white text-gray focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <Input
                className="w-[30%] border-none h-12"
                {...register("financialDependentsReason")}
                placeholder="If yes, provide details (Name, Relationship, Age)"
                type="textarea"
              />
              <div className="flex flex-row w-full justify-between">
                <button
                  className="h-8 w-20 bg-dark rounded-lg text-white"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="h-8 w-20 bg-tertiary rounded-lg text-white"
                >
                  next
                </button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <label className="m-0 text-sm mb-2 ">
                  Current Immigration Status in Canada
                </label>
                <select
                  {...register("financialDependents")}
                  className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="visitor">Visitor</option>
                  <option value="student">Student</option>
                  <option value="worker">Worker</option>
                  <option value="refugee">Refugee</option>
                </select>
              </div>
              <Input
                className="w-[30%] border-none h-12"
                {...register("dateArrival")}
                placeholder="Date of Arrival (YYYY-MM-DD)"
              />
              <Input
                className="w-[30%] border-none h-12"
                {...register("expiryDate")}
                placeholder="Date of Visa Expire (YYYY-MM-DD)"
              />
              <div className="flex flex-col">
                <label className="m-0 text-sm ">
                Have you applied for Permanent Residence before?
                </label>
                <select
                  {...register("appliedBefore")}
                  className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
 


              <div>
                <label>If yes, provide details (date, application type, status, etc.):</label>
                <Input
                  className="w-[30%] border-none h-12"
                  {...register("appliedBeforeReason")}
                  placeholder="Years of Experience"
                  type="textarea"
                />
              </div>
              <div className="flex flex-col">
                <label className="m-0 text-sm ">
                Do you have a removal order against you?

         
                </label>
                <select
                  {...register("removalOrder")}
                  className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="m-0 text-sm ">
                Have you ever been refused a visa, work/study permit, or permanent residency in Canada? 
                </label>
                <select
                  {...register("refusedVisa")}
                  className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label>If yes, provide details:</label>
                <Input
                  className="w-[30%] border-none h-12"
                  {...register("refuseVisaReason")}
                  type="textarea"
                />
              </div>
              <div className="flex flex-col">
                <label className="m-0 text-sm ">

                Do you have family members who are Canadian citizens or permanent residents? 

                </label>
                <select
                  {...register("familyMemberCitizen")}
                  className="border-none px-4 pb-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label>If yes, provide details(Name, Relationship, Status): </label>
                <Input
                  className="w-[30%] border-none h-12"
                  {...register("familyMemberCitizenReason")}
                  type="textarea"
                />
              </div>
              <div className="flex flex-row w-full justify-between">
                <button
                  className="h-8 w-20 bg-dark rounded-lg text-white"
                  type="button"
                  onClick={() => setStep(4)}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  className="h-8 w-20 bg-tertiary rounded-lg text-white"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 5 && (
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
                  <option value="establishment">Establishment in Canada (work, studies, community involvement)</option>
                  <option value="conditions">Adverse conditions in home country</option>
                </select>
              </div>
              <div>
                <label>Explain why you cannot return to your home country and how it would cause undue hardship:
                </label>
                <Input
                  className="w-full border-none h-12"
                  {...register("whyNotHome")}
                  type="textarea"
                />
              </div>

              <div>
                <label> Provide details on your establishment in Canada (e.g., job, education, community ties, volunteer work):
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
                <label>If yes, provide details (Name, Age, Status in Canada): :</label>
                <Input
                  className="w-full border-none h-12"
                  {...register("childrenInCanadaReason")}
                  type="textarea"
                />
              </div>
              <div className="flex flex-col">
                <label className="m-0 text-sm ">
                Are there any medical or safety concerns that would make it unsafe for you to return to your home country?
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
                  onClick={() => setStep(4)}
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
      </CardContent>
    </Card>
  );
};
const HumanitarianForm = ({ isOpen, onClose }) => {

  const [result, setResult] = useState(null);
    const [status, setStatus] = useState(false);
    const router  = useRouter();
 
    useEffect(()=>{
        if(status){
            router.push("/consultation");
        }
    }, [status])

  return (
    <>
      {isOpen && (
        <div className="fixed w-full h-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[80vw] shadow-lg">
            <h2 className="text-2xl text-dark font-bold mb-4">
              Consultation Form
            </h2>
            {!result && <MultiStepForm  setResult={setResult} setStatus={setStatus}/>}
            {result && !status && <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Sorry! We can not move forward with your profile for Humanitarien consideration</CardTitle>

                    </CardHeader>
                </Card>
                </div>}
          </div>
        </div>
      )}
    </>
  );
};

export default HumanitarianForm;


