const prod = true;
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
