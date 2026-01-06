import axiosInstance from "./api";

const userService = {
  // Lấy tất cả người dùng
  getAllUsers: async () => {
    const response = await axiosInstance.get("/api/users");
    return response.data.data;
  },

  // Lấy người dùng theo ID
  getUserById: async (id) => {
    const response = await axiosInstance.get(`/api/users/${id}`);
    return response.data.data;
  },

  // Tạo người dùng mới
  createUser: async (userData, avatarFile) => {
    console.log('Creating user with data:', userData);
    const formData = new FormData();
    formData.append('username', userData.username);
    formData.append('password', userData.password);
    formData.append('email', userData.email);
    formData.append('full_name', userData.full_name || '');
    formData.append('phone', userData.phone || '');
    formData.append('role', userData.role);
    
    if (avatarFile) {
      formData.append('file', avatarFile);
    }
    
    console.log('Sending FormData to API...');
    try {
      const response = await axiosInstance.post("/api/users", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('API Response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      throw error;
    }
  },

  // Cập nhật người dùng
  updateUser: async (id, userData, avatarFile) => {
    const formData = new FormData();
    
    Object.keys(userData).forEach(key => {
      if (userData[key] !== null && userData[key] !== undefined && userData[key] !== "") {
        formData.append(key, userData[key]);
      }
    });
    
    if (avatarFile) {
      formData.append('file', avatarFile);
    }
    
    const response = await axiosInstance.put(`/api/users/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data.data;
  },

  // Xóa người dùng
  deleteUser: async (id) => {
    const response = await axiosInstance.delete(`/api/users/${id}`);
    return response.data;
  },
};

export default userService;