import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import "./Contact.css";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        // Fetch Enquiries
        const resEnquiries = await fetch(
          "http://localhost:3000/api/admin/enquiries",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Fetch Meetings
        const resMeetings = await fetch(
          "http://localhost:3000/api/meetings/all",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (resEnquiries.ok && resMeetings.ok) {
          const enquiriesData = await resEnquiries.json();
          const meetingsData = await resMeetings.json();
          setEnquiries(enquiriesData);
          setMeetings(meetingsData);
        } else {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      await fetch("http://localhost:3000/api/admin/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("adminToken");
      navigate("/admin/login");
    }
  };

  if (loading)
    return (
      <div className="text-center" style={{ paddingTop: "5rem" }}>
        Loading...
      </div>
    );

  return (
    <div className="page-container">
      <div className="container" style={{ marginTop: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h1 className="text-gradient">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            Logout <LogOut size={18} />
          </button>
        </div>

        <div style={{ display: "grid", gap: "2rem" }}>
          {/* Meetings Section */}
          <div
            className="glass"
            style={{ padding: "2rem", borderRadius: "1rem", overflowX: "auto" }}
          >
            <h2 style={{ marginBottom: "1.5rem" }}>Scheduled Meetings</h2>
            {meetings.length === 0 ? (
              <p>No meetings scheduled.</p>
            ) : (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  color: "white",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      textAlign: "left",
                    }}
                  >
                    <th style={{ padding: "1rem" }}>Date</th>
                    <th style={{ padding: "1rem" }}>Time</th>
                    <th style={{ padding: "1rem" }}>Name</th>
                    {/* <th style={{ padding: "1rem" }}>Email</th> */}
                    <th style={{ padding: "1rem" }}>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {meetings.map((meeting) => (
                    <tr
                      key={meeting._id}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <td style={{ padding: "1rem" }}>
                        {new Date(meeting.startTime).toLocaleDateString()}
                      </td>
                      <td style={{ padding: "1rem" }}>
                        {new Date(meeting.startTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td style={{ padding: "1rem" }}>{meeting.name}</td>
                      {/* <td style={{ padding: "1rem" }}>{meeting.email}</td> */}
                      <td style={{ padding: "1rem" }}>{meeting.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Enquiries Section */}
          <div
            className="glass"
            style={{ padding: "2rem", borderRadius: "1rem", overflowX: "auto" }}
          >
            <h2 style={{ marginBottom: "1.5rem" }}>Recent Enquiries</h2>
            {enquiries.length === 0 ? (
              <p>No enquiries found.</p>
            ) : (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  color: "white",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      textAlign: "left",
                    }}
                  >
                    <th style={{ padding: "1rem" }}>Date</th>
                    <th style={{ padding: "1rem" }}>Name</th>
                    <th style={{ padding: "1rem" }}>Email</th>
                    <th style={{ padding: "1rem" }}>Subject</th>
                    <th style={{ padding: "1rem" }}>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry) => (
                    <tr
                      key={enquiry._id}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <td style={{ padding: "1rem" }}>
                        {new Date(enquiry.createdAt).toLocaleDateString()}
                      </td>
                      <td style={{ padding: "1rem" }}>{enquiry.name}</td>
                      <td style={{ padding: "1rem" }}>{enquiry.email}</td>
                      <td style={{ padding: "1rem" }}>{enquiry.subject}</td>
                      <td style={{ padding: "1rem" }}>{enquiry.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
