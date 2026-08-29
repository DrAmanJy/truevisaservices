import mongoose, { Schema, Document } from 'mongoose';

export interface IConsultation extends Document {
  name: string;
  phone: string;
  email: string;
  service: string;
  destination: string;
  message: string;
  createdAt: Date;
}

const ConsultationSchema = new Schema<IConsultation>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  destination: { type: String, required: true },
  message: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Consultation || mongoose.model<IConsultation>('Consultation', ConsultationSchema);
