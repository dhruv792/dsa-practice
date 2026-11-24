#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 || ! $1 =~ ^practice([.][A-Za-z_][A-Za-z0-9_]*)+$ ]]; then
  echo 'Usage: bash java/test.sh practice.topic.Exercise' >&2
  exit 2
fi

java_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
exercise_class=$1
class_path=$(printf '%s' "$exercise_class" | tr '.' '/')
solution="$java_dir/src/main/java/$class_path.java"
test_source="$java_dir/src/test/java/${class_path}Test.java"

if [[ ! -f "$solution" || ! -f "$test_source" ]]; then
  echo "No exercise and test pair found for $exercise_class." >&2
  exit 2
fi

classes=$(mktemp -d "${TMPDIR:-/tmp}/dsa-java.XXXXXXXX")
trap 'rm -rf -- "$classes"' EXIT

javac --release 21 -d "$classes" "$solution" "$test_source"
java -cp "$classes" "${exercise_class}Test"
