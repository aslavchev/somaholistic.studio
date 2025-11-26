#!/usr/bin/perl
use strict;
use warnings;

my $file = 'src/components/Footer.tsx';
open my $in, '<', $file or die $!;
my @lines = <$in>;
close $in;

# Remove line 92 (extra </div>)
splice(@lines, 91, 1);

# Lines 79-91 need to become one column
# Line 79 closes Working Hours paragraph
# Line 80-81 need to be removed (empty + new div start)
# Insert Quick Links content into same column

# After removing line 92, line numbers shift
# New structure:
# Keep line 79: </div> after paragraph
# Remove line 80-81 (blank + <div>)
# Keep Quick Links content

splice(@lines, 79, 2);  # Remove blank line and <div> start for Quick Links

# Now insert Quick Links headers as continuation of same column
splice(@lines, 79, 0,
  "\n",
  "            <h4 className=\"font-semibold mb-4\">{t(\"Бързи връзки\", \"Quick Links\")}</h4>\n"
);

# Change margin bottom on Working Hours paragraph
$lines[72] =~ s/text-sm">/text-sm mb-6">/;

open my $out, '>', $file or die $!;
print $out @lines;
close $out;

print "Footer fixed!\n";
