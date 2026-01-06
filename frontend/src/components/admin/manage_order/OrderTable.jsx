import React from "react";
import { FaEye, FaEdit } from "react-icons/fa";

const OrderTable = ({ orders, onView, onUpdateStatus }) => {
  const getStatusColor = (status) => {
    const colors = {
      pending: "#fbbf24",
      processing: "#3b82f6", 
      shipped: "#8b5cf6",
      delivered: "#10b981",
      cancelled: "#ef4444"
    };
    return colors[status] || "#6b7280";
  };

  const getPaymentStatusColor = (status) => {
    const colors = {
      unpaid: "#ef4444",
      paid: "#10b981", 
      failed: "#f59e0b"
    };
    return colors[status] || "#6b7280";
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const tableStyle = {
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
    marginBottom: "1.5rem",
  };

  const btnStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    padding: "0.375rem 0.75rem",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.8125rem",
    fontWeight: 500,
    cursor: "pointer",
  };

  return (
    <div style={tableStyle}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#2d3748" }}>
            <tr>
              <th style={{ padding: "0.875rem", textAlign: "left", fontSize: "0.8125rem", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.5px" }}>ID</th>
              <th style={{ padding: "0.875rem", textAlign: "left", fontSize: "0.8125rem", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.5px" }}>Khách hàng</th>
              <th style={{ padding: "0.875rem", textAlign: "left", fontSize: "0.8125rem", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.5px" }}>Ngày đặt</th>
              <th style={{ padding: "0.875rem", textAlign: "left", fontSize: "0.8125rem", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.5px" }}>Tổng tiền</th>
              <th style={{ padding: "0.875rem", textAlign: "left", fontSize: "0.8125rem", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.5px" }}>Trạng thái</th>
              <th style={{ padding: "0.875rem", textAlign: "left", fontSize: "0.8125rem", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.5px" }}>Thanh toán</th>
              <th style={{ padding: "0.875rem", textAlign: "center", fontSize: "0.8125rem", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "0.5px" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} style={{ borderBottom: index < orders.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                <td style={{ padding: "0.875rem", fontSize: "0.875rem", color: "#2d3748", fontWeight: 600 }}>#{order.id}</td>
                <td style={{ padding: "0.875rem", fontSize: "0.875rem", color: "#4a5568" }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>{order.shipping_fullname}</div>
                    <div style={{ fontSize: "0.8125rem", color: "#6b7280" }}>{order.shipping_email}</div>
                  </div>
                </td>
                <td style={{ padding: "0.875rem", fontSize: "0.875rem", color: "#4a5568" }}>{formatDate(order.order_date)}</td>
                <td style={{ padding: "0.875rem", fontSize: "0.875rem", color: "#4a5568", fontWeight: 600 }}>{formatCurrency(order.total_amount)}</td>
                <td style={{ padding: "0.875rem" }}>
                  <select 
                    value={order.status}
                    onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                    style={{
                      padding: "0.25rem 0.5rem",
                      borderRadius: "6px",
                      border: "1px solid #e2e8f0",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: getStatusColor(order.status),
                      background: "white"
                    }}
                  >
                    <option value="pending">Chờ xử lý</option>
                    <option value="processing">Đang xử lý</option>
                    <option value="shipped">Đã gửi hàng</option>
                    <option value="delivered">Đã giao hàng</option>
                    <option value="cancelled">Đã hủy</option>
                  </select>
                </td>
                <td style={{ padding: "0.875rem" }}>
                  <span style={{
                    padding: "0.25rem 0.5rem",
                    borderRadius: "6px",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "white",
                    background: getPaymentStatusColor(order.payment_status)
                  }}>
                    {order.payment_status === 'paid' ? 'Đã thanh toán' : 
                     order.payment_status === 'unpaid' ? 'Chưa thanh toán' : 'Thất bại'}
                  </span>
                </td>
                <td style={{ padding: "0.875rem", textAlign: "center" }}>
                  <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                    <button onClick={() => onView(order.id)} style={{ ...btnStyle, background: "#dbeafe", color: "#1d4ed8" }}>
                      <FaEye /> Xem
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {orders.length === 0 && (
        <div style={{ textAlign: "center", padding: "3rem", color: "#6b7280" }}>
          <p style={{ fontSize: "1.125rem", margin: 0 }}>Không có đơn hàng nào</p>
        </div>
      )}
    </div>
  );
};

export default OrderTable;