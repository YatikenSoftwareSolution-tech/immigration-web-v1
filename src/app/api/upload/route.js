// src/app/api/upload/route.js

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Ensure this code runs in a Node.js environment (so we can use fs.readFileSync, etc.)
export const runtime = "nodejs";

// 1) Path to data.json at project root
const DATA_FILE = path.join(process.cwd(), "data.json");

// 2) Path to the “uploads” folder under /public
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

// Make sure the uploads folder exists at startup
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export async function POST(request) {
  try {
    // a) Read all form fields
    const formData = await request.formData();

    // b) Pull out every single text field (as strings)
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const mobile = formData.get("mobile")?.toString() || "";
    const children = formData.get("children")?.toString() || "";
    const maritalStatus = formData.get("maritalStatus")?.toString() || "";
    const highestEducation = formData.get("highestEducation")?.toString() || "";
    const currentImmigrationStatus = formData
      .get("currentImmigrationStatus")
      ?.toString() || "";
    const lastDateInCanada = formData.get("lastDateInCanada")?.toString() || "";
    const primaryReason = formData.get("primaryReason")?.toString() || "";
    const otherReason = formData.get("otherReason")?.toString() || "";
    const criminalConviction = formData.get("criminalConviction")?.toString() || "";
    const refusedVisa = formData.get("refusedVisa")?.toString() || "";
    const refusedVisaDetails = formData.get("refusedVisaDetails")?.toString() || "";
    const languageAssessed = formData.get("languageAssessed")?.toString() || "";
    const medicalCondition = formData.get("medicalCondition")?.toString() || "";

    // c) Generate a unique ID for this record
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

    // d) Helper to write a single File blob to disk and return its public URL
    async function saveFile(fieldName) {
      const fileBlob = formData.get(fieldName);
      if (!fileBlob || !(fileBlob instanceof File)) {
        return null;
      }

      const originalName = fileBlob.name;
      const ext = path.extname(originalName) || "";
      // e.g. “abcd1234_passportCopy.pdf”
      const fileNameOnDisk = `${id}_${fieldName}${ext}`;
      const filePathOnDisk = path.join(UPLOAD_DIR, fileNameOnDisk);

      // Convert the File (web Blob) into a Buffer so we can write it
      const arrayBuffer = await fileBlob.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      await fs.promises.writeFile(filePathOnDisk, buffer);
      // Return the public‐facing URL path
      return `/uploads/${fileNameOnDisk}`;
    }

    // e) Save each of the five possible documents (or null if none was uploaded)
    const educationCredentialAssessmentUrl = await saveFile(
      "educationCredentialAssessment"
    );
    const educationRecordsUrl = await saveFile("educationRecords");
    const languageAssessmentUrl = await saveFile("languageAssessment");
    const passportCopyUrl = await saveFile("passportCopy");
    const proofOfStatusUrl = await saveFile("proofOfStatus");

    // f) Build the new record object
    const newRecord = {
      id,
      name,
      email,
      mobile,
      children,
      maritalStatus,
      highestEducation,
      currentImmigrationStatus,
      lastDateInCanada,
      primaryReason,
      otherReason,
      criminalConviction,
      refusedVisa,
      refusedVisaDetails,
      languageAssessed,
      medicalCondition,
      documents: {
        educationCredentialAssessment: educationCredentialAssessmentUrl,
        educationRecords: educationRecordsUrl,
        languageAssessment: languageAssessmentUrl,
        passportCopy: passportCopyUrl,
        proofOfStatus: proofOfStatusUrl,
      },
      createdAt: new Date().toISOString(),
    };

    // g) Read the existing array from data.json (or start with [])
    let allData = [];
    try {
      const raw = await fs.promises.readFile(DATA_FILE, "utf8");
      allData = JSON.parse(raw) || [];
    } catch (err) {
      // If file doesn’t exist or is invalid, just reset to empty array
      allData = [];
    }

    // h) Append our new record, then write back the file
    allData.push(newRecord);
    await fs.promises.writeFile(DATA_FILE, JSON.stringify(allData, null, 2), "utf8");

    // i) Return the generated ID to the client
    return NextResponse.json({ id }, { status: 200 });
  } catch (err) {
    console.error("UPLOAD ROUTE ERROR:", err);
    return NextResponse.json({ error: "Server error during upload." }, { status: 500 });
  }
}
