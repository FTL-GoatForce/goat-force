import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const createGoogleMeeting = async (req, res) => {
  try {
    const {
      title,
      description,
      startDateTime,
      endDateTime,
      location,
      clientEmail,
      userEmail,
      dealId,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !startDateTime ||
      !endDateTime ||
      !clientEmail ||
      !userEmail
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Create OAuth2 client with fresh credentials each time
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    // Test token refresh first
    await oauth2Client.getAccessToken();

    const event = {
      summary: title,
      description: description || "",
      location: location || "Video Call",
      start: {
        dateTime: startDateTime,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "America/New_York",
      },
      attendees: [{ email: clientEmail }, { email: userEmail }],
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      sendNotifications: true,
    });

    return res.status(200).json({
      success: true,
      message: "Meeting created successfully",
      data: {
        eventId: response.data.id,
        htmlLink: response.data.htmlLink,
      },
    });
  } catch (error) {
    console.error("Detailed error:", error);

    if (error.code === 401 || error.message.includes("unauthorized_client")) {
      return res.status(401).json({
        success: false,
        message:
          "Google authentication failed. Please check your OAuth credentials and refresh token.",
        error: "unauthorized_client",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to create meeting",
      error: error.message,
    });
  }
};

export default createGoogleMeeting;
