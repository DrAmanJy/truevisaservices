import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Consultation from '@/models/Consultation';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Attempt to connect to DB, but don't fail if MONGODB_URI is missing (for preview environment)
    const isConnected = await connectDB();
    
    if (isConnected) {
      const consultation = new Consultation(body);
      await consultation.save();
    } else {
      console.log('DB not connected, simulating successful save for testing:', body);
    }
    
    return NextResponse.json({ success: true, message: 'Consultation request submitted successfully' }, { status: 201 });
  } catch (error: any) {
    console.error('Submission error:', error);
    return NextResponse.json({ success: false, message: error.message || 'Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const isConnected = await connectDB();
    if (!isConnected) {
       return NextResponse.json({ success: true, data: [] }, { status: 200 });
    }

    const consultations = await Consultation.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: consultations }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Server Error' }, { status: 500 });
  }
}
