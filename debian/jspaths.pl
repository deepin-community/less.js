#!/usr/bin/perl

use strict;
use warnings;

# We need a parser that tolerates lack of final newline
use YAML::Tiny;

my $data = YAML::Tiny->read($ARGV[0])->[0];

# dig out and expand source files for browser use
my @items = map {
	s,<%= build\.([a-z_]+)\.([a-z_]+) %>,$data->{$1}{$2},;
	s,<%= build\.([a-z_]+) %>,$data->{$1},;
	grep /./, split /[\'\[\], ]+/;
	} @{$data->{browser}};

print join ("\n", @items), "\n";

1;
