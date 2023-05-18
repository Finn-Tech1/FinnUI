const kDeps = [
  {
    name: "phase1",
    kind: "virtual",
    deps: [
      "actions dispatcher",
      "haptic feedback",
      "input method",
      "notifications",
      "watch homescreen",
      "audio volume indicator comp",
      "api daemon core",
      "shoelace-light-theme",
      "shoelace-alert",
      "shoelace-setup",
    ],
  },
  {
    name: "actions dispatcher",
    kind: "windowModule",
    param: [
      "./js/actions_dispatcher.js",
      "actionsDispatcher",
      "ActionsDispatcher",
    ],
  },
  {
    name: "watch homescreen",
    kind: "custom",
    custom: "watchHomescreen",
    deps: ["actions dispatcher"],
  },
  {
    name: "haptic feedback",
    kind: "windowModule",
    param: ["./js/haptic_feedback.js", "hapticFeedback", "HapticFeedback"],
  },
  {
    name: "input method",
    kind: "windowModule",
    param: ["./js/input_method.js", "inputMethod", "InputMethod"],
    deps: ["actions dispatcher"],
  },
  {
    name: "lockscreen comp",
    kind: "module",
    param: ["./components/lock_screen.js"],
    deps: [
      "api daemon core",
      "battery helper",
      "actions dispatcher",
      "shoelace-icon",
    ],
  },
  {
    name: "notifications",
    kind: "script",
    param: ["./js/notifications.js"],
  },
  {
    name: "launch",
    kind: "virtual",
    deps: ["hide logo", "various modules", "content manager"],
  },
  {
    name: "late start",
    kind: "virtual",
    deps: ["swproxy", "activity handler", "p2p"],
  },
  {
    name: "swproxy",
    kind: "script",
    param: ["./swproxy/helper.js"],
  },
  {
    name: "activity handler",
    kind: "script",
    param: ["./js/activity_handler.js"],
  },
  {
    name: "p2p",
    kind: "script",
    param: ["./js/p2p.js"],
    deps: ["api daemon core", "content manager", "tiles"],
  },
  {
    name: "tiles",
    kind: "script",
    param: ["./js/tiles.js"],
    deps: ["api daemon core"],
  },
  {
    name: "hide logo",
    kind: "virtual",
    deps: ["homescreen ready", "status bar", "wallpaper ready"],
  },
  {
    name: "wallpaper ready",
    kind: "custom",
    custom: "wallpaperReady",
    deps: ["wallpaper"],
  },
  {
    name: "homescreen ready",
    kind: "custom",
    custom: "homescreenLauncher",
    deps: ["window manager"],
  },
  {
    name: "window manager",
    kind: "module",
    param: "./components/window_manager.js",
    deps: ["content window", "shoelace-icon"],
  },
  {
    name: "content window",
    kind: "module",
    param: "./components/content_window.js",
    deps: [
      "api daemon core",
      "content manager",
      "shoelace-icon",
      "injected scripts",
      "shoelace-select",
      "shoelace-option",
      "shoelace-drawer",
      "shoelace-button",
      "shoelace-icon",
    ],
  },
  {
    name: "injected scripts",
    kind: "sharedScript",
    param: "./js/injected.js",
  },
  {
    name: "api daemon core",
    kind: "sharedWindowModule",
    param: ["js/api_daemon.js", "apiDaemon", "ApiDaemon"],
  },
  {
    name: "content manager",
    kind: "sharedWindowModule",
    param: ["js/content_manager.js", "contentManager", "ContentManager"],
    deps: ["api daemon core"],
  },
  {
    name: "battery helper",
    kind: "windowModule",
    param: ["js/battery.js", "batteryHelper", "BatteryHelper"],
  },
  {
    name: "status bar",
    kind: "module",
    param: "./components/status_bar.js",
    deps: ["battery helper", "shoelace-icon", "shoelace-badge"],
  },
  {
    name: "wallpaper",
    kind: "module",
    param: "./js/wallpaper_manager.js",
    deps: ["content manager"],
  },
  {
    name: "ua store",
    kind: "module",
    param: "./js/ua_store.js",
    deps: ["content manager"],
  },
  {
    name: "various modules",
    kind: "virtual",
    deps: [
      "flashlight",
      "keys",
      "power manager",
      "context menu comp",
      "input method comp",
      "quick settings comp",
      "activity chooser comp",
      "browser actions popup comp",
      "reboot menu comp",
      "site info comp",
      "url edit comp",
      "select ui comp",
      "downloads",
      "ipfs",
      "text share comp",
      "confirm dialog comp",
      "publish dialog comp",
      "ucan",
      "status icons comp",
      "apps list comp",
      "ua store",
    ],
  },
  {
    name: "lit element",
    kind: "sharedModule",
    param: ["components/lit.js", ["LitElement", "html", "css"]],
  },
  { name: "flashlight", kind: "module", param: ["./js/flashlight.js"] },
  { name: "keys", kind: "module", param: ["./js/keys.js"] },
  {
    name: "downloads",
    kind: "module",
    param: ["./js/downloads.js"],
    deps: ["content manager"],
  },
  {
    name: "audio volume",
    kind: "module",
    param: ["./js/audio_volume/__PLATFORM__.js"],
    deps: ["shoelace-icon", "shoelace-progress-bar"],
  },
  {
    name: "power manager",
    kind: "module",
    param: ["./js/power_manager.js"],
    deps: ["api daemon core"],
  },
  {
    name: "context menu comp",
    kind: "module",
    param: ["./components/context_menu.js"],
    deps: [
      "shoelace-dialog",
      "shoelace-menu",
      "shoelace-menu-label",
      "shoelace-menu-item",
      "shoelace-divider",
      "shoelace-icon",
    ],
  },
  {
    name: "select ui comp",
    kind: "module",
    param: ["./components/select_ui.js"],
    deps: ["shoelace-divider"],
  },
  {
    name: "input method comp",
    kind: "module",
    param: ["./components/input_method.js"],
    deps: ["shoelace-icon"],
  },
  {
    name: "quick settings comp",
    kind: "module",
    param: ["./components/quick_settings.js"],
    deps: [
      "notification comp",
      "webext comp",
      "api daemon core",
      "shoelace-icon",
      "shoelace-range",
      "shoelace-badge",
      "shoelace-button",
      "status icons comp",
    ],
  },
  {
    name: "activity chooser comp",
    kind: "module",
    param: ["./components/activity_chooser.js"],
    deps: [
      "shoelace-icon",
      "shoelace-menu",
      "shoelace-menu-item",
      "shoelace-divider",
      "shoelace-button",
      "lit element",
      "apps manager",
    ],
  },
  {
    name: "apps manager",
    kind: "sharedWindowModule",
    param: ["js/apps_manager.js", "appsManager", "AppsManager"],
    deps: ["api daemon core"],
  },
  {
    name: "browser actions popup comp",
    kind: "module",
    param: ["./components/browser_action_popup.js"],
    deps: ["shoelace-icon"],
  },
  {
    name: "notification comp",
    kind: "module",
    param: ["./components/notification.js", ["WebNotification"]],
    deps: ["shoelace-icon", "lit element"],
  },
  {
    name: "webext comp",
    kind: "module",
    param: ["./components/web_extensions.js", ["BrowserAction"]],
    deps: ["lit element"],
  },
  {
    name: "reboot menu comp",
    kind: "module",
    param: ["./components/reboot_menu.js"],
    deps: ["content manager", "shoelace-icon", "shoelace-divider"],
  },
  {
    name: "audio volume indicator comp",
    kind: "module",
    param: ["./components/audio_volume_indicator.js"],
    deps: ["lit element"],
  },
  {
    name: "status icons comp",
    kind: "module",
    param: ["./components/status_icons.js"],
    deps: ["lit element", "shoelace-icon"],
  },
  {
    name: "site info comp",
    kind: "module",
    param: ["./components/site_info.js"],
    deps: [
      "api daemon core",
      "shoelace-drawer",
      "shoelace-button",
      "shoelace-icon",
      "shoelace-divider",
      "shoelace-select",
      "shoelace-dropdown",
      "shoelace-menu",
      "shoelace-option",
      "content manager",
    ],
  },
  {
    name: "url edit comp",
    kind: "module",
    param: ["./components/url_edit.js"],
    deps: ["content manager"],
  },
  {
    name: "ucan",
    kind: "module",
    param: ["./components/ucan.js", ["Ucan"]],
    deps: [
      "api daemon core",
      "shoelace-dialog",
      "shoelace-button",
      "shoelace-menu",
      "shoelace-menu-item",
      "shoelace-select",
    ],
  },
  {
    name: "ipfs",
    kind: "virtual",
    deps: ["ipfs publisher", "filecoin"],
  },
  {
    name: "ipfs publisher",
    kind: "module",
    param: ["./js/ipfs_publisher.js"],
    deps: ["content manager"],
  },
  {
    name: "filecoin",
    kind: "module",
    param: ["./js/filecoin.js", ["FileCoinService"]],
  },
  {
    name: "text share comp",
    kind: "module",
    param: ["./components/text_share.js"],
    deps: [
      "lit element",
      "shoelace-button",
      "shoelace-icon-button",
      "shoelace-dialog",
      "shoelace-qr-code",
    ],
  },
  {
    name: "confirm dialog comp",
    kind: "module",
    param: ["./components/confirm_dialog.js"],
    deps: [
      "lit element",
      "shoelace-button",
      "shoelace-icon-button",
      "shoelace-dialog",
      "shoelace-switch",
    ],
  },
  {
    name: "publish dialog comp",
    kind: "module",
    param: ["./components/publish_dialog.js"],
    deps: [
      "lit element",
      "shoelace-button",
      "shoelace-icon-button",
      "shoelace-dialog",
      "shoelace-radio-group",
      "shoelace-radio-button",
      "shoelace-input",
    ],
  },
  {
    name: "apps list comp",
    kind: "module",
    param: ["./components/apps_list.js"],
    deps: [
      "lit element",
      "apps manager",
      "shoelace-menu",
      "shoelace-menu-item",
      "shoelace-divider",
      "shoelace-icon",
    ],
  },
];
