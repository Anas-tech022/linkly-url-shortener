import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb.js"

export const dynamic = "force-dynamic"

export default async function Page({ params }) {
    const shorturl = (await params).shrt

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl: shorturl})
    console.log(doc)
    if(doc){
         redirect(doc.url)
    }
    else{
        redirect("/")
    }
  }
