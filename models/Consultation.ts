import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  destination: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Avoid compiling model multiple times in Next.js dev environment
const Consultation = mongoose.models.Consultation || mongoose.model('Consultation', consultationSchema);

export default Consultation;
