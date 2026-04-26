import Resume from "@/components/Resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Tania Biswas",
  description: "Professional CV of Tania Biswas - AI Engineer & Full Stack Developer",
};

export default function ResumePage() {
  return <Resume />;
}
