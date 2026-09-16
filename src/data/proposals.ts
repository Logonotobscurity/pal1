export type Proposal = {
  id: string;
  title: string;
  utterance: string;
  payload: string;
  risk: "external_write" | "financial" | "read";
  status: "asking" | "approved" | "rejected";
  why: string;
};

export const proposals: Proposal[] = [
  {
    id: "p1",
    title: "Send Ksh 5,000 to Mama Wanjiku",
    utterance: "Send Ksh 5000 to Mama Wanjiku kesho by 5pm",
    payload: "MPESA · Ksh 5,000 · Mama Wanjiku · tomorrow 17:00",
    risk: "financial",
    status: "asking",
    why: "External money movement. PAL will not send until you confirm the exact payload.",
  },
  {
    id: "p2",
    title: "Remind Ngozi about ₦85,000",
    utterance: "Remind Ngozi to pay eighty five thousand naira by tomorrow",
    payload: "WhatsApp reminder · Ngozi · ₦85,000 · due tomorrow",
    risk: "external_write",
    status: "asking",
    why: "Customer message is an external write. PAL is asking before it acts.",
  },
  {
    id: "p3",
    title: "Lookup last invoice for Chinedu",
    utterance: "Show me Chinedu last invoice",
    payload: "Read · invoices · contact: Chinedu",
    risk: "read",
    status: "approved",
    why: "Read-only lookup. Policy allowed auto-approve after meaning was sufficient.",
  },
];
