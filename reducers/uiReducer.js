/* eslint-disable no-unreachable */
export const actioTypes = {
  openDropdown: "OPEN_DROPDOWN",
  closeDropdown: "CLOSE_DROPDOWN",
  toggleDropdown: "TOGGLE_DROPDOWN",
  openNotifications: "OPEN_NOTIFICATIONS",
  closeNotifications: "CLOSE_NOTIFICATIONS",
  toggleNotifications: "TOGGLE_NOTIFICATIONS",
  openSidebar: "OPEN_SIDEBAR",
  closeSidebar: "CLOSE_SIDEBAR",
  toggleSidebar: "TOGGLE_SIDEBAR",
  openFilterMenu: "OPEN_FILTER_MENU",
  closeFilterMenu: "CLOSE_FILTER_MENU",
  openEventFilters: "OPEN_EVENT_FILTER_MENU",
  closeEventFilters: "CLOSE_EVENT_FILTER_MENU",
};

export const uiReducer = (state, action) => {
  switch (action.type) {
    case actioTypes.openDropdown:
      return { ...state, isDropdownOpen: true };
      break;
    case actioTypes.closeDropdown:
      return { ...state, isDropdownOpen: false };
      break;
    case actioTypes.toggleDropdown:
      return { ...state, isDropdownOpen: !state.isDropdownOpen };
      break;
    case actioTypes.openNotifications:
      return { ...state, isNotificationsOpen: true };
      break;
    case actioTypes.closeNotifications:
      return { ...state, isNotificationsOpen: false };
      break;
    case actioTypes.toggleNotifications:
      return { ...state, isNotificationsOpen: !state.isNotificationsOpen };
      break;
    case actioTypes.openSidebar:
      return { ...state, isSidebarOpen: true };
      break;
    case actioTypes.closeSidebar:
      return { ...state, isSidebarOpen: false };
      break;
    case actioTypes.toggleSidebar:
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
      break;
    case actioTypes.openFilterMenu:
      return { ...state, isFilterMenuOpen: true };
      break;
    case actioTypes.closeFilterMenu:
      return { ...state, isFilterMenuOpen: false };
      break;
    case actioTypes.openEventFilters:
      return { ...state, isEventFiltersOpen: true };
      break;
    case actioTypes.closeEventFilters:
      return { ...state, isEventFiltersOpen: false };
      break;

    default:
      return state;
  }
};
