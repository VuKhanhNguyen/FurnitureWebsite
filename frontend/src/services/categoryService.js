import axiosInstance from "./api";

const categoryService = {
  // Lấy tất cả danh mục
  getAllCategories: async () => {
    const response = await axiosInstance.get("/api/categories/");
    return response.data.data;
  },
};

export default categoryService;
