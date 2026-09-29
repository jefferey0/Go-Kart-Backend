import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


export const Paystack = axios.create({
      baseURL: "https://api.paystack.co",
      headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
});

