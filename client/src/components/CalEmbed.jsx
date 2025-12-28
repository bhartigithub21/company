import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalEmbed = ({ calLink = "team/arthrym/meeting" }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="cal-embed-container" style={{ width: "100%", height: "100%", overflow: "scroll" }}>
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight: "600px" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
};

export default CalEmbed;
