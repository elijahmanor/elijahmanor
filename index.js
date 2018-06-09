#!/usr/bin/env node

const lolcatejs = require( "lolcatjs" );

lolcatjs.options.seed = Math.round( Math.random() * 1000 );
lolcatjs.options.colors = true;

const me = JSON.stringify( require( './me.json' ), null, 2 );

console.log( lolcatjs.fromString( me ) );
