import { NextResponse } from "next/server";
import { z } from "zod";

const serviceRequestSchema = z.object({
  customerId: z.string().min(1),
  equipment: z.string().min(1),
  brand: z.string().optional(),
  urgency: z.enum(["Normal", "High", "Critical"]),
  symptom: z.string().min(3)
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = serviceRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please check the submitted service request.", errors: parsed.error.flatten() }, { status: 400 });
  }
  return NextResponse.json({
    message: "Request details validated. Database persistence will be connected in a later phase.",
    data: parsed.data
  }, { status: 200 });
}
