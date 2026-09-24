import clientPromise from "@/lib/mongodb.js"
import { ObjectId } from "mongodb"

// POST - Generate a new short URL
export async function POST(request) {
  try {
    const body = await request.json()

    // Get values from request
    const { url, shorturl } = body

    // Validate input
    if (!url || !shorturl) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "URL and short URL are required!",
        },
        {
          status: 400,
        }
      )
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Check if short URL already exists
    const existingUrl = await collection.findOne({
      shorturl: shorturl,
    })

    if (existingUrl) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "Short URL already exists!",
        },
        {
          status: 409,
        }
      )
    }

    // Insert new URL
    const result = await collection.insertOne({
      url: url,
      shorturl: shorturl,
      success: true,
      createdAt: new Date(),
    })

    // Return success response
    return Response.json(
      {
        success: true,
        error: false,
        message: "URL Generated Successfully!",
        shorturl: shorturl,
        id: result.insertedId,
      },
      {
        status: 201,
      }
    )

  } catch (error) {
    console.error("POST /api/generate error:", error)

    return Response.json(
      {
        success: false,
        error: true,
        message: "Something went wrong while generating the URL.",
      },
      {
        status: 500,
      }
    )
  }
}


// GET - Get all successfully generated URLs
export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Get all successful URLs
    const urls = await collection
      .find({ success: true })
      .sort({ createdAt: -1 })
      .toArray()

    return Response.json(
      {
        success: true,
        error: false,
        urls: urls,
      },
      {
        status: 200,
      }
    )

  } catch (error) {
    console.error("GET /api/generate error:", error)

    return Response.json(
      {
        success: false,
        error: true,
        message: "Unable to fetch URLs.",
        urls: [],
      },
      {
        status: 500,
      }
    )
  }
}

// DELETE - Delete a URL
export async function DELETE(request) {
  try {
    // Get ID from URL
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "URL ID is required!",
        },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Convert string ID into MongoDB ObjectId

    if (!ObjectId.isValid(id)) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "Invalid URL ID!",
        },
        { status: 400 }
      )
    }

    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    })

    // URL wasn't found
    if (result.deletedCount === 0) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "URL not found!",
        },
        { status: 404 }
      )
    }

    // URL successfully deleted
    return Response.json(
      {
        success: true,
        error: false,
        message: "URL deleted successfully!",
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("DELETE /api/generate error:", error)

    return Response.json(
      {
        success: false,
        error: true,
        message: "Unable to delete URL.",
      },
      { status: 500 }
    )
  }
}