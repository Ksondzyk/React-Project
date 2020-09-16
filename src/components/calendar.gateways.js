const sourceUrl = "https://5f2d1c808085690016922d72.mockapi.io/api/v1/calendar";

export const fetchEventData = () => {
  return fetch(sourceUrl, {
    method: "GET",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to fetch");
  });
};

export const createEvent = (eventData) => {
  return fetch(sourceUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const updateEvent = (idEvent, eventData) => {
  return fetch(`${sourceUrl}/${idEvent}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to toggle task");
    }
  });
};
export const deleteEvent = (idEvent) => {
  return fetch(`${sourceUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};
