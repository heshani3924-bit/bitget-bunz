import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;
    
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Groq API Key not found" }, { status: 500 });
    }

// route.ts එකේ මේ කොටස පමණක් වෙනස් කරන්න
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // අලුත් Model එක
        messages: [
          { role: "system", content: "You are Bunz AI, a friendly and helpful trading companion for Bitget." },
          ...messages.map((m: any) => ({ 
            role: m.role === "rabbit" ? "assistant" : "user", 
            content: m.content 
          }))
        ],
      }),
    });
    
    const data = await response.json();
    
    // මෙතන Log එකක් දාමු මොකක්ද එන්නේ කියලා බලන්න
    console.log("Groq API Response:", JSON.stringify(data, null, 2));

    // ව්‍යුහය පරීක්ෂා කර පණිවිඩය ලබාගන්න
    if (data && data.choices && data.choices[0] && data.choices[0].message) {
      const reply = data.choices[0].message.content;
      return NextResponse.json({ reply });
    } else {
      // මෙතැනදී තමයි මුල් දෝෂය එන්නේ, අපි ඒකේ විස්තරේ දාමු
      return NextResponse.json({ error: "Groq response structure mismatch", details: data }, { status: 500 });
    }
    
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json({ error: "Failed to fetch from Groq" }, { status: 500 });
  }
}