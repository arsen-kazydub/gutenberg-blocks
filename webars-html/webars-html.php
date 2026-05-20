<?php
/**
 * Plugin Name:       Webars HTML
 * Description:       Insert a custom HTML snippet or SVG code. Perfect for icons: standalone or paired with text.
 * Version:           1.0.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Arsen Kazydub
 * Author URI:        https://github.com/arsen-kazydub
 * License:           GPL-2.0-or-later
 * Text Domain:       webars-html
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function webars_html_block_init() {
	register_block_type( __DIR__ . '/build/webars-html' );
}
add_action( 'init', 'webars_html_block_init' );
