/* exported init, fillPreferencesWindow */

import { ExtensionPreferences } from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";
import { buildPrefsWidget } from "./common/prefs.js";

export default class GIExtensionPreferences extends ExtensionPreferences {
  fillPreferencesWindow(window) {
    var _a;
    const UIDirPath =
      (_a = this.dir.get_child("ui").get_path()) !== null && _a !== void 0
        ? _a
        : "";
    const settings = this.getSettings();
    buildPrefsWidget(window, settings, UIDirPath);
  }
}
