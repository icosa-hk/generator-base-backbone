'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		jquery: '../lib/jquery',
		underscore: '../lib/lodash',
		backbone: '../lib/backbone',
    tether: '../lib/tether',
		bootstrap: '../lib/bootstrap'
	}
});
require(['backbone', 'jquery', 'underscore', 'tether'], function() {
	require(['bootstrap'], function() {
		require(['router'], function(Router) {
			Router.initialize();
		});
	});
});
