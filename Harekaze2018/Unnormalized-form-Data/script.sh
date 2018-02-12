#! /bin/bash


dropdb unf
createdb unf
psql -U postgres -d unf < unf_modified.sql >> /dev/null
echo "" > dump
for i in {0..40}; do psql -U postgres -d unf -c "SELECT FLAG($i)" >> dump; done;
head -10 dump


