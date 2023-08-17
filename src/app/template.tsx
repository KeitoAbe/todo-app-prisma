"use client";

import { Todo } from "@prisma/client";
import { RecoilRoot, atom } from "recoil";

export default function Template({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
