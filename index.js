#!/usr/bin/env node

const lolcatjs = require( "lolcatjs" );

lolcatjs.options.seed = Math.round( Math.random() * 1000 );
lolcatjs.options.colors = true;

const me = JSON.stringify( require( './me.json' ), null, 2 );

lolcatjs.fromString( me );
