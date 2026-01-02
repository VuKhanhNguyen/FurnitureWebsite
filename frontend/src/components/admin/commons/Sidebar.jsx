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
          {!collapsed && <strong>Pro Sidebar</strong>}
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

        <SubMenu label="With Suffix" icon={<FaRegLaughWink />}>
          <MenuItem component={<Link to="/sub1" />}>Submenu 1</MenuItem>
          <MenuItem component={<Link to="/sub2" />}>Submenu 2</MenuItem>
          <MenuItem component={<Link to="/sub3" />}>Submenu 3</MenuItem>
        </SubMenu>

        <SubMenu label="With Prefix" icon={<FaHeart />}>
          <MenuItem component={<Link to="/pre1" />}>Submenu 1</MenuItem>
          <MenuItem component={<Link to="/pre2" />}>Submenu 2</MenuItem>
          <MenuItem component={<Link to="/pre3" />}>Submenu 3</MenuItem>
        </SubMenu>
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
