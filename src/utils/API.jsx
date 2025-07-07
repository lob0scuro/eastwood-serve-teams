const prod = true; // Set to true for production, false for development
export const server = prod
  ? "https://epcteams.com/api"
  : "http://localhost:5000";

export const deleteVolunteer = async (id) => {
  try {
    const response = await fetch(`${server}/delete_volunteer/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return { success: true, message: data.message };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};

export const getAllServeTeams = async (month) => {
  try {
    const response = await fetch(
      `${server}/get_all_volunteers_by_month/${month}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return { success: true, serveTeams: data.data };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};

export const UserUpload = async (inputs) => {
  try {
    const response = await fetch("/api/add_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return { success: true, message: data.message };
  } catch (error) {
    console.error("Server error: ", error);
    return { success: false, error: error.message };
  }
};
