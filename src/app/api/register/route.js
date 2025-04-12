import { User } from "@/app/models/User";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const body = await req.json();
    await mongoose.connect(process.env.MONGO_URL);
    await mongoose.connection.db.collection('users').createIndex({ email: 1 }, { unique: true });
    const createdUser = await User.create(body);
    return new Response(JSON.stringify(createdUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    let errorMessage = "Something went wrong";

    // Обработка дубликата email
    if (err.code === 11000 && err.keyPattern?.email) {
      errorMessage = "Email is already registered";
    }

    // Обработка ошибок валидации
    if (err.errors?.password?.message) {
      errorMessage = err.errors.password.message;
    }

    return new Response(
      JSON.stringify({ error: err.message || "Something went wrong" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
