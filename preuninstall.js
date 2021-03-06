var child_process = require("child_process");

var child = child_process.exec("node bin/nativescript.js dev-preuninstall", function (error) {
	if (error) {
		// Some npm versions (3.0, 3.5.1, 3.7.3) remove the NativeScript node_modules before the preuninstall script is executed and the script can't find them (the preuninstall script is like postinstall script).
		// The issue is described in the npm repository https://github.com/npm/npm/issues/8806 and it is not fixed in version 3.1.1 as commented in the conversation.
		console.error("Failed to complete all pre-uninstall steps. ");
	}
});

child.stdout.pipe(process.stdout);
