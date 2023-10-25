// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (!process.env.MONGODB_URI) throw new Error("No MONGODB_URI");
    const client = new MongoClient(process.env.MONGODB_URI!);
    client.connect().then((client) => {
      client
        .db("badges")
        .collection("students")
        .find()
        .toArray()
        .then((result: any) => {
          client.close();
          res.send({ dataArray: result });
        });
    });
  } catch (err) {
    console.log(err);
  }
}
