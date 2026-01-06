import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../../assets/imgs/ad-timer.png";

const AppSidebar = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  return (
    <Sidebar
      image={image ? sidebarBg : undefined}
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={handleToggleSidebar}
      breakPoint="md"
    >
      {/* HEADER */}
      <Menu>
        <MenuItem
          icon={collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
          onClick={handleCollapsedChange}
        >
          {!collapsed && <strong>Admin Panel</strong>}
        </MenuItem>
      </Menu>

      {/* CONTENT */}
      <Menu>
        <MenuItem
          icon={<FaTachometerAlt />}
          component={<NavLink to="/admin" />}
        >
          Dashboard
        </MenuItem>

        <MenuItem icon={<FaGem />} component={<Link to="/admin/product" />}>
          Quản lý sản phẩm
        </MenuItem>

        <MenuItem icon={<FaRegLaughWink />}>Quản lý người dùng</MenuItem>

        <MenuItem icon={<FaHeart />}>Quản lý đơn hàng</MenuItem>
      </Menu>

      {/* FOOTER */}
      <Menu>
        <MenuItem icon={<FaUser />} component={<Link to="/profile" />}>
          My Account
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default AppSidebar;
