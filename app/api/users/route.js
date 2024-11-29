import { NextResponse } from "next/server";
import mongoose, { connect } from "mongoose";

export async function GET(request){
    await connect("mongodb://localhost:27017/test");

    //Testando a conexão
   const db = mongoose.connection.db;
   const users = await db.collection("users").find().toArray();
   console.log(users);

   return new NextResponse(JSON.stringify(users));

}