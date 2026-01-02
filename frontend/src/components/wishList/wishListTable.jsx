import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import wishlistService from "../../services/wishlistService";
import productService from "../../services/productService";
export function WishListTable() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Gắn lại sự kiện jQuery cho nút tăng/giảm số lượng
    if (window.$) {
      // Xóa sự kiện cũ để tránh gắn nhiều lần
      window.$(".cart-minus").off("click");
      window.$(".cart-plus").off("click");
      // Gắn lại sự kiện như trong main.js
      window.$(".cart-minus").click(function () {
        var $input = window.$(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      window.$(".cart-plus").click(function () {
        var $input = window.$(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    }
  });

  useEffect(() => {
    let isActive = true;

    const fetchWishlist = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await wishlistService.getWishlist();
        const wishlistItems = res?.data || [];

        const products = await Promise.all(
          (wishlistItems || []).map(async (w) => {
            try {
              const p = await productService.getProductById(w.product_id);
              return { wishlist: w, product: p };
            } catch {
              return { wishlist: w, product: null };
            }
          })
        );

        if (isActive) {
          setItems(products.filter((x) => x.product));
        }
      } catch (err) {
        if (err?.code === "NOT_AUTHENTICATED") {
          navigate("/login");
          return;
        }
        console.error("Failed to fetch wishlist", err);
        if (isActive) {
          setError("Không thể tải danh sách yêu thích");
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchWishlist();
    return () => {
      isActive = false;
    };
  }, [navigate]);

  const handleRemove = async (e, productId) => {
    e.preventDefault();
    try {
      await wishlistService.removeFromWishlistByProductId(productId);
      setItems((prev) => prev.filter((x) => x?.product?.id !== productId));
    } catch (err) {
      if (err?.code === "NOT_AUTHENTICATED") {
        navigate("/login");
        return;
      }
      console.error("Failed to remove from wishlist", err);
    }
  };

  const rows = useMemo(() => {
    return items.map(({ wishlist, product }) => {
      const hasDiscount =
        product?.sale_price > 0 && product?.sale_price < product?.price;
      const unitPrice = hasDiscount ? product.sale_price : product.price;
      const imageUrl = product?.image
        ? `/uploads/products/${product.image}`
        : "assets/imgs/product1.png";
      return {
        wishlistId: wishlist?.id,
        productId: product?.id,
        name: product?.name,
        imageUrl,
        unitPrice,
      };
    });
  }, [items]);

  return (
    <div className="cart-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="table-content table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Ảnh</th>
                    <th className="cart-product-name">Sản phẩm</th>
                    <th className="product-price">Đơn giá</th>
                    <th className="product-quantity">Số lượng</th>
                    <th className="product-subtotal">Tổng</th>
                    <th className="product-remove">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        {error}
                      </td>
                    </tr>
                  ) : rows.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        Chưa có sản phẩm yêu thích
                      </td>
                    </tr>
                  ) : (
                    rows.map((r) => (
                      <tr key={r.wishlistId || r.productId}>
                        <td className="product-thumbnail">
                          <a href={`/productDetail/${r.productId}`}>
                            <img src={r.imageUrl} alt={r.name || "img"} />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href={`/productDetail/${r.productId}`}>{r.name}</a>
                        </td>
                        <td className="product-price">
                          <span className="amount">
                            {Number(r.unitPrice || 0).toLocaleString("vi-VN")}₫
                          </span>
                        </td>
                        <td className="product-quantity text-center">
                          <div className="product-quantity mt-10 mb-10">
                            <div className="product-quantity-form">
                              <form action="#">
                                <button className="cart-minus">
                                  <i className="far fa-minus"></i>
                                </button>
                                <input
                                  className="cart-input"
                                  type="text"
                                  defaultValue="1"
                                />
                                <button className="cart-plus">
                                  <i className="far fa-plus"></i>
                                </button>
                              </form>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">
                            {Number(r.unitPrice || 0).toLocaleString("vi-VN")}₫
                          </span>
                        </td>
                        <td className="product-remove">
                          <a
                            href="#"
                            onClick={(e) => handleRemove(e, r.productId)}
                          >
                            <i className="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WishListTable;
