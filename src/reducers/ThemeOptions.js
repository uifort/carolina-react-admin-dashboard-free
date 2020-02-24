// Sidebar

export const SET_SIDEBAR_SHADOW = 'THEME_OPTIONS/SET_SIDEBAR_SHADOW';
export const SET_SIDEBAR_TOGGLE_MOBILE =
  'THEME_OPTIONS/SET_SIDEBAR_TOGGLE_MOBILE';
export const SET_SIDEBAR_FIXED = 'THEME_OPTIONS/SET_SIDEBAR_FIXED';

export const setSidebarShadow = sidebarShadow => ({
  type: SET_SIDEBAR_SHADOW,
  sidebarShadow
});
export const setSidebarFixed = sidebarFixed => ({
  type: SET_SIDEBAR_FIXED,
  sidebarFixed
});
export const setSidebarToggleMobile = sidebarToggleMobile => ({
  type: SET_SIDEBAR_TOGGLE_MOBILE,
  sidebarToggleMobile
});
// Header

export const SET_HEADER_FIXED = 'THEME_OPTIONS/SET_HEADER_FIXED';
export const SET_HEADER_SHADOW = 'THEME_OPTIONS/SET_HEADER_SHADOW';
export const SET_HEADER_SEARCH_HOVER = 'THEME_OPTIONS/SET_HEADER_SEARCH_HOVER';

export const setHeaderFixed = headerFixed => ({
  type: SET_HEADER_FIXED,
  headerFixed
});
export const setHeaderShadow = headerShadow => ({
  type: SET_HEADER_SHADOW,
  headerShadow
});
export const setHeaderSearchHover = headerSearchHover => ({
  type: SET_HEADER_SEARCH_HOVER,
  headerSearchHover
});
// Footer

export const SET_FOOTER_FIXED = 'THEME_OPTIONS/SET_FOOTER_FIXED';
export const setFooterFixed = footerFixed => ({
  type: SET_FOOTER_FIXED,
  footerFixed
});
export default function reducer(
  state = {
    // Sidebar

    sidebarShadow: false,
    sidebarFixed: true,
    sidebarToggleMobile: false,
    // Header

    headerFixed: true,
    headerShadow: true,
    // Footer

    footerFixed: false,
    footerShadow: false
  },
  action
) {
  switch (action.type) {
    // Sidebar

    case SET_SIDEBAR_SHADOW:
      return {
        ...state,
        sidebarShadow: action.sidebarShadow
      };
    case SET_SIDEBAR_FIXED:
      return {
        ...state,
        sidebarFixed: action.sidebarFixed
      };
    case SET_SIDEBAR_TOGGLE_MOBILE:
      return {
        ...state,
        sidebarToggleMobile: action.sidebarToggleMobile
      };
    // Header

    case SET_HEADER_FIXED:
      return {
        ...state,
        headerFixed: action.headerFixed
      };
    case SET_HEADER_SHADOW:
      return {
        ...state,
        headerShadow: action.headerShadow
      };
    // Footer

    case SET_FOOTER_FIXED:
      return {
        ...state,
        footerFixed: action.footerFixed
      };
    default:
      break;
  }
  return state;
}
