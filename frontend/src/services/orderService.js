import axiosInstance from "./api";

const getToken = () => {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return "";
    const user = JSON.parse(raw);
    return user?.token || "";
  } catch {
    return "";
  }
};

const authHeaders = () => {
  const token = getToken();
  if (!token) {
    // Return empty or throw based on app design.
    // For now, let's assume if it fails, the API call returns 401
    return {};
  }
  return { Authorization: `Bearer ${token}` };
};

const orderService = {
  getOrders: async (filterStatus = "all") => {
    const headers = authHeaders();
    const params = {};
    if (filterStatus !== "all") {
      params.status = filterStatus;
    }

    const response = await axiosInstance.get("/api/checkout/orders", {
      headers,
      params,
    });
    return response.data; // data field contains { code, message, data: [] }
  },

  getOrderById: async (id) => {
    const headers = authHeaders();
    const response = await axiosInstance.get(`/api/checkout/orders/${id}`, {
      headers,
    });
    return response.data; // data field contains { code, message, data: {} }
  },
};

export default orderService;
