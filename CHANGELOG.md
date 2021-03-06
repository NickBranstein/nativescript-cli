NativeScript CLI Changelog
================

2.0.0 (2016, April 28)
==

### New
* [Implemented #1262](https://github.com/NativeScript/nativescript-cli/issues/1262): LiveSync with console.log support for iOS simulators.
* [Implemented #1431](https://github.com/NativeScript/nativescript-cli/issues/1431): `tns doctor` should warn about new versions of NativeScript components.
* [Implemented #1595](https://github.com/NativeScript/nativescript-cli/issues/1595): Provide a shorthand for starting Angular 2 apps (`--ng`).
* [Implemented #1665](https://github.com/NativeScript/nativescript-cli/issues/1665): Add command for searching nativescript plugins.

### Fixed
* [Fixed #1203](https://github.com/NativeScript/nativescript-cli/issues/1203): Forbid creating projects with names starting with number.
* [Fixed #1419](https://github.com/NativeScript/nativescript-cli/issues/1419): Cannot find module `colors` during uninstall.
* [Fixed #1504](https://github.com/NativeScript/nativescript-cli/issues/1504): Avoid NPM warnings on the create command .
* [Fixed #1526](https://github.com/NativeScript/nativescript-cli/issues/1526): Executing `tns platform add <platform>` prints command help when platform is already added.
* [Fixed #1532](https://github.com/NativeScript/nativescript-cli/issues/1532): `tns livesync ios --watch` doesn't sync js changes if pacakgeId and folder name does not match.
* [Fixed #1611](https://github.com/NativeScript/nativescript-cli/issues/1611): Unable to build a project with CocoaPods version: `1.0.0.beta.x`.
* [Fixed #1639](https://github.com/NativeScript/nativescript-cli/issues/1639): Fix compatibility with XCode 7.3
* [Fixed #1674](https://github.com/NativeScript/nativescript-cli/issues/1674): Can't build ios project is cocoapods is not installed.
* [Fixed #1689](https://github.com/NativeScript/nativescript-cli/issues/1689): Executing `tns run android` fails to deploy app on new Android emulator.

1.7.1 (2016, March 30)
==

### New
* [Implemented #1634](https://github.com/NativeScript/nativescript-cli/issues/1634): Replace plugin variables in all .xml files of android's plugin code.

### Fixed
* [Fixed #1610](https://github.com/NativeScript/nativescript-cli/issues/1610): `tns plugin add <plugin>` has issues with postinstall scripts.
* [Fixed #1610](https://github.com/NativeScript/nativescript-cli/issues/1612): Unable to execute unit tests on iOS Simulator in some cases.
* [Fixed #1619](https://github.com/NativeScript/nativescript-cli/issues/1619): Wrong error message on installation (or `tns doctor` command).
* [Fixed #1625](https://github.com/NativeScript/nativescript-cli/issues/1625): Double navigation when showing unit test results.

1.7.0 (2016, March 16)
==

### Breaking
* Minimum required Android Build-tools version is set to 23.0.0 due to some changes in Android SDK. CLI will not allow building your application for Android in case you do not have at least this version installed.
* Minimum required Windows version is now Windows 7 SP1.

### New
* [Implemented #1172](https://github.com/NativeScript/nativescript-cli/issues/1172): Add `tns publish ios` command.
* [Implemented #1514](https://github.com/NativeScript/nativescript-cli/issues/1514): Use custom native project templates.
* [Implemented #1563](https://github.com/NativeScript/nativescript-cli/issues/1563): Install runtime by npm tagname.

### Fixed
* [Fixed #1081](https://github.com/NativeScript/nativescript-cli/issues/1081): CLI LiveSync command conflicts with Android Studio.
* [Fixed #1416](https://github.com/NativeScript/nativescript-cli/issues/1416): Livesync does not work when `/data/local/tmp/<app-identifier>` file exists on Android device.
* [Fixed #1541](https://github.com/NativeScript/nativescript-cli/issues/1541): Plugin remove fails if plugin version is not available in npm.
* [Fixed #1576](https://github.com/NativeScript/nativescript-cli/issues/1576): `tns run android` just starts emulator but does not deploy app on it when no devices are attached.

1.6.2 (2016, March 2)
==

### Fixed
* [Fixed #1313](https://github.com/NativeScript/nativescript-cli/issues/1313): `tns livesync <platform> --watch` is not working for changed platform specific files.
* [Fixed #1513](https://github.com/NativeScript/nativescript-cli/issues/1513): `tns test <platform>` does not work in case the application is not installed on the device.
* [Fixed #1555](https://github.com/NativeScript/nativescript-cli/issues/1555): CLI installs beta versions of runtimes in case they are published in npm.

1.6.1 (2016, February 19)
==

### Fixed
* [Fixed #1499](https://github.com/NativeScript/nativescript-cli/issues/1499): `livesync --watch` fails for TypeScript projects with `sourceMaps` enabled.
* [Fixed #1503](https://github.com/NativeScript/nativescript-cli/issues/1503): Livesync fails to install app on multiple devices.

1.6.0 (2016, February 17)
==

### Breaking
* CLI requires full `AndroidManifest.xml` in `app/App_Resources/Android`. Any project which already has such manifest will be upgraded on prepare command.
The existing `AndroidManifest.xml` will be renamed and default manifest will be extracted. You will have to merge the files manually.
* Remove support for `tns library add` command.
* Remove support for `ant` builds.

### New
* [Implemented #374](https://github.com/NativeScript/nativescript-cli/issues/374): Add support for different templates by using `--template` option for `tns create` command.
* [Implemented #625](https://github.com/NativeScript/nativescript-cli/issues/625): A script to set up Mac machine for developing with NativeScript.
* [Implemented #921](https://github.com/NativeScript/nativescript-cli/issues/921): Initial LiveSync is extremly slow if the project has thousands of files.
* [Implemented #952](https://github.com/NativeScript/nativescript-cli/issues/952): Add `--sdk` option to specify SDK version of iOS Simulator.
* [Implemented #1026](https://github.com/NativeScript/nativescript-cli/issues/1026): Out of the box support for application id in plugins.
* [Implemented #1089](https://github.com/NativeScript/nativescript-cli/issues/1089): Allow full `Info.plist` and `AndroidManifest.xml` files to be placed in `app/App_Resources/<platform>`.
* [Implemented #1239](https://github.com/NativeScript/nativescript-cli/issues/1239): Remove support for `library add` command.
* [Implemented #1243](https://github.com/NativeScript/nativescript-cli/issues/1243): Fast livesync for images in `app` directory.
* [Implemented #1294](https://github.com/NativeScript/nativescript-cli/issues/1294): `tns doctor` should check CocoaPods/Ruby version.
* [Implemented #1302](https://github.com/NativeScript/nativescript-cli/issues/1302): Add command for generating html help pages - `dev-generate-help`.
* [Implemented #1329](https://github.com/NativeScript/nativescript-cli/issues/1329): `tns device` to show status of connected devices.
* [Implemented #1338](https://github.com/NativeScript/nativescript-cli/issues/1338): Remove the requirement for external watchers.
* [Implemented #1363](https://github.com/NativeScript/nativescript-cli/issues/1363): Support debug commands with `--no-client` argument.
* [Implemented #1375](https://github.com/NativeScript/nativescript-cli/issues/1375): Improve the output of `tns debug android --get-port`.
* [Implemented #1382](https://github.com/NativeScript/nativescript-cli/issues/1382): Show a progress indicator when downloading platforms.
* [Implemented #1412](https://github.com/NativeScript/nativescript-cli/issues/1412): Store settings in the Roaming Windows profile.
* [Implemented #1420](https://github.com/NativeScript/nativescript-cli/issues/1420): Log how often CLI users "opt out" of CLI usage tracking.
* [Implemented #1440](https://github.com/NativeScript/nativescript-cli/issues/1440): Show loading indicator when an exception is tracked.
* [Implemented #1486](https://github.com/NativeScript/nativescript-cli/issues/1486): Implement Android debugging with unix sockets redirection.

### Fixed
* [Fixed #575](https://github.com/NativeScript/nativescript-cli/issues/575): Plugin remove does not work with `--path` option.
* [Fixed #1027](https://github.com/NativeScript/nativescript-cli/issues/1027): Prepare android/ios command prepares both platforms when added.
* [Fixed #1236](https://github.com/NativeScript/nativescript-cli/issues/1236): The command `tns device log` prints only the log of the app on Android.
* [Fixed #1237](https://github.com/NativeScript/nativescript-cli/issues/1237): `tns livesync --watch` fails when ios device is not attached and simulator is running.
* [Fixed #1292](https://github.com/NativeScript/nativescript-cli/issues/1292): Livesync fails when using typescript in VisualStudio.
* [Fixed #1307](https://github.com/NativeScript/nativescript-cli/issues/1307): Infinite loop when trying to validate xml.
* [Fixed #1315](https://github.com/NativeScript/nativescript-cli/issues/1315): LiveSync does not respect deleted files on some android devices.
* [Fixed #1328](https://github.com/NativeScript/nativescript-cli/issues/1328): Terminal hangs if tns device is run and there is an untrusted iPhone connected.
* [Fixed #1332](https://github.com/NativeScript/nativescript-cli/issues/1332): Application entry point file not found... when using livesync (android).
* [Fixed #1337](https://github.com/NativeScript/nativescript-cli/issues/1337): Syntax error in a babel source crashes livesync watch.
* [Fixed #1339](https://github.com/NativeScript/nativescript-cli/issues/1339): LiveSync watch breaks when deleting a folder and then adding a new file|folder on OS X.
* [Fixed #1360](https://github.com/NativeScript/nativescript-cli/issues/1360): Missing iOS console logs in some cases.
* [Fixed #1386](https://github.com/NativeScript/nativescript-cli/issues/1386): Unit tests crash on Android emulator.
* [Fixed #1401](https://github.com/NativeScript/nativescript-cli/issues/1401): Unit testing: `tns test android` command hangs.
* [Fixed #1403](https://github.com/NativeScript/nativescript-cli/issues/1403): `tns deploy ios --release` command prints incorrect message.
* [Fixed #1428](https://github.com/NativeScript/nativescript-cli/issues/1428): XCode v7.2+ Fails with Cocoapods on emulator.
* [Fixed #1437](https://github.com/NativeScript/nativescript-cli/issues/1437): `tns debug android --emulator` does not stop at the app initial breakpoint.
* [Fixed #1455](https://github.com/NativeScript/nativescript-cli/issues/1455): CLI not supporting a project path having a spaces.

1.5.2 (2015, December 12)
==
### New
* [Implemented #1247](https://github.com/NativeScript/nativescript-cli/issues/1247): Do not kill adb server if possible.

### Fixed
* [Fixed #956](https://github.com/NativeScript/nativescript-cli/issues/956): Better error reporting for deploy on device.
* [Fixed #1210](https://github.com/NativeScript/nativescript-cli/issues/1210): LiveSync does not handle correctly removed files on iOS simulator.
* [Fixes #1308](https://github.com/NativeScript/nativescript-cli/issues/1308): Livesync ends up with an endless loop for projects that have before-prepare hook that changes some project file.

1.5.1 (2015, December 03)
==
### New
* [Implemented #452](https://github.com/NativeScript/nativescript-cli/issues/452): Build should report malformed XML.
* [Implemented #1263](https://github.com/NativeScript/nativescript-cli/issues/1263): Add timestamps to LiveSync messages.

### Fixed
* [Fixed #1234](https://github.com/NativeScript/nativescript-cli/issues/1234): LiveSync does not work for iOS platform specific .xml/.css files on iOS Simulator.
* [Fixed #1242](https://github.com/NativeScript/nativescript-cli/issues/1242): `ANDROID_HOME environment variable is not set correctly` error is thrown when `tns run ios --log trace` command is executed.
* [Fixed #1245](https://github.com/NativeScript/nativescript-cli/issues/1245): `TypeError: Cannot read property 'match' of null` error is thrown on various commands.
* [Fixed #1246](https://github.com/NativeScript/nativescript-cli/issues/1246): LiveSync on android device is throwing ENAMTOOLONG error on Windows.
* [Fixed #1253](https://github.com/NativeScript/nativescript-cli/issues/1253): iOS debugger does not work with iOS Simulator with Xcode7+.
* [Fixed #1268](https://github.com/NativeScript/nativescript-cli/issues/1268): Hook failures treated as bad user input.

1.5.0 (2015, November 24)
==

### New
* [Implemented #493](https://github.com/NativeScript/nativescript-cli/issues/493): Enable transpilers support in NativeScript projects.
* [Implemented #594](https://github.com/NativeScript/nativescript-cli/issues/594): Implement a hard dependency on the node.js version and exit if not satisfied.
* [Implemented #684](https://github.com/NativeScript/nativescript-cli/issues/684): Enable commands hooks.
* [Implemented #955](https://github.com/NativeScript/nativescript-cli/issues/955): Support for Xcode7 simulator.
* [Implemented #1007](https://github.com/NativeScript/nativescript-cli/issues/1007): Smarter and faster LiveSync.
* [Implemented #1048](https://github.com/NativeScript/nativescript-cli/issues/1048): Support Gradle files from plugins, merge android resource files using aapt and respect AndroidManifest.xml from App_Resources.
* [Implemented #1113](https://github.com/NativeScript/nativescript-cli/issues/1113): Let users create and execute unit tests in their projects.
* [Implemented #1117](https://github.com/NativeScript/nativescript-cli/issues/1117): Support for TypeScript-based NativeScript projects.
* [Implemented #1130](https://github.com/NativeScript/nativescript-cli/issues/1130): Show application output from livesync command for iOS devices and android devices and emulators.
* [Implemented #1164](https://github.com/NativeScript/nativescript-cli/issues/1164): Use android tools from ANDROID_HOME.
* [Implemented #1229](https://github.com/NativeScript/nativescript-cli/issues/1229): Support for Node 5.1.0.

### Fixed
* [Fixed #727](https://github.com/NativeScript/nativescript-cli/issues/727): Double logging with tns run ios.
* [Fixed #1044](https://github.com/NativeScript/nativescript-cli/issues/1044): iOS debug break on Simulator causes app crash when the debugger is paused on the first line for a long time.
* [Fixed #1086](https://github.com/NativeScript/nativescript-cli/issues/1086): --key-store-path option to look for the keystore file path relative to the app root.
* [Fixed #1106](https://github.com/NativeScript/nativescript-cli/issues/1106): Livesync double restarts for TS projects.
* [Fixed #1110](https://github.com/NativeScript/nativescript-cli/issues/1110): `tns doctor` command should detect invalid java version.
* [Fixed #1167](https://github.com/NativeScript/nativescript-cli/issues/1167): `tns run`, `tns emulate` and `tns deploy` commands do not check if device is available before build.
* [Fixed #1177](https://github.com/NativeScript/nativescript-cli/issues/1177): `tns run` command fails when multiple devices with same platform are attached.
* [Fixed #1185](https://github.com/NativeScript/nativescript-cli/issues/1185): `tns device` command fails when VS Emulator is running.
* [Fixed #1204](https://github.com/NativeScript/nativescript-cli/issues/1204): Incorrect prepare when using npm 3.x.

1.4.3 (2015, October 21)
==

### New
* [Implemented #883](https://github.com/NativeScript/nativescript-cli/issues/883): Support xcconfig file from plugin.
* [Implemented #958](https://github.com/NativeScript/nativescript-cli/issues/958): Support for Node 4.2.1+.
* [Implemented #1065](https://github.com/NativeScript/nativescript-cli/issues/1065): Support sandbox-pod.

### Fixed
* [Fixed #1031](https://github.com/NativeScript/nativescript-cli/issues/1031): Command emulate android after LiveSync starts the last synced app on the emulator.
* [Fixed #1044](https://github.com/NativeScript/nativescript-cli/issues/1044): iOS debug break on Simulator causes app crash when the debugger is paused on the first line for a long time.
* [Fixed #1054](https://github.com/NativeScript/nativescript-cli/issues/1054): ENOENT error is thrown when `tns platform add ios` command is executed.
* [Fixed #1066](https://github.com/NativeScript/nativescript-cli/issues/1066): Merge Info.plist fails second build.
* [Fixed #1080](https://github.com/NativeScript/nativescript-cli/issues/1080): Using --symlink for android runtime is modifying the original one.

1.4.2 (2015, October 15)
==

### Fixed
* [Fixed #1041](https://github.com/NativeScript/nativescript-cli/issues/1041): Unable to run the application when project root directory is renamed.

1.4.0 (2015, October 07)
==

### Breaking
* Application cannot be built with android-21 SDK. You need at least android-22 SDK in order to build or run your application on connected device or in emulator.

### New
* [Implemented #685](https://github.com/NativeScript/nativescript-cli/issues/685): Support static libraries in plugins for iOS.
* [Implemented #923](https://github.com/NativeScript/nativescript-cli/issues/923): Ability to specify android debug ui on Windows and Linux.
* [Implemented #927](https://github.com/NativeScript/nativescript-cli/issues/927): Support compileSdk option for android build.
* [Implemented #935](https://github.com/NativeScript/nativescript-cli/issues/935): Android 6.0 support.
* [Implemented #949](https://github.com/NativeScript/nativescript-cli/issues/949): `tns doctor` command checks if CocoaPods are not installed or old CocoaPods version is used.

### Fixed
* [Fixed #393](https://github.com/NativeScript/nativescript-cli/issues/393): Unable to build when app contains .gz file.
* [Fixed #748](https://github.com/NativeScript/nativescript-cli/issues/748): Debug --stop option does not detach the debug tools.
* [Fixed #936](https://github.com/NativeScript/nativescript-cli/issues/936): javac version is not getting properly extracted in case of open jdk systems.
* [Fixed #941](https://github.com/NativeScript/nativescript-cli/issues/941): `tns doctor` command reports Ant is not installed.
* [Fixed #942](https://github.com/NativeScript/nativescript-cli/issues/942): Updating some files in App_Resources kills livesync.
* [Fixed #943](https://github.com/NativeScript/nativescript-cli/issues/943): `tns run android` or `tns debug android` after `tns livesync android` starts the last synced app on the android device with api level 21 or greater.
* [Fixed #944](https://github.com/NativeScript/nativescript-cli/issues/944): Using CocosPods does not update the app deployment target to iOS 8.
* [Fixed #947](https://github.com/NativeScript/nativescript-cli/issues/947): Creash for missing module at runtime after upgrade a project from 1.2.0 version to 1.3.0 version.
* [Fixed #961](https://github.com/NativeScript/nativescript-cli/issues/961): `tns build` command crashes when NativeScript CLI is added as dev dependency to project.
* [Fixed #977](https://github.com/NativeScript/nativescript-cli/issues/977): `tns livesync <Platform> --watch` installs the application on the device on every change.
* [Fixed #989](https://github.com/NativeScript/nativescript-cli/issues/989): `tns doctor` command is failing when installed Gradle version contains more than 2 numbers.
* [Fixed #1018](https://github.com/NativeScript/nativescript-cli/issues/1018): ProjectName is incorrect in settings.gradle when projectDir name is different from projectId.
* [Fixed #1019](https://github.com/NativeScript/nativescript-cli/issues/1019): Check if shasum is correct for all cached packages.

1.3.0 (2015, September 16)
==

### Breaking

`library add` command is deprecated and will be removed completely in one of our next releases (currently scheduled for 1.5).
You cannot create NativeScript plugins with Android native code using Eclipse projects. You need to import your Eclipse project into Android Studio, convert it to Gradle build and consume the produced AAR file.
You cannot use Apache Ant to create new projects for Android but you can continue build your existing Ant-based projects. Starting with NativeScript 1.3, Android builds require Gradle. Run `tns doctor` on the command line to learn more.
Building NativeScript projects for Android requires Android SDK 22, Android SDK Build-tools 22, Android Support Repository and ANDROID_HOME environment variable set. Run `android` to configure Android SDK.

### New
* [Implemented #390](https://github.com/NativeScript/nativescript-cli/issues/390): Support tns_modules from npm.
* [Implemented #686](https://github.com/NativeScript/nativescript-cli/issues/686): Support building of XCode workspaces.
* [Implemented #687](https://github.com/NativeScript/nativescript-cli/issues/687): Android build with Gradle.
* [Implemented #729](https://github.com/NativeScript/nativescript-cli/issues/729): CocoaPods support from plugins.
* [Implemented #785](https://github.com/NativeScript/nativescript-cli/issues/785): Add platform on each platform related command.
* [Implemented #875](https://github.com/NativeScript/nativescript-cli/issues/875): Init command configure tns-core-modules version.

### Fixed
* [Fixed #662](https://github.com/NativeScript/nativescript-cli/issues/662): Failed `tns platform add android` command leaves the project in inconsistent state.
* [Fixed #730](https://github.com/NativeScript/nativescript-cli/issues/730): `tns livesync android` throws stdout maxBuffer exceeded.
* [Fixed #772](https://github.com/NativeScript/nativescript-cli/issues/772): `tns platform update ios` command does not update metadata generator.
* [Fixed #793](https://github.com/NativeScript/nativescript-cli/issues/793): The NativeScript CLI writes errors on stdout.
* [Fixed #797](https://github.com/NativeScript/nativescript-cli/issues/797): Plugin add does not merge plugins's Info.plist file.
* [Fixed #811](https://github.com/NativeScript/nativescript-cli/issues/811): `tns livesync <Platform> --watch` reports an error when platform specific file is changed.
* [Fixed #826](https://github.com/NativeScript/nativescript-cli/issues/826): Failed `tns prepare <Platform>` command leaves the project in inconsistent state.
* [Fixed #829](https://github.com/NativeScript/nativescript-cli/issues/829): Fail to build the project when `nativescript-telerik-ui` plugin is added before the platform.
* [Fixed #866](https://github.com/NativeScript/nativescript-cli/issues/866): The NativeScript CLI is not able to detect java on Ubuntu.
* [Fixed #896](https://github.com/NativeScript/nativescript-cli/issues/896): `tns run <Platform>` after `tns livesync <Platform>` starts the last synced app on the device.

1.2.4 (2015, August 24)
==

### Fixed

* [Fixed #806](https://github.com/NativeScript/nativescript-cli/issues/806): `tns library add android` command does not execute android project update if target 17 is not installed.
* [Fixed #807](https://github.com/NativeScript/nativescript-cli/issues/807): Android native libs are not respected correctly if the plugin is added as depedency to another plugin.

1.2.3 (2015, August 18)
==

### Fixed

* [Fixed #776](https://github.com/NativeScript/nativescript-cli/issues/776): `tns livesync ios --emulator --watch` doesn't sync changes.
* [Fixed #777](https://github.com/NativeScript/nativescript-cli/issues/777): `tns library add ios` does not build correct relative paths to referenced frameworks for mdgenerator.
* [Fixed #779](https://github.com/NativeScript/nativescript-cli/issues/779): Command failed due to space in library reference path.

1.2.2 (2015, August 11)
==

### New
* [Implemented #470](https://github.com/NativeScript/nativescript-cli/issues/470): Add `--timeout` option to `tns debug`.
* [Implemented #682](https://github.com/NativeScript/nativescript-cli/issues/682): Set `--debug-brk` as the default option of `tns debug`.
* [Implemented #706](https://github.com/NativeScript/nativescript-cli/issues/706): LiveSync to iOS Simulator.

### Fixed

* [Fixed #470](https://github.com/NativeScript/nativescript-cli/issues/470): Command failed due to space in file path.
* [Fixed #632](https://github.com/NativeScript/nativescript-cli/issues/632): Android debugger does not work on some OS X systems.
* [Fixed #652](https://github.com/NativeScript/nativescript-cli/issues/652): `tns debug ios` does not load inspector from the added iOS runtime.
* [Fixed #663](https://github.com/NativeScript/nativescript-cli/issues/663): Verify that Java is at least 1.7.
* [Fixed #671](https://github.com/NativeScript/nativescript-cli/issues/671): `tns debug ios` doesn't work for projects created with framework versions earlier than 1.2.0.
* [Fixed #679](https://github.com/NativeScript/nativescript-cli/issues/679): `tns library add ios` adds the framework with its full path in the Xcode project.
* [Fixed #695](https://github.com/NativeScript/nativescript-cli/issues/695): Exceptions tracking is not correctly set in the user settings.
* [Fixed #699](https://github.com/NativeScript/nativescript-cli/issues/699): Unable to update Android platform when npm cache is in an inconsistent state.
* [Fixed #722](https://github.com/NativeScript/nativescript-cli/issues/722): `tns debug` builds and installs the app twice.
* [Fixed #742](https://github.com/NativeScript/nativescript-cli/issues/742): `tns livesync android` doesn't work on some Android devices.
* [Fixed #747](https://github.com/NativeScript/nativescript-cli/issues/747): New files are not respected by `tns livesync`.

1.2.1 (2015, July 27)
==

### Fixed

* [Fixed #690](https://github.com/NativeScript/nativescript-cli/issues/690): The `$ tns debug ios --debug-brk` command does not work.

1.2.0 (2015, July 24)
==

### New

* [Implemented #621](https://github.com/NativeScript/nativescript-cli/issues/621): Added the `$ tns error-reporting` command. By default, anonymous error reporting is enabled.
* [Implemented #620](https://github.com/NativeScript/nativescript-cli/issues/620): Renamed the `$ tns feature-usage-tracking` command to `$ tns usage-reporting`. By default, anonymous usage reporting is enabled.
* [Implemented #523](https://github.com/NativeScript/nativescript-cli/issues/523): Added the `$ tns livesync <Platform>` command. You can use it to quickly synchronize changes to connected devices without re-building and re-deploying your apps.
* [Implemented #510](https://github.com/NativeScript/nativescript-cli/issues/510): Improvements and updates to the `$ tns plugin` sets of commands.
	* You can create and work with custom NativeScript plugins which contain Android native libraries.
	* You can create and work with custom NativeScript plugins which contain iOS dynamic native libraries.
	* The `$ tns plugin remove` command removes the Android native libraries carried by the plugin.
* [Implemented #480](https://github.com/NativeScript/nativescript-cli/issues/480): Added the `$ tns doctor` command. You can use it to quickly check for any configuration issues which might prevent the NativeScript CLI from working properly.

### Fixed

* [Fixed #658](https://github.com/NativeScript/nativescript-cli/issues/658): The `$ tns platform remove` command does not remove framework data from `package.json` for the project.
* [Fixed #644](https://github.com/NativeScript/nativescript-cli/issues/644): You cannot build your app for Android, if it contains a custom `styles.xml`.
* [Fixed #632](https://github.com/NativeScript/nativescript-cli/issues/632): On OS X systems with custom Chrome builds, you cannot debug Android apps. To be able to debug Android apps, you need to set the name of the custom Chrome build in the `ANDROID_DEBUG_UI_MAC` setting in `config.json`.
* [Fixed #629](https://github.com/NativeScript/nativescript-cli/issues/629): The `$ tns prepare` command does not populate the platform-specific directories correctly, if your project contains both an npm module, installed using `$ npm install`, and a NativeScript plugin, installed using `$ tns plugin add`.
* [Fixed #574](https://github.com/NativeScript/nativescript-cli/issues/574): The `$ tns prepare ios` command does not preserve file name casing when populating the platform-specific directories.
* [Fixed #538](https://github.com/NativeScript/nativescript-cli/issues/538): The NativeScript CLI interprets files whose names contain `ios` or `android` as platform-specific files and renames them, even if they are not platform-specific.
* [Fixed #281](https://github.com/NativeScript/nativescript-cli/issues/281): The `$ tns platform remove` command does not print any status message when the operation is successful.
* [Fixed #271](https://github.com/NativeScript/nativescript-cli/issues/271): The `$ tns create` command does not validate the path provided with the `--copy-from` option.
* [Fixed #139](https://github.com/NativeScript/nativescript-cli/issues/139): The `$ tns prepare` command does not remove files from the platform-specific directories correctly.

1.1.2 (2015, July 2)
==

### New

* [Implemented #600](https://github.com/NativeScript/nativescript-cli/issues/600): Added the `$ tns init` command. You can use it to initialize a NativeScript project for development. The command recreates or updates the `package.json` file of the project. You can then run `$ tns install` to install the platforms and dependencies described in the `package.json` file.
* [Implemented #587](https://github.com/NativeScript/nativescript-cli/issues/587): Added the `$ tns install` command. You can use it to quickly install all platforms and dependencies described in a `package.json` file.

### Fixed

* [Fixed #606](https://github.com/NativeScript/nativescript-cli/issues/606): The NativeScript CLI lets you run `<Platform>`-based commands on operating systems which do not support development for this platform. For example, you can run `$ tns build ios` on a Windows system.
* [Fixed #601](https://github.com/NativeScript/nativescript-cli/issues/601): The NativeScript CLI does not treat the dependencies of devDependencies as devDependencies.
* [Fixed #599](https://github.com/NativeScript/nativescript-cli/issues/599): The NativeScript CLI always creates a `tmp` directory in the current directory when you run any command and modifies the `package.json` file for the project.
* [Fixed #584](https://github.com/NativeScript/nativescript-cli/issues/584): The NativeScript CLI references the files in the project with their absolute paths instead of their relative paths. This might cause the project to stop working when transfered to another location and might cause issues with your application packages.
* [Fixed #578](https://github.com/NativeScript/nativescript-cli/issues/578): Platform-specific files in NativeScript plugins are not processed correctly. The NativeScript CLI copies them to the correct platform-specific directory but does not rename them correctly.
* [Fixed #520](https://github.com/NativeScript/nativescript-cli/issues/520): iOS resources from the `App_Resources` folder are not included in the native Xcode project and are not accessible in the application package.

1.1.1 (2015, June 17)
==

### New

* [Implemented #551](https://github.com/NativeScript/nativescript-cli/issues/551): You can now develop for Android 5.1.1 (API Level 22). If you have this SDK installed on your system, the CLI will set it as the default target SDK when you run `$ tns platform add android`
* [Implemented #552](https://github.com/NativeScript/nativescript-cli/issues/552): You can now set the target Android SDK for your project by specifying the `--sdk ` option for `$ tns platform add android` operations.

### Fixed

* [Fixed #555](https://github.com/NativeScript/nativescript-cli/issues/555): In some cases, the CLI merges incorrectly the plugin platform-specific `AndroidManifest.xml` or `Info.plist` with the respective platform-specific configuration files from the project.
* [Fixed #567](https://github.com/NativeScript/nativescript-cli/issues/567): You cannot use npm as a package manager inside your project.
* [Fixed #569](https://github.com/NativeScript/nativescript-cli/issues/569): On some Windows systems, the CLI installation shows errors in the console.

1.1.0 (2015, June 10)
==

### Breaking

* Replaced `.tnsproject` with `package.json` to let you use npm and work with custom plugins in your project.<br/>The first time you run any NativeScript command on an existing project, your `.tnsproject` file will be automatically transformed into a `package.json` file describing your project configuration and data. After this, make sure to commit and push your changes if you are using version control.<br/>After the transformation is complete, you can install and use custom NativeScript plugins inside your project.

### New

* [Implemented #510](https://github.com/NativeScript/nativescript-cli/issues/510): You can work with custom NativeScript plugins in your project. You can add a plugin from an npm package, a local folder, a URL or a `.tar.gz` file. For more information, run `$ tns help plugin`
* [Implemented #362](https://github.com/NativeScript/nativescript-cli/issues/362): You can use npm as package manager for your NativeScript projects.

### Updated

* [Updated #358](https://github.com/NativeScript/nativescript-cli/issues/358): Multiple improvements and bug fixes for iOS debugging.

### Fixed

* [Fixed #446](https://github.com/NativeScript/nativescript-cli/issues/446): Autocompletion might continue to work after disabling because `tns autocomplete disable` does not update `.profile` files.
* [Fixed #391](https://github.com/NativeScript/nativescript-cli/issues/391): The default 9-patch image for Android projects is malformed and causes error messages in the build log.
* [Fixed #324](https://github.com/NativeScript/nativescript-cli/issues/324): When you run commands for the `ios` platform, the NativeScript CLI might show the following unrelated adb warning: `Unable to find adb in PATH. Default one from %s resources will be used.`
* [Fixed #309](https://github.com/NativeScript/nativescript-cli/issues/309): You cannot open the device log for streaming with the `tns device log` command.

1.0.2 (2015, May 27)
==

### Fixed

* [Fixed #498](https://github.com/NativeScript/nativescript-cli/issues/498): On some Linux and OS X systems, when the USER or SUDO_USER environment variables are missing, you cannot run NativeScript CLI commands. The following error appears when you attempt to run `nativescript` or `tns` commands: `TypeError: Arguments to path.join must be strings`.

1.0.1 (2015, May 8)
==

### Fixed

* [Fixed #459](https://github.com/NativeScript/nativescript-cli/issues/459): You cannot add a third-party iOS native library to your project, if the path to the library contains spaces.
* [Fixed #458](https://github.com/NativeScript/nativescript-cli/issues/458): If you have installed Xcode 6.2 or earlier on your system, you cannot debug in the iOS Simulator.
* [Fixed #413](https://github.com/NativeScript/nativescript-cli/issues/413): If your project name contains a hyphen, the NativeScript CLI sets your application identifier inconsistently across the project.

1.0.0 (2015, April 28)
==

### New

* [Implemented #447](https://github.com/NativeScript/nativescript-cli/issues/447): `tns run ios`, `tns run android` and `tns emulate android` print the output of the running application in the console.
* [Implemented #441](https://github.com/NativeScript/nativescript-cli/issues/441): Improved command-line completion.
* [Implemented #416](https://github.com/NativeScript/nativescript-cli/issues/416): Improved installation.
* [Implemented #358](https://github.com/NativeScript/nativescript-cli/issues/358): Improved `tns debug ios`.

### Fixed

* [Fixed #446](https://github.com/NativeScript/nativescript-cli/issues/446): `tns autocomplete disable` might not disable command-line completion properly.
* [Fixed #445](https://github.com/NativeScript/nativescript-cli/issues/445): For some commands, HTML help is shown instead of the console help.
* [Fixed #444](https://github.com/NativeScript/nativescript-cli/issues/444): When you attempt to install the `nativescript` npm module using `sudo`, errors might be shown.
* [Fixed #443](https://github.com/NativeScript/nativescript-cli/issues/443): When you attempt to configure command-line completion during installation, `ENOENT` error might be shown.
* [Fixed #442](https://github.com/NativeScript/nativescript-cli/issues/442): The console does not show links properly.
* [Fixed #394](https://github.com/NativeScript/nativescript-cli/issues/394): On OS X or Linux systems, the NativeScript CLI does not resolve symlinks and you cannot build your apps.
* [Fixed #391](https://github.com/NativeScript/nativescript-cli/issues/391): The Android splash screen image in the template is malformed and causes errors in the build log.
* [Fixed #324](https://github.com/NativeScript/nativescript-cli/issues/324): If the Android SDK is not properly configured, when you run `tns build ios`, `run ios`, `tns deploy ios` or `tns emulate ios`, the NativeScript CLI prints an irrelevant adb-related warning.
* [Fixed #309](https://github.com/NativeScript/nativescript-cli/issues/309): You cannot open the device log for streaming with `tns device log`.
* [Fixed #276](https://github.com/NativeScript/nativescript-cli/issues/276): On bash consoles, command-line completion does not work.

0.10.0 (2015, April 21)
==

### Breaking

* Introduced new project structure. To migrate to the new structure, complete the following steps.
	1. Manually move all files and folders from the inner `app` folder one level up inside the outer `app` folder.
	1. Remove the now empty inner `app` folder.
	1. Verify that your project structure reflects the structure described [here](https://github.com/NativeScript/nativescript-cli/blob/production/README.md#create-project).

### New

* [Implemented #388](https://github.com/NativeScript/nativescript-cli/issues/388): Improved the `--log trace` global option.
* [Implemented #387](https://github.com/NativeScript/nativescript-cli/issues/387): Improved installation.
* [Implemented #350](https://github.com/NativeScript/nativescript-cli/issues/350): Improved command-line completion.
* [Implemented #175](https://github.com/NativeScript/nativescript-cli/issues/175): You can run your app in Android virtual devices, created from the Google APIs images from the Android SDK.
* [Implemented #88](https://github.com/NativeScript/nativescript-cli/issues/88), [#291](https://github.com/NativeScript/nativescript-cli/issues/291): Introduced context-aware console help which you can access by running `tns <Command> -h` and extended HTML help which you access by running `tns help <Command>`.

### Fixed

* [Fixed #380](https://github.com/NativeScript/nativescript-cli/issues/380): When you run `tns build android`, `tns run android`, `tns deploy android` or `tns emulate android`, the NativeScript CLI builds your project twice.
* [Fixed #371](https://github.com/NativeScript/nativescript-cli/issues/371): On Android 5.x devices, NativeScript apps load very slowly on first run.
* [Fixed #260](https://github.com/NativeScript/nativescript-cli/issues/260): On bash consoles, the `open` command might stop working.
* [Fixed #257](https://github.com/NativeScript/nativescript-cli/issues/257): On bash consoles, you cannot pass arguments with spaces, even if escaped.
* [Fixed #251](https://github.com/NativeScript/nativescript-cli/issues/251): On OS X systems, the command validation might not work properly.
* [Fixed #248](https://github.com/NativeScript/nativescript-cli/issues/248): On OS X systems, the `tns deploy` command might not release the console.
* [Fixed #169](https://github.com/NativeScript/nativescript-cli/issues/169): The native Xcode project is created with an incorrect name.

0.9.4 (2015, March 18)
==

### Fixed

* [Fixed #348](https://github.com/NativeScript/nativescript-cli/issues/348): `tns platform add ios` downloads the latest experimental version of the ios runtime instead of the latest stable version.

0.9.3 (2015, March 18)
==

### Fixed

* [Fixed #312](https://github.com/NativeScript/nativescript-cli/issues/312): `tns platform add ios` does not preserve your app ID, if not default.

0.9.2 (2015, March 17)
===

### New

* [Implemented #305](https://github.com/NativeScript/nativescript-cli/issues/305), [#322](https://github.com/NativeScript/nativescript-cli/issues/322): You can quickly add or update your platform runtime to a specific version by running `tns platform update platform@version`<br/>For example: `tns platform update ios@0.9.2-beta`<br/>The NativeScript team will publish experimental support for the latest versions of iOS and Android.<br/>To list all available versions for android, run $ npm view tns-android versions<br/>To list only experimental versions for android, run $ npm view tns-android dist-tags
To list all available versions for ios, run $ npm view tns-ios versions<br/>To list only experimental versions for ios, run $ npm view tns-ios dist-tags
* [Implemented #302](https://github.com/NativeScript/nativescript-cli/issues/302): You can configure proxy settings for the NativeScript CLI.

### Fixed

* [Fixed #299](https://github.com/NativeScript/nativescript-cli/issues/299): You cannot build the default `Hello World` app for Android on OS X systems.
* [Fixed #297](https://github.com/NativeScript/nativescript-cli/issues/297): You cannot install the NativeScript CLI.