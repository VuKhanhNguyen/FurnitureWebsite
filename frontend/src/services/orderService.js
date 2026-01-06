import axiosInstance from "./api";

const orderService = {
  // Lấy tất cả đơn hàng
  getAllOrders: async () => {
    const response = await axiosInstance.get("/api/orders");
    return response.data.data;
  },

  // Lấy đơn hàng theo ID
  getOrderById: async (id) => {
    const response = await axiosInstance.get(`/api/orders/${id}`);
    return response.data.data;
  },

  // Cập nhật trạng thái đơn hàng
  updateOrderStatus: async (id, status) => {
    console.log(`Updating order ${id} to status ${status}`);
    try {
      const response = await axiosInstance.put(`/api/orders/${id}/status?status=${status}`);
      console.log('Update response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('Update order status error:', error.response?.data || error.message);
      throw error;
    }
  },
};

export default orderService;