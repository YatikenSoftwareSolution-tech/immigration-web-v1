"use client"
import ConsultationForm from '@/components/custom/ConsultationForm';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

const Form = () => {
  const router = useRouter();
  return (
    <ConsultationForm isOpen={true} onClose={()=> router.back()} />
  )
}

export default Form
