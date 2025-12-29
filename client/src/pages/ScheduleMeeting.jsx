import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import "../pages/Contact.css";

const ScheduleMeeting = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: async (e) => {
          const { data } = e.detail;
          // Extract details (adjust based on actual Cal.com payload structure)
          const payload = {
            name: data.responses?.name || data.attendee?.name || "Cal.com User",
            email:
              data.responses?.email ||
              data.attendee?.email ||
              "no-email@provided.com",
            purpose: data.responses?.notes || "Scheduled via Cal.com",
            startTime: data.date,
          };

          try {
            await fetch("https://company-d78j.onrender.com/api/meetings/book", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
          } catch (error) {
            console.error("Failed to sync booking to DB", error);
          }
        },
      });
    })();
  }, []);

  return (
    <div className="page-container">
      <div className="container" style={{ marginTop: "5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1
            className="text-gradient"
            style={{ textAlign: "center", marginBottom: "1rem" }}
          >
            Schedule a Meeting
          </h1>
          <p
            style={{ textAlign: "center", color: "#ccc", marginBottom: "3rem" }}
          >
            Book a slot with our CEO for product discussions.
          </p>

          <div
            className="glass"
            style={{
              padding: "2rem",
              borderRadius: "1rem",
              minHeight: "600px",
            }}
          >
            <Cal
              calLink="lovely-bharti-1041om/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Listen for booking success outside the component or via ref if possible,
// using the getCalApi is cleaner for global events
const handleBookingSuccess = async (e) => {
  // console.log(e.detail);
  const { data } = e.detail;
  // Cal.com payload varies, but usually data has:
  // date (string), startTime (string?), customer: {name, email}, notes
  // We'll try to extract what we can.
  // Ideally we inspect the payload first. For now, sending what we expect.

  // Note: detail structure depends on implementation.
  // Assuming e.detail.data contains relevant info.
  const payload = {
    name: data.attendee?.name || data.responses?.name || "Cal.com User",
    email:
      data.attendee?.email || data.responses?.email || "no-email@provided.com",
    purpose: data.responses?.notes || "Scheduled via Cal.com",
    startTime: data.date,
    // endTime is usually duration based
  };

  try {
    await fetch("https://company-d78j.onrender.com/api/meetings/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Failed to sync booking to DB", error);
  }
};

if (typeof window !== "undefined") {
  // This might add multiple listeners if not careful, but component unmount handle is tricky with global events
  // Let's use the API method inside useEffect instead
}

export default ScheduleMeeting;
