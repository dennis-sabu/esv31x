// Helper function for formatting chat responses
function formatChatResponse(text?: string): string {
  if (!text) return '';
  return text.trim().replace(/\n{3,}/g, '\n\n');
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ text: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ✅ Check if API key is available
    const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          text:
            '⚠️ Gemini API key is not configured. Please set GOOGLE_API_KEY or GEMINI_API_KEY in your .env.local and restart the app.',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ✅ Build request body correctly
    const body = {
      system_instruction: {
        role: "user",
        parts: [
          {
            text: `You are an AI assistant that ONLY answers based on the following platform description. 
If the question is unrelated, politely say: "Sorry, I can only answer questions about the Secure Health Management & Personalized Medicine Tracking Platform."

### Platform Description:
The Secure Health Management & Personalized Medicine Tracking Platform is a role-based healthcare system designed to improve patient treatment outcomes while ensuring data privacy. The platform supports four main roles: Hospital Administrators, Doctors, Patients, and System Admins. Hospitals and doctors register under verified hospital accounts, while patients create personal accounts to manage their healthcare journey. Patients can book appointments with doctors, view prescriptions, receive medication and dietary reminders, and upload proof of medicine intake. Doctors manage their schedules, approve or cancel appointments, prescribe medicines with dosage and food restrictions, set next checkup dates, and verify patient adherence using uploaded proof images. Hospital admins oversee doctor registrations, availability, and hospital-wide appointments. The platform uses OTP-based verification for secure record sharing, ensuring that sensitive patient data is only accessed with patient consent. All interactions, including prescriptions, medical history, reminders, and intake verifications, are securely stored and tracked, creating a comprehensive health management solution that strengthens communication between patients and doctors while maintaining privacy and trust.`
          }
        ]
      },
      contents: [
        {
          role: "user",
          parts: [{ text: message }]
        }
      ]
    };

    // ✅ Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);
      return new Response(
        JSON.stringify({
          text:
            "⚠️ Gemini request failed: " +
            (data.error?.message || "Unknown error"),
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ Gemini v1beta returns response here
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ Empty response from Gemini.";

    const formattedReply = formatChatResponse(reply);

    return new Response(JSON.stringify({ text: formattedReply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Server Error:", err);
    return new Response(
      JSON.stringify({ text: "⚠️ Server error talking to Gemini." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
}
