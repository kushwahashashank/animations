import mongoose from "mongoose";
import nodemailer from "nodemailer";

// MongoDB connection string from environment variables
const MONGO_URI =
  "mongodb+srv://<kushwahashashank>:<w6Iwfjem20hi95yP>@cluster0.f2loe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const EMAIL_USER = "kushwahaabhi101@gmail.com";
const EMAIL_PASS = "jlyn eqwb leef hccr";

// Define a contact schema
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

// Ensure the model isn't recompiled on hot reload
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// MongoDB connection
const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
// const connectMongo = async () => {
//   if (mongoose.connection.readyState === 1) {
//     return mongoose.connection.asPromise();
//   }
//   return mongoose.connect(MONGO_URI); // no need for deprecated options
// };

// API route handler
export async function POST(req) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);
  if (!name || !email || !message) {
    return new Response("All fields are required", { status: 400 });
  }

  try {
    // Connect to MongoDB
    // await connectMongo();

    // Save contact details to MongoDB
    const newContact = new Contact({ name, email, message });
    // await newContact.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hello ${name},\n\nThank you for reaching out. We have received your message: "${message}".\n\nWe will get back to you shortly!\n\nBest regards,\nAbhishek Kushwaha `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Message received and confirmation email sent.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
